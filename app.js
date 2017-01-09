var express = require('express')
var router = express.Router()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path= require('path');
var app = express();


router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  console.log('req.baseUrl', req.baseUrl)
  console.log('req.hostname',req.hostname)
  console.log('res.get(mytoken)',res.get('mytoken'))
  
  res.set({
  'mytoken': '12345'
});
  
  
  next()
})
app.use('/api/v1/', router)



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', express.static(path.join(__dirname, '/bower_components')))
app.use(bodyParser.json({ type: 'application/*+json' }));

mongoose.connect('mongodb://localhost/test');
var appFormSchema =new mongoose.Schema({}, {strict: false});
var Cat = mongoose.model('Cats',appFormSchema);

router.get('/db', function (req, res) {
Cat.find({ name:'dhananjay' }).exec(function (err, small) {
  if (err) 
  return  res.send('error');
  else
  return  res.send(small);
});
});
router.post('/db', function (req, res) {
  
var CAT=new Cat(req.body);
CAT.save(function (err) {
  if (err) return res.send(err);
  else
  return res.send("success");
  
})

});
 
app.listen(3000)

