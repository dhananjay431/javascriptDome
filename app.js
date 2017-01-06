var express = require('express')
var mongoose = require('mongoose');
var app = express()
mongoose.connect('mongodb://localhost/test');

var appFormSchema =new mongoose.Schema({}, {strict: false});

var Cat = mongoose.model('Cat',appFormSchema);


app.get('/', function (req, res) {

});
app.get('/db/:dname', function (req, res) {

Cat.find({ name:req.params.dname }).exec(function (err, small) {
  if (err) 
  return  res.send('error');
  else
  return  res.send(small);
});
});
 
app.listen(3000)