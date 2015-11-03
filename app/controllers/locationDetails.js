var args = arguments[0] || {};

var location = Alloy.Collections.locations.at(args.index);

console.log(location.toJSON());

$.latData.text = location.get("latitude");
$.lngData.text = "  " + location.get("longitude");
$.timeData.text = location.get("time");