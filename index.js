//index.js for static content

var express - require('express');
var staticlib = require('staticSiteFun');
var router =  express.Router();

module.exports = staticlib.generatedRoutes(router);