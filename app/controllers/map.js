var args = arguments[0] || {};
var Map = require('ti.map');


//open window on click
function openSettings(){
	Alloy.createController('settings').getView().open();
}
	


require('geo').getLocation(function(e) {
	$.mapview.setRegion({
		latitude : e.latitude,
		longitude : e.longitude,
		latitudeDelta : 0.05,
		longitudeDelta : 0.05
	});
});

require('geo').startGeo(save);

var locations = Alloy.Collections.locations;

locations.fetch({
	success : addToMap,
	error : Ti.API.error
});

function addToMap(collection) {
	var points = [];
	
	if(collection.length < 1){
		console.log('no points saved');
		return;
	}

	collection.each(function(model) {

		points.push({
			latitude : model.get('latitude'),
			longitude : model.get('longitude')
		});

		$.mapview.addAnnotation(Map.createAnnotation({
			latitude : model.get('latitude'),
			longitude : model.get('longitude'),
			pincolor : Map.ANNOTATION_GREEN
		}));
	});

	$.mapview.addPolyline(Map.createPolyline({
		points : points,
		strokeColor : '#60FF0000',
		strokeWidth : 2
	}));

}

function save(e) {
	$.mapview.addAnnotation(Map.createAnnotation({
		latitude : e.latitude,
		longitude : e.longitude,
		pincolor : Map.ANNOTATION_RED
	}));

	var model = Alloy.createModel('location', {
		latitude : e.latitude,
		longitude : e.longitude,
		time : new Date().toISOString()
	});

	Alloy.Collections.locations.add(model);

	model.save();
}
