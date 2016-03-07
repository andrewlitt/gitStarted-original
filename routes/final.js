var express = require('express');
var npm = require('../controllers/npmmodules.js'); 
var Handlebars = require('handlebars');
var fs = require('fs');
var path = require('path');

module.exports = (function() {
    'use strict';
    var router = express.Router();

    router.get('/final', function(req, res) {
        console.log('HERE?!!?!?!?!');
        if (req.session.gitClone != null) {
            // console.log("IN HERE?");
            console.log(req.session.gitClone);
    		// fs.readFile(path.join(__dirname + '/../views/final.html'), 'utf-8', function(err, data) {
    			// var template = Handlebars.compile(data);
			res.send({"gitCloneURL":req.session.gitClone});
    		// });
        } else {
            res.redirect('/');
        }
    });

    return router;    
})();