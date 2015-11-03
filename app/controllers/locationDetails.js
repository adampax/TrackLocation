var args = arguments[0] || {};
var moment = require('alloy/moment');
var location = Alloy.Collections.locations.at(args.index);

var timeText = location.get("time");
timeText = moment(timeText).format('MM/DD/YY - HH:mm:ss');

$.latData.text = location.get("latitude");
$.lngData.text = "  " + location.get("longitude");
$.timeData.text = timeText;