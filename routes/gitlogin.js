var express = require('express');
var path = require('path');

module.exports = (function() {
    'use strict';
    var router = express.Router();

    router.get('/GitLogin', function(req, res) {
        // console.log(req.session);
        res.sendFile(path.join(__dirname + '/../views/gitlogin.html'));
    });

    return router;    
})();