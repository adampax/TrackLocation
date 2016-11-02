var args = arguments[0] || {};
var moment = require('alloy/moment');
var locations = Alloy.Collections.locations;

// assign a ListItem template based on the contents of the model
function doTransform(model) {
	var o = model.toJSON();
	if (o.time) {
		o.time = moment(o.time).format('MM/DD/YY - HH:mm:ss');
	}
	return o;
}

locations.fetch();


//open window on click
function openSettings(){
	var settingsWindow = Alloy.createController('settings').getView();
	
	settingsWindow.open();
}
	