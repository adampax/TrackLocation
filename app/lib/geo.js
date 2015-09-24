exports.startGeo = function(cb) {
	if (Ti.Geolocation.locationServicesEnabled) {
		Ti.Geolocation.trackSignificantLocationChange = true;
		Ti.Geolocation.addEventListener('location', function(e) {
			if (e.error) {
				alert('Error: ' + e.error);
			} else {
				//Ti.API.info(e.coords);
				cb(e.coords);
			}
		});
	} else {
		alert('Please enable location services');
	}
};

exports.getLocation = function(cb){
		if (Ti.Geolocation.locationServicesEnabled) {
		//Ti.Geolocation.trackSignificantLocationChange = true;
		Ti.Geolocation.getCurrentPosition(function(e) {
			if (e.error) {
				alert('Error: ' + e.error);
			} else {
				//Ti.API.info(e.coords);
				cb(e.coords);
			}
		});
	} 
};
