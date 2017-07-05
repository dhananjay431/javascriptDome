var express = require('express')
var mongoose = require('mongoose');
var DataTable = require('mongoose-datatable');

var js2xmlparser = require("js2xmlparser");

var log = require('npmlog');
var logfile = require('npmlog-file')

var groom = require('groom');
var fs = require('fs');
var json2xml = require('json2xml');

var path= require('path');
var bodyParser = require('body-parser');
var Schema = mongoose.Schema,ObjectId = Schema.ObjectId;
mongoose.plugin(DataTable.init);
var gre_requirementsSchema = new Schema({
    _id  : ObjectId,
    schoolName:String,
    department      : String,
    greRequirements:String,
    minimumQuantitative:String,
    minimumVerbal:String,
    minimumAnalytical:String,
    grePhysics:String,
    minimumGREPhysics:String,
});


const app = express()

app.use(bodyParser.json())
var connection = mongoose.connect('mongodb://10.0.1.6/school');

var greReq = mongoose.model('gre_requirements',gre_requirementsSchema);


var grexml = mongoose.model('gre_xmls',new Schema({}));

app.use('/', express.static(path.join(__dirname, '/www')))
app.use('/js', express.static(path.join(__dirname, '/www/js')))
app.use('/css', express.static(path.join(__dirname, '/www/css')))
app.use('/img', express.static(path.join(__dirname, '/www/img')))
app.use('/html', express.static(path.join(__dirname, '/www/html')))
app.use('/vendor', express.static(path.join(__dirname, '/www/js/vendor')))
app.get('/index', function (req, res) {
  return res.sendFile(path.join(__dirname + '/www/index.html'));  
})
app.get('/index/*', function (req, res) {
  return res.sendFile(path.join(__dirname + '/www/index.html'));	
})

app.get('/data', function (req, res) {
  //return res.sendsFile(path.join(__dirname + '/www/index.html'));	
  
  grexml.find({}).exec(function(err,data){ 
  	return res.send(data);
  })
})

app.get('/xmldata',function(rew,res){
 
 // grexml.find({}).select({"_id":0,"personnel._id":0,"parentId":0,"sequenceNo":0,"orgIdNumber":0}).exec(function(err,data){
 //  fs.writeFile('data.xml', json2xml(data));
 //  return res.send("success");
 // })
 //_id:mongoose.Types.ObjectId("578db816c19cc73dbcbea656")
 grexml.find({}).select({"_id":0,"personnel._id":0,"parentId":0,"sequenceNo":0,"orgIdNumber":0}).exec(function(err,data){

  //fs.writeFile('data.xml',json2xml(groom(data)));
  //logfile.write(js2xmlparser.parse("root", groom(data)), 'log.txt');
  fs.writeFile('data.xml',js2xmlparser.parse("root", groom(data)));
  
  return res.send("done");
 })
 
});

app.post('/data2', function (req, res) {
  var dtop={
	conditions: evaluate(req.body.qr),
	select:evaluate(req.body.select)};
  greReq.dataTable(evaluate(req.body.dt),dtop,function(err,d){ res.send(d)});

})
app.post('/typehead', function (req, res) {
	var qr=evaluate(req.body)
	console.log(qr);
	// res.send(qr);
	 console.log(qr);
	var qrobj=greReq.find(qr.qr);
	if(qr.select)
		qrobj.select(qr.select);
	if(qr.sort)
		qrobj.sort(qr.sort);
	if(qr.limit)
		qrobj.limit(qr.limit);
	qrobj.exec(function(err,d){ res.send(d)});
})


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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});