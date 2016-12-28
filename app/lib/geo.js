exports.startGeo = function(cb) {
	exports.requestGeolocationPermission(function(){
	
		//Ti.Geolocation.trackSignificantLocationChange = true;
		Ti.Geolocation.addEventListener('location', function(e) {
			if (e.error) {
				alert('Error: ' + e.error);
			} else {
				cb(e.coords);
			}
		});
	});
};

exports.getLocation = function(cb){
	exports.requestGeolocationPermission(function(){
		Ti.Geolocation.getCurrentPosition(function(e) {
			if (e.error) {
				alert('Error: ' + e.error);
			} else {
				cb(e.coords);
			}
		});
	}); 
};


/**
 * Custom dialog / permissions combo to guide user through enabling permissions
 * @param {Object} cb callback function after permission request performed
 */
exports.requestGeolocationPermission = function(cb) {
	cb = cb ||
	function() {
	};

	//if permission already accepted or ignored, return
	if (Ti.Geolocation.hasLocationPermissions(Titanium.Geolocation.AUTHORIZATION_ALWAYS)) {
		cb();
		return;
	}

	var dialog = Ti.UI.createAlertDialog({
		title : L('permission_title'),
		message : L('geo_permission_message'),
		ok : L('permission_button')
	});

	dialog.show();

	dialog.addEventListener('click', function() {
		Ti.Geolocation.requestLocationPermissions(Titanium.Geolocation.AUTHORIZATION_ALWAYS, function() {

			//Add time out as workaround for 'X in a different context than the calling function.' issue
			//related to the callback running on diff thread. TIMOB-20002
			setTimeout(function() {
				cb();
			}, 500);
		});
	});

};