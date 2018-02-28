#!/usr/bin/env node

const SPACE = " ";
const INNER_HTML = "innerHTML = ";

var g = require('./lib/');

// Prendo i parametri e shifto i valori per avere tutti i parametri eccetto i 2 iniziali
var args = process.argv;
args.shift();
args.shift();

// Il primo parametro è l'URL
var url = args[0];
args.shift();

// Tutti gli altri parametri sono l'id, spazi compresi
var id = args.join(SPACE);

g(url, id, callback);

// Callback function
function callback(v) {
    console.log(v);
    if (v) console.log(INNER_HTML + v.innerHTML);
}