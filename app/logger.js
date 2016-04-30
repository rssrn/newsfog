exports.log = function(message) {
	if (process.env.SUPPRESS_LOGS == "y") {
		return
	}

	process.stderr.write("LOG: " + message + "\n");
}
