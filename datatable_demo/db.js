var express = require('express');
var path= require('path');
var mongoose = require('mongoose');
var DataTable = require('mongoose-datatable');
var app = express();
var bodyParser = require('body-parser')
mongoose.connect('mongodb://10.0.1.131/tw-uat-31-03-2017');
app.use(bodyParser.json())
//DataTable.configure({ verbose: true, debug : true });
mongoose.plugin(DataTable.init);

var Cat = mongoose.model('TXN_Organizations',new mongoose.Schema({}, {strict: false}));
var Per = mongoose.model('TXN_personnels',new mongoose.Schema({}, {strict: false}));

function evaluate(object) {
    if (object && object.constructor === Array) {
        for (var i = 0; i < object.length; i++) {
            object[i] = evaluate(object[i]);
        }
    } else if (object && typeof object == 'object' && Object.keys(object).length > 0) {
        if (Object.keys(object).indexOf('_eval') < 0) {
            for (var key in object) {
                object[key] = evaluate(object[key]);
            }
        } else switch (object['_eval']) {
            case 'Id':
                {
                    object = mongoose.Types.ObjectId(object['value']);
                    break;
                }
			case 'regex':
                {
                    object = new RegExp(object['value'], 'i');
                    break;
                }

        }
    }
    return object;
}

app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', express.static(path.join(__dirname, '/bower_components')))
app.get('/',function(){
		return res.sendFile(path.join(__dirname + '/public/index.html'));	
});

app.post('/getdata', function (req, res) {
req.body=evaluate(req.body);
	var dtop={
	conditions: req.body.qr,
	select:['name',"_id","classificationCodeName"]};
	
console.log('req.body.dt',JSON.stringify(evaluate(req.body.dt)));
	Cat.dataTable(evaluate(req.body.dt),dtop,function(err,d){ res.send(d)});
})
app.post('/pgetdata', function (req, res) {
req.body=evaluate(req.body);
//console.log(JSON.stringify(req.body.dt,undefined,3));
console.dir(req.body.dt, {depth: null, colors: true})
	var dtop={
	conditions: req.body.qr,
	//select:["_id","PeopleId","org_id","titleMasterName","homeDiocese","address.cityName","address.stateName","address.zip","address.countryName","address.sequenceNo","address.stateAbbreviation"]
	select:["PeopleId","address.cityName","orgId.name"]
	};
	Per.dataTable(evaluate(req.body.dt),dtop,function(err,d){ res.send(d)});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

