#!/usr/bin/env nodejs
require('dotenv').config(
	{
		path: '/var/www/html/live/dashboard.mathisonprojects.com/.env'
	}
);
const shell = require('shelljs');
var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var port = 4000;
var io = require('socket.io').listen(server);
var fs = require('fs');

var cf = require('cloudflare')({
  email: process.env.CLOUDFLARE_EMAIL,
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
		cf.zones.read(cfZones['primary-MP'] + '/settings/development_mode')
		.then( response => {

			socket.emit('ModeResponse', response);
		})
		.catch( error => {
			console.log(error);
		});
	});

	socket.on('changeDevelopmentMode', function(mode) { // string "on"/"off"
		runConsole('Changing Mode...');
		cf.zones.edit(cfZones['primary-MP'] + '/settings/development_mode', { value : mode }).then( response => { socket.emit('ModeResponse', response); }).catch( error => { console.log(error); });
		// Maintains Dev environment and dashboard are synced.
		cf.zones.edit(cfZones['dev-MP'] + '/settings/development_mode', { value : mode }).then( response => { socket.emit('ModeResponse', response); }).catch( error => { console.log(error); });
	});

	socket.on('createSubdomain', function(data) {
		runConsole('Creating subdomain...');
		console.log(data);
		cf.dnsRecords.add(cfZones['dev-MP'], JSON.stringify(data)).then( response => {
			console.log(response);
		} )
		.catch( error => {
			console.log(error);
		});
	});

	socket.on('createDirectory', function(url) {
		runConsole('Creating directory... - ' + process.env.SERVER_DIRECTORY + url);
		if (!fs.existsSync(process.env.SERVER_DIRECTORY + url)){
		    fs.mkdirSync(process.env.SERVER_DIRECTORY + url);
		}
	});

	socket.on('checkNodeStatus', function(dir) {
		runConsole('Checking Node...');

		socket.emit('NodeResponse', { log: 'Node, ' + dir + ' has been checked.' });
	});

	socket.on('activateNode', function(dir) {
		runConsole('Activating Node...');
		socket.emit('NodeResponse', { log: 'Node, ' + dir + ' has been activated.' });
	});

	socket.on('activateNode', function(dir) {
		runConsole('Deactivating Node...');
		socket.emit('NodeResponse', { log: 'Node, ' + dir + ' has been deactivated.' });
	});


	socket.on('rebootNode', function(dir) {
		runConsole('Rebooting Node...');
		socket.emit('NodeResponse', { log: 'Node, ' + dir + ' has been rebooted.' });
	});

	socket.on('rebootAll', function(dir) {
		runConsole('Rebooting Nodes...');
		socket.emit('NodeResponse', { log: 'Nodes have been all rebooted' });
	});

	socket.on('runShell', function(script) {
		runConsole('Running Script: ' + script);
		shell.exec(script);
	});
});

server.listen(port, function(){
	console.log('listening on *:'+port);
});


/*
	Notes: This is to watch the server.
	$ node start server.js

	Notes: This is to run the server in the background.
	$ forever start server.js
*/



function runConsole(info) {
	console.log('-----------------------');
	console.log(info);
	console.log('-----------------------');
}

const cfZones = {
	'primary-MP' : '40d98dc76a92a76456f86f55850a51c5',
	'dev-MP'     : 'cdac39d67f002413b1006b9ac1bbbaef'
}