const request = require('request');
const DOMParser = require('dom-parser');

const ERROR = "...error!";
const NO_ELEMENT = "No element with that id!";

const HTML = "text/html";

function g(url, id, callback) {

	request(url, function (error, response, body) {

		if (response && response.statusCode == 200) {

			var doc = new DOMParser().parseFromString(body, HTML);
			v = doc.getElementById(id);

			if (v) callback(v);
			else callback(NO_ELEMENT);

		} else {

			callback(ERROR);

		}

	});

}

module.exports = g;