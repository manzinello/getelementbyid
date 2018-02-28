const request = require('request');
const DOMParser = require('dom-parser');

const ERROR = "Error in getElementById!";

const HTML = "text/html";

function g(url, id, callback) {

	request(url, function (error, response, body) {

		if (response && response.statusCode == 200) {

			var doc = new DOMParser().parseFromString(body, HTML);
			v = doc.getElementById(id);
			callback(v);

		} else {

			callback(ERROR);

		}

	});

}

module.exports = g;