const express = require('express');

module.exports = function () {

	var app = express();

	app.use(express.static('public'));
	
	var datSendfileOptions = {
		root: __dirname + '/../dat/'
	};

	// routes
	app.get('/dat/*.json', function (req, res) {
		var path = req.params[0]; 
		res.sendFile(path + ".json",datSendfileOptions)
	});

	return app;
}

