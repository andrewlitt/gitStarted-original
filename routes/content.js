var express = require('express');
var path = require('path');
var github = require('octonode');
var Handlebars = require('handlebars');
var fs = require('fs');

module.exports = (function() {
    'use strict';
    var router = express.Router();

    router.get('/github', function(req, res) {
    	// console.log(req.session);
    	// console.log(req.session.following);
    	var username = req.session.client.token.username;
    	var password = req.session.client.token.password;
    	var client = github.client({
				  username: username,
				  password: password
				});

    	client.get('/user/repos', {}, function (err, status, body, headers) {
    		fs.readFile(path.join(__dirname + '/../views/content.html'), 'utf-8', function(err, data) {
    			var template = Handlebars.compile(data);
    			res.send(template({"username":username}));
    		});
    	});
    });

    return router;    
})();