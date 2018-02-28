const request = require('request');
const DOMParser = require('dom-parser');

const ERROR = "Error in getElementById!";

const HTML = "text/html";

function getElementById(url, id, callback) {

	var v = null;

	request(url, function (error, response, body) {

		if (response && response.statusCode == 200) {

			var doc = new DOMParser().parseFromString(body, HTML);
			v = doc.getElementById(id);
			callback(v);

		} else {

			callback(ERROR);

		}

	});

	callback(v);

}

// Module exports
module.exports = getElementById;