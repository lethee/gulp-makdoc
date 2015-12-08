'use strict';

module.export = function () {
	var makdoc = {};
	var gulp = {};
	var asciidoc = require('./makdoc-asciidoc.js')(gulp, makdoc);
};
