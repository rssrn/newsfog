const express = require('express');

module.exports = function () {

	var app = express();

	app.use(express.static('public'));

	// routes
	app.get('/', function (req, res) {
		res.send('Hello World!');
	});

	return app;
}

