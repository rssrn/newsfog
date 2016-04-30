var logger = require("../app/logger");

exports.getTally = function(str) {
	
}

exports.getTerms = function(str) {
	splitted = str.split('"');

	var result = Array();

	if (splitted.length % 2 != 1) {
		logger.log("Bad length (" + splitted.length + ") after split");
		return result;
	}

	for (var i in splitted) {
		if (i % 2 == 1) {
			result.push(splitted[i]);
		}
	}
	
	return result;
}

exports.doTally = function(arr) {

	if (!(arr instanceof Array)) {
		logger.log("doTally expected Array, got" + typeof(arr));
	}

	var counts = {};

	for (var i in arr) {
		if (!(arr[i] in counts)) {
			counts[arr[i]] = 1;
		} else {
			counts[arr[i]] = counts[arr[i]] + 1;
		}
	}

	var result = [];

	for (var key in counts) {
		result.push({"item":key,"count": counts[key]});
	}
	
	result.sort(function(a,b) {
		return b.count - a.count;
	});

	return result;
}
