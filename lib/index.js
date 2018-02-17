const request = require('request');
const rp = require('request-promise');
const DOMParser = require('dom-parser');

const HTML = "text/html";

async function getElementById() {

	var url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await";
	var id = "main-header";

	var v = await get(url, id);
	return v;

}

function get(url, id) {

	var v = rp(url)
		.then(function (html) {
			var doc = new DOMParser().parseFromString(html, HTML);
			return doc.getElementById(id).innerHTML;
		})
		.catch(function (err) {
			return err;
		});

}

module.exports = getElementById;