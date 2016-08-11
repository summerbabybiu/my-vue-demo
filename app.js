/**
 * Created by rileyxia on 16/8/4.
 */
// var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use( express.static(__dirname+'/src'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});
app.get('/chinadata',function(req, res){
    res.send(require('./china-area-data'));
});

app.get('/second', function (req, res) {
    res.sendFile(__dirname + '/src/second.html');
});

app.get('/arraydata', function (req, res) {
    res.send(['老九门', '青丘狐传说', '爱看不看', '大SB']);
});

app.post('/arraydata', function (req, res) {
   console.log(req.body);
    res.send({'msg': 'ok'});

});

app.get('/endstore', function (req, res) {
    var data = fs.readFileSync('store.txt','utf-8');
    res.send(data);
});

app.post('/endstore', function (req, res) {
    console.log(req.body);
    res.send({'msg': 'ok'});
    fs.writeFileSync('store.txt',JSON.stringify(req.body));
});

var server = app.listen(3000,function(){
    console.log("server started on port 3000");
});
console.log('Server run at http://127.0.0.1:3000');