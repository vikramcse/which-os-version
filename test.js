var should = require('chai').should();
var getOS = require('./index.js');

describe('test the given release numbers', function() {
	it('test for xp', function() {
		var xp = getOS('5.1.2600');
		xp.should.equal('XP');
	});
	it('test for windows 10', function() {
		var w10 = getOS('10.0.10240');
		w10.should.equal('10');
	});
});