var express = require('express');
var path = require('path');
var github = require('octonode');
var Handlebars = require('handlebars');
var fs = require('fs');
var npm = require('../controllers/npmmodules.js'); 

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
    			res.send(template({"username":username, "node_modules":npm.getCurrentTopModules()}));
    		});
    	});
    });

    router.post('/searchModules', function (req, res) {
        fs.readFile(path.join(__dirname + '/../views/searchModules.html'), 'utf-8', function(err, data) {
            console.log(data);
            var template = Handlebars.compile(data);
            console.log("GOT DATA");
            npm.searchNPM(req.body.searchModules, function(results) {
                console.log("BAM");
                console.log(results);
                console.log(template);
                res.send(template({"search_modules":results}));
            });
            // res.send(template({"search_modules":npm.searchNPM()}));
        });
    });

    return router;    
})();