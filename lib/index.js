const request = require('request');
const rp = require('request-promise');
const DOMParser = require('dom-parser');

const HTML = "text/html";

function getElementById() {

	var url = "view-source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await";
	var id = "main-header";

	return get(url, id);

}

async function get(url, id) {

	var v = await rp(url)

		.then(function (html) {
			var doc = new DOMParser().parseFromString(html, HTML);
			return doc.getElementById(id);
		})
		.catch(function (err) {
			return err;
		});

}

module.exports = getElementById;