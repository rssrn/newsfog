var expect  = require("chai").expect;

var expr = require('../app/server');

http = require('http');

var app, server, port;

// TODO consider making the before and after into globals
// for easy re-use with other tests

before(function () {
	app = expr();
	// don't specif the port - so it will pick a random port
	// (to reduce chance of conflicting with other tests running in parallel)
	server = app.listen(function() {
		port = server.address().port;
	});
});

describe('/test/small_static_test', function () {
	it('should return 200', function (done) {
		http.get('http://localhost:'
				 + port +
				 '/test/small_static_test.txt',
		function (res) {
			expect(res.statusCode).to.equal(200);
			done();
		});
	});
	
	it('should say "hello"', function (done) {
		http.get(
			'http://localhost:'
			+ port
			+ '/test/small_static_test.txt',
		function (res) {
			var data = '';
			
			res.on('data', function (chunk) {
				data += chunk;
			});
			
			res.on('end', function () {
				expect(data).to.equal('hello\n');
				done();
			});
		});
	});
});


after(function () {
	server.close();
});
