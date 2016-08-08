/**
 * Created by rileyxia on 16/8/4.
 */
// var http = require('http');
var express = require('express');
var app = express();

// http.createServer(function (request,response) {
//     response.writeHead(200,{'content-type':'text/plain'});
//     response.end('Hello summerbaby\n');
// }).listen(8886);
app.use( express.static(__dirname+'/src'));
app.get('/',function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});
app.get('/chinadata',function(req, res){
    res.send(require('./china-area-data'));
});

var server = app.listen(3000,function(){
    console.log("server started on port 3000");
});
console.log('Server run at http://127.0.0.1:3000');