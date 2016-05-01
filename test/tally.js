var expect  = require("chai").expect;
var tally   = require("../app/tally");


describe("Tally library works for", function() {
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
	describe("Tallying arrays", function() {
		it("Produces correct counts in a simple case", function() {
			var res = tally.doTally(['a','a','b','a']);

			expect(res).to.be.instanceof(Array);
			expect(res).to.deep.equal([
				{'item':'a','count':3},
				{'item':'b','count':1}
			]);
		});
		
		it("Produces correctly sorted counts", function() {
			var res = tally.doTally(['b','a','a','b','a']);

			expect(res).to.be.instanceof(Array);
			expect(res).to.deep.equal([
				{'item':'a','count':3},
				{'item':'b','count':2}
			]);
		});
	});
	describe("Tallying strings", function() {
		it("Produces correct counts in a simple case", function() {
			var res = tally.getTally('junk"xx","xx","yy","zz","zz","zz"');

			expect(res).to.be.instanceof(Array);
			expect(res).to.deep.equal([
				{'item':'zz','count':3},
				{'item':'xx','count':2},
				{'item':'yy','count':1},
			]);
		});
	});
});
