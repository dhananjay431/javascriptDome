var express = require('express')
var jwt = require('jsonwebtoken');
var router = express.Router()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path= require('path');
var app = express();

app.use(bodyParser.json())

router.use(function (req, res, next) {
jwt.verify(req.get('ETag'), 'shhhhh', function(err, decoded) {
  if(decoded != undefined)
  {
	next();
  }else{
   res.sendFile(path.join(__dirname + '/public/index.html'));
  }
});
})
mongoose.connect('mongodb://localhost/test');
var appFormSchema =new mongoose.Schema({}, {strict: false});
var Cat = mongoose.model('Cats',appFormSchema);
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', express.static(path.join(__dirname, '/bower_components')))
app.use(bodyParser.json({ type: 'application/*+json' }));

app.get('/123', function (req, res) {
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

return res.send({"token":token});
});

router.get('/db', function (req, res) {
//var token = jwt.sign({ foo: 'bar' }, 'shhhhh');


console.log('req.get(ETag)',req.get('ETag'));
	
  Cat.find({ TABLENAME:req.query.name },{"__v": 0, "TABLENAME": 0}).exec(function (err, small) {
  if (err) 
  return  res.send('error');
  else
  return  res.send(small);
});




});


router.post('/db', function (req, res) {
console.log("req.get('ETag')",req.get('ETag'));
var x=req.body;
x.TABLENAME=req.query.name;
console.log(x);
var CAT=new Cat(x);
if(req.get('ETag'))
CAT.save(function (err) {
  if (err) return res.send(err);
  else
  return res.send("success");
})

});
app.use('/api/v1/', router)
app.listen(3000)

