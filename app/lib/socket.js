var WS = require('net.iamyellow.tiws').createWS();

//var uri = 'ws://<IP:URL>:<PORT>';
var uri = 'http://192.168.0.109:3000';

exports.init = function() {

	WS.addEventListener('open', function() {
		Ti.API.debug('websocket opened');
	});

	WS.addEventListener('close', function(ev) {
		Ti.API.info(ev);
	});

	WS.addEventListener('error', function(ev) {
		Ti.API.error(ev);
	});

	WS.addEventListener('message', function(ev) {
		Ti.API.log(ev);
	});

	WS.open(uri);

};

exports.send = function(msg) {
	WS.send(msg);
};
