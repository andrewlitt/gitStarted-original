/*
 * routes-model.js
 * Created by: Jake Alsemgeest
 * March 9th, 2016
*/

// Constructor
var Routes = function() {}

// Contants
var _routesStart = 'var express = require(\'express\');\nvar path = require(\'path\');\n\nmodule.exports = (function() {\n\'use strict\';\n\nvar router = express.Router();\n\nrouter.get(\'/';
var _routesMiddle = '\', function(req, res) {\n\tres.sendFile(path.join(__dirname + \'/../views/';
var _routesEnd = '\'));\n});\nreturn router;\n})();';

Routes.prototype.getRoutesStart = function() {
	return _routesStart;
}
Routes.prototype.getRoutesMiddle = function() {
	return _routesMiddle;
}
Routes.prototype.getRoutesEnd = function() {
	return _routesEnd;
}


module.exports = Routes;