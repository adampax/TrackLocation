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

//

function openDetail(e){
	// Get the section of the clicked item
	var section = $.listview.sections[e.sectionIndex];
	// Get the clicked item from that section
	var item = section.getItemAt(e.itemIndex);
	
	
	 var detail = Alloy.createController('locationDetails').getView();
	 
	 $.list.open(detail);
}

