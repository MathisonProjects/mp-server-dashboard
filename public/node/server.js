#!/usr/bin/env nodejs
var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var port = 4000;
var io = require('socket.io').listen(server);

var cf = require('cloudflare')({
  email: 'admin+cloudflare@zing.land',
  key  : 'your Cloudflare API key' // .ENV cloudflare token should be stored.
});

app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World! Node.js is working correctly on ' + port + ".");
});

io.on('connection', function(socket){
	console.log('A connection has been established.');

	socket.emit('init payload', initPayload);

	socket.on('connect', function(){
		console.log('Connect to server');
		socket.emit('Talk With Node');
	});

	socket.on('fireCloudflare', function(endpoint, type) {

	});
});

server.listen(port, function(){
	console.log('listening on *:'+port);
});