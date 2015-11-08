'use strict';
var os = require('os');

var nameMap = {
	'10.0': '10',
	'6.3': '8.1',
	'6.2': '8',
	'6.1': '7',
	'6.0': 'Vista',
	'5.1': 'XP',
	'5.0': '2000',
	'4.9': 'ME',
	'4.1': '98',
	'4.0': '95'
};

module.exports = function(release) {
	var ver = release || os.release();
	var version = '';
	var nodeVersion = process.version;
	
	if((nodeVersion >= '3.1.0') && (nodeVersion >= '0.12.0')) {
		// get the version upto tow digits
		if(ver.length >= 3) {
			var arr = ver.split(".");
			version = arr.shift() + "." + arr.shift();
		} else {
			version = ver;
		}
	} else {
		throw new Error('Node version should be greater than 3.1.0');
	}
	
	return nameMap[version];
};