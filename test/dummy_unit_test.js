var expect  = require("chai").expect;
var dummy   = require("../app/dummy");

describe("Check that unit testing framework is sane", function() {
	describe("A simple unit test works OK", function() {
		it("Returns pong if given ping", function() {
			var pingResult = dummy.ping("ping");
			expect(pingResult).to.equal("pong");
		});
		it("Returns unknown if given other input", function() {
			var pingResult = dummy.ping("");
			expect(pingResult).to.equal("unknown");
		});
	});
});
