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
        if (req.session != null && req.session.client != null) {
        	var username = req.session.client.token.username;
        	var password = req.session.client.token.password;
        	var client = github.client({
    				  username: username,
    				  password: password
    				});
            // console.log(req.session);
        	client.get('/user/repos', {}, function (err, status, body, headers) {
        		fs.readFile(path.join(__dirname + '/../views/content.html'), 'utf-8', function(err, data) {
        			var template = Handlebars.compile(data);
        			res.send(template({"name":req.session.userInfo.name, "node_modules":npm.getCurrentTopModules(), "avatar_url":req.session.avatar, "github_profile_url":req.session.github_profile}));
        		});
        	});
        } else {
            res.redirect('/');
        }
    });

    router.post('/searchModules', function (req, res) {
        fs.readFile(path.join(__dirname + '/../views/searchModules.html'), 'utf-8', function(err, data) {
            var template = Handlebars.compile(data);
            npm.searchNPM(req.body.searchModules, function(results) {
                if (results) {
                    res.send(template({"search_modules":results}));
                } else {
                    res.redirect('/');
                }
            });
        });
    }); 

    return router;    
})();