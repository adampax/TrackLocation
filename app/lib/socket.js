var WS = require('net.iamyellow.tiws').createWS();

//var uri = 'ws://<IP:URL>:<PORT>';

var uri = 'ws://mysterious-garden-76596.herokuapp.com';

var uri = 'http://localhost:3005';

//placeholder for messasge callback
exports.onMessage = function(){};

exports.init = function(obj) {

	if(_.isFunction(obj.onMessage)){
		exports.onMessage = obj.onMessage;
	} else {
		throw 'onMessage must be function.';
	}

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
		exports.onMessage(JSON.parse(ev.data));
	});

	WS.open(uri);

};

exports.send = function(msg) {
	WS.send(JSON.stringify(msg));
};



//constants for message actions
exports.CREATE = 'create';
exports.UPDATE = 'update';
exports.DELETE = 'delete';
