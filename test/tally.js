var expect  = require("chai").expect;
var tally   = require("../app/tally");


describe("Tally library works OK", function() {
	describe("Extracting all strings", function() {
		it("Can extract strings from a simple example", function() {
			var res = tally.getTerms('a"b","c"');

			expect(res).to.be.instanceof(Array);
			expect(res).to.deep.equal(["b","c"]);
		});
		
		it("Empty string returns empty array", function() {
			var res = tally.getTerms("");

			expect(res).to.be.instanceof(Array);
			expect(res).to.deep.equal([]);
		});

		it("Badly formed string returns empty", function() {
			var res = tally.getTerms('"asdf","fds","fff');

			expect(res).to.be.instanceof(Array);
			expect(res).to.deep.equal([]);
		});
	});
});
