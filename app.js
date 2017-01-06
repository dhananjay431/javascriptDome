var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path= require('path');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json({ type: 'application/*+json' }));
mongoose.connect('mongodb://localhost/test');

var appFormSchema =new mongoose.Schema({}, {strict: false});

var Cat = mongoose.model('Cats',appFormSchema);


app.get('/', function (req, res) {

});
app.get('/db/:dname', function (req, res) {
Cat.find({name:req.params.dname }).exec(function (err, small) {
  if (err) 
  return  res.send('error');
  else
  return  res.send(small);
});
});
app.get('/db/:dname', function (req, res) {
Cat.find({ name:req.params.dname }).exec(function (err, small) {
  if (err) 
  return  res.send('error');
  else
  return  res.send(small);
});
});
app.post('/db/:dname', function (req, res) {
console.log("req.body",req.body);
console.log("req.query",req.query);

console.log("req.params.dname",req.params.dname);
var query=req.body;
query.name=req.params.dname;
console.log(query);
var CAT=new Cat(query);
CAT.save(function (err) {
  if (err) return res.send(err);
  else
  return res.send("success");
  
})

});
 
app.listen(3000)

