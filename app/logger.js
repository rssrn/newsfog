exports.log = function(message) {
	process.stderr.write("LOG: " + message + "\n");
}
