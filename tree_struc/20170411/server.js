var express = require('express')
var mongoose = require('mongoose');
var path= require('path');
var bodyParser = require('body-parser')
//mongoose.connect('mongodb://10.0.1.6/20170106');
mongoose.connect('mongodb://10.0.1.131/tw-prod-ocdDev');

var app = express()
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/public')))
var org = mongoose.model('TXN_Organizations',new mongoose.Schema({}, {strict: false}));

var ps = mongoose.model('products_services',new mongoose.Schema({}, {strict: false}));


app.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname + '/public/index.html'));	
})
function bunflatten(nodes){
var map = {}, _node, roots = [];
for (var i = 0; i < nodes.length; i += 1) {
    _node = nodes[i];
    _node.children = [];
    map[_node._id] = i; // use map to look-up the parents
    if (_node.parentId !== "578db77ec19cc73dbcbd1970") {
	_node.children = [];
        nodes[map[_node.parentId]].children.push(_node);
    } else {
        roots.push(_node);
    }
}
	return roots;
}
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
			case 'Date':
                {
						object =new Date(object['value'])
                    break;
                }
        }
    }
    return object;
}
function listOrg(qr,cb)
{
	org.find(qr)
	.select({ _id: 1, name: 1 ,parentId:1})
	.exec(cb);
}

app.post('/psData', function (req, res) {
console.log(evaluate(req.body))
		ps.find(evaluate(req.body))
		.select(
		{
		"categories.ProductCategoryName": 1, 
		"categories.ProductSubCategoryName":1,
		"companyName": 1, 
		"startDate": 1, 
		"endDate": 1})
		.sort({"endDate":1})
		.exec(function(err,data){
		res.send(data);
		});
})

app.post('/dbData', function (req, res) {
		listOrg(evaluate(req.body),function(err,data){
			res.send(data);
		});
})

app.post('/dbUpdate', function (req, res) {

		var options = { strict: false };
		
		org.update(evaluate(req.body), { "$push": { xxx: 'dhananjay' }}, options, function(err,doc){ res.send(doc)});
		
})

app.post('/dbCount', function (req, res) {
	res.send(org.find({}).count());
	/*
		org.find(evaluate(req.body)).exec(function(err,doc){
				res.send(doc);
		});*/
		
})

app.post('/tree', function (req, res) {
	org.find(evaluate(req.body))
	.select({ _id: 1, name: 1 ,parentId:1})
	.sort({"sequenceNo":-1})
	.exec(function(err,data){
			res.send(data);
	});	
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



