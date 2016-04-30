var logger = require("../app/logger");

exports.getTerms = function(str) {
	logger.log("getTerms");
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
	
	process.stdout.write("asdf");

	return result;
}
