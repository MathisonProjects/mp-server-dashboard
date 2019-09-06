#!/usr/bin/env nodejs
require('dotenv').config();
var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var port = 4000;
var io = require('socket.io').listen(server);

var cf = require('cloudflare')({
  email: 'admin+cloudflare@zing.land',
  key  : process.env.CLOUDFLARE_READ_APIKEY
});

app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Mathison Projects Dashboard Node Server on ' + port + ".");
});

io.on('connection', function(socket){
	runConsole('A connection has been established.');

	socket.emit('init response');

	socket.on('connect', function(){
		console.log('Connect to server');
		socket.emit('Talk With Node');
	});

	socket.on('fireCloudflare', function(endpoint, type) {

	});

	socket.on('getDevelopmentMode', function() {
		runConsole('Getting Mode...');
		cf.zones.read('40d98dc76a92a76456f86f55850a51c5/settings/development_mode')
		.then( response => {

			socket.emit('ModeResponse', response);
		})
		.catch( error => {
			console.log(error);
		});
	});

	socket.on('changeDevelopmentMode', function(mode) { // string "on"/"off"
		runConsole('Changing Mode...');
		cf.zones.edit('40d98dc76a92a76456f86f55850a51c5/settings/development_mode', { value : mode })
			.then( response => {
				socket.emit('ModeResponse', response);
			})
			.catch( error => {
				console.log(error);
			});
	});
});

server.listen(port, function(){
	console.log('listening on *:'+port);
});

// node -r dotenv/config server.js dotenv_config_path=/var/www/html/live/dashboard.mathisonprojects.com/.env


function runConsole(info) {
	console.log('-----------------------');
	console.log(info);
	console.log('-----------------------');
}