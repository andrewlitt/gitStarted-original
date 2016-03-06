var express = require('express');
var npm = require('../controllers/npmmodules.js'); 

module.exports = (function() {
    'use strict';
    var router = express.Router();

    router.get('/final', function(req, res) {
        if (req.session.gitClone != null) {
    		fs.readFile(path.join(__dirname + '/../views/final.html'), 'utf-8', function(err, data) {
    			var template = Handlebars.compile(data);
    			res.send(template({"gitCloneURL":req.session.gitClone}));
    		});
        } else {
            res.redirect('/');
        }
    });

    return router;    
})();