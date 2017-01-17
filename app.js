var express = require('express')
var jwt = require('jsonwebtoken');
var router = express.Router()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path= require('path');
var app = express();
var requestIp = require('request-ip');
app.use(bodyParser.json())

router.use(function (req, res, next) {

console.log("req.ip",req.ip);
	var clientIp = requestIp.getClientIp(req); 
	console.log("IP",clientIp);
jwt.verify(req.get('ETag'), 'secret', function(err, decoded) {
		if(err) 
		return res.sendFile(path.join(__dirname + '/public/index.html'));
		next();	
});
})
mongoose.connect('mongodb://localhost/test');
var appFormSchema =new mongoose.Schema({}, {strict: false});
var Cat = mongoose.model('Cats',appFormSchema);
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', express.static(path.join(__dirname, '/bower_components')))
app.use(bodyParser.json({ type: 'application/*+json' }));

app.get('/123', function (req, res) {
var d = new Date();
var ee=d.setTime(d.getTime() / 1000 +(60 * 60));
var token=jwt.sign({
  exp:ee,
  data: 'secret'
}, 'secret');

return res.send(token);
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

