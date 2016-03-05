var helper = require('./controllerHelper.js');
var http = require('http');
var github = require('./github.js');
var port = 3000;

var server = http.createServer(function(req, res) {
    github.startGithub('zackharley', 'Cornwall1');
    github.createRepo('Test', 'this is a test repo');
});

server.listen(port);

console.log('Server running on port:' + port);