#!/usr/bin/env node
/*
var prerender = require('./lib');

var server = prerender({
    workers: process.env.PRERENDER_NUM_WORKERS,
    iterations: process.env.PRERENDER_NUM_ITERATIONS
});


server.use(prerender.sendPrerenderHeader());
// server.use(prerender.basicAuth());
// server.use(prerender.whitelist());
server.use(prerender.blacklist());
// server.use(prerender.logger());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
// server.use(prerender.inMemoryHtmlCache());
// server.use(prerender.s3HtmlCache());

server.start();
*/

var express = require('express')
var mongoose = require('mongoose');
var path= require('path');
var bodyParser = require('body-parser')
mongoose.connect('mongodb://10.0.1.131/tw-prod-24-03-2017');
var app = express()
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/public')))
var org = mongoose.model('TXN_Organizations',new mongoose.Schema({}, {strict: false}));
app.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname + '/public/index.html'));	
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
        }
    }
    return object;
}
/*
TEST

app.get('/db', function (req, res) {
	query={ "parentId": {"_eval":"Id","value":"578db780c19cc73dbcbd1ba1"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}};
	org.find(evaluate(query)).exec(function(err,data){
		res.send(data);
	});
})

*/
function listOrg(qr,cb)
{
	org.find(qr)
	.select({ _id: 1, name: 1 ,parentId:1})
	.exec(cb);
}
app.post('/dbData', function (req, res) {
		listOrg(evaluate(req.body),function(err,data){
			res.send(data);
		});
})

app.post('/tree', function (req, res) {
	org.find(evaluate(req.body))
	.select({ _id: 1, name: 1 ,parentId:1})
	.exec(function(err,data){
			res.send(data);
	});	
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})