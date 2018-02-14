const request = require('request')
const DOMParser = require('dom-parser');

const HTML = "text/html";

function getElementById() {

	var v = null;

	// TODO
	/*
	request(url, function (error, response, body) {

		if (response && response.statusCode == 200) {

			var doc = new DOMParser().parseFromString(body, HTML);
			console.log(doc.getElementById(id));

		} else {
			console.log("Error...");
		}

	});
	*/

	return "getElementById";

}

// Module exports
module.exports = getElementById;