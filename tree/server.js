var express = require('express')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var path= require('path');
var bodyParser = require('body-parser')



//mongoose.connect('mongodb://10.0.1.6/20170106');
var connection = mongoose.connect('mongodb://10.0.1.9/tw-uat-31-03-2017');
autoIncrement.initialize(connection);

var per= require('./person.js');

var bookSchema = new Schema({
    title: String,
    genre: String,
});
//startAt

//end
//bookSchema.plugin(autoIncrement.plugin, 'Book');
//bookSchema.plugin(autoIncrement.plugin, { model: 'Book', field: 'bookIdOfId' });

bookSchema.plugin(autoIncrement.plugin, {
    model: 'Book',
    field: 'PeopleId',
    startAt: 306070,
    incrementBy: 1
});
var Book = connection.model('Book', bookSchema);




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
app.get('/book',function(req,res){

	var small = new Book({ title: 'small' ,genre:"big"});
	small.save(function (err,data) {
	if (err) return handleError(err);
		res.send(data);
	})
})
app.get('/person',function(req,res){

	var small = new per({ title: 'small'});
	small.save(function (err,data) {
	if (err) return handleError(err);
		res.send(data);
	})
})
app.get('/bulkperson',function(req,res){
			var bulk=per.collection.initializeOrderedBulkOp();
			var small = [{ title: 'small123'},{ title: 'small123'},{ title: 'small123'},{ title: 'small123'},{ title: 'small123'}];
			for(var i=0;i<small.length;i++)
			{
				bulk.insert( new per(small[i]));		
			}
			bulk.execute(function(err,data){
			res.send(data);
			})
	 
})
 

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
		listOrg(evaluate(req.body),function(err,data){res.send(data);});
})

app.post('/dbData', function (req, res) {
		listOrg(evaluate(req.body),function(err,data){res.send(data);});
})

function listOrgData(qr){		
		//org.find(qr).select({ _id: 1, name: 1 ,parentId:1}).exec(function(err,data){res.send(data);});
		return org.find(qr).select({ _id: 1, name: 1 ,parentId:1});
		
}

function showAll(req,res,next) {
		
		req.data.push(req.data.length);
		if(req.data.length != 10)
		{
			show(req,res,next)
			next();
		}
		else
		res.send(req.data);
		
}
app.post('/dbDataOfData',function(req,res,next){ req.data=[1,21,321,321,32,1321];
	res.send(req.data)

 });
//////////
/*
		var qr=evaluate(req.body);
			listOrgData(qr).exec(
				function(err,data){
				//res.send(data);
				var temp={};
				for(var i=0;i<data.length;i++)
					{	
					temp.id=data[i]._id;
					temp.title=data[i].name;
					req.all.push(angular.copy(temp));
					req.body={"parentId":{"_eval":"Id","value":data[i]._id},"directoryId":{"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}}
					}
				}
				);*/
///////
		/*
		listOrg(evaluate(req.body),function(err,data){
			
			
				var temp={};
				for(var i=0;i<data.length;i++)
				{
					temp.id=data[i]._id;
					temp.title=data[i].name;
					req.all.push(angular.copy(temp));
					req.body={"parentId":{"_eval":"Id","value":data[i]._id},"directoryId":{"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}}
					listOrg()
					
					show({ "parentId": {"_eval":"Id","value":data[i]._id}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}});
				}
				
		});
		*/


app.get('/dnext', function (req, res, next) {
		req.data=[];
		
		req.data.push({name:"function1"});
		console.log("function1")
		next();
},
function (req, res, next) {
		req.data.push({name:"function2"});
		console.log("function2")
		next();
},
function (req, res, next) {
		req.data.push({name:"function3"});
		console.log("function3")
		next();
},
function (req, res) {
		req.data.push({name:"function4"});
		console.log("function4")
		res.send(req.data);
})

app.post('/dbUpdate', function (req, res) {

		var options = { strict: false };
		
		org.update(evaluate(req.body), { "$push": { xxx: 'dhananjay' }}, options, function(err,doc){ res.send(doc)});
		
})

app.post('/dbCount', function (req, res) {
/*
		org.find().count(function(err, count){
				res.send({"ID":count});
		});*/
		
		ps.find({}).count(function(err, count){
				res.send({"ID":count});
		});
		
		
})

app.post('/tree', function (req, res) {
	org.find(evaluate(req.body))
	.select({ _id: 1, name: 1 ,parentId:1})
	.exec(function(err,data){
			res.send(data);
	});	
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})



