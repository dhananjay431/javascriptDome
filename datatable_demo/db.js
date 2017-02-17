var express = require('express');
var path= require('path');
var mongoose = require('mongoose');
var DataTable = require('mongoose-datatable');
var app = express();
var bodyParser = require('body-parser')
mongoose.connect('mongodb://10.0.1.9/tw-qa-20170106');
app.use(bodyParser.json())
//DataTable.configure(options);
mongoose.plugin(DataTable.init);
var Cat = mongoose.model('TXN_Organizations',new mongoose.Schema({}, {strict: false}));
var Per = mongoose.model('TXN_Personnels',new mongoose.Schema({}, {strict: false}));

//var Cat = mongoose.model('TXN_WebUserLog',new mongoose.Schema({"name":String}));


app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', express.static(path.join(__dirname, '/bower_components')))
app.get('/',function(){
		return res.sendFile(path.join(__dirname + '/public/index.html'));	
});


app.get('/getdata', function (req, res) {
// 	Cat.find({name:'Zildjian'},function(err,data){
// 	  if (err) {
//     res.send(err);
//   } else {
//     	res.send({"data":data});
//   }
// })
var personnelPopulations = [
    { path: 'orgUserId', match: { active: true, deleted: false } },
    { path: 'titleMaster', match: { active: true, deleted: false } },
    { path: 'officers.officerTypeId', match: { active: true, deleted: false } },
    { path: 'officers.listingType', match: { active: true, deleted: false } },
    { path: 'personType', match: { active: true, deleted: false } },
    { path: 'address.addressType', match: { active: true, deleted: false } },
    { path: 'address.city', match: { active: true, deleted: false } },
    { path: 'address.state', match: { active: true, deleted: false } },
    { path: 'address.country', match: { active: true, deleted: false } },
    { path: 'address.county', match: { active: true, deleted: false } },
    { path: 'ocdDegree.degreeType', match: { active: true, deleted: false } },
    { path: 'assignment.assignTypeId', match: { active: true, deleted: false } },
    { path: 'status', match: { active: true, deleted: false } },
    { path: 'ocdContact.contactType', match: { active: true, deleted: false } },
    { path: 'responsibilityCodes.responsibilityCode', match: { active: true, deleted: false } },
];

 Cat.find({"name":"4 Culture"})
 .populate({path: 'personnel'})
 .exec( function(err,data){
	  if (err) {
    res.send(err);
  } else {
    	res.send({"data":data});
  }
})



});


//{"_id":{"$in":["58a41730acaa2eaead047e80","58a198956bbcc6a80cff1e00"]}}
app.post('/getdata', function (req, res) {
console.log(req.body);
//var option={'conditions':{"name":new RegExp(req.body.dt.search.value,'i')}};

req.body.qr.directoryId=mongoose.Types.ObjectId(req.body.qr.directoryId);
Cat.find(req.body.qr,function(err,data){
	  if (err) {
    res.send(err);
  } else {

  var arr=	data.map(function(d){
  		return d._id;
  	});
//'_id','name','timing','personnel'
var op={"conditions":{"_id":{"$in":arr}},"select":['name',"personnel.title"]};
  	dt(req.body.dt,op,function(err,dtData){
      		if(err) return  res.send(err);		
      		console.log("dtData",dtData);
      		res.send(dtData);

  	});
  	}
})



// var option={'conditions':};
// option.select=['_id','name'];

// 	dt(req.body.dt,option,function(err, data) {
//     	if(err) return  res.send(err);
//      	res.send(data);
// 	});
});

function dt(qr,op,cb){
	Cat.dataTable(qr,op,cb);
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})