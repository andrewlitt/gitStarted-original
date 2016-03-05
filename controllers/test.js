var helper = require('./controllerHelper.js');
var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res) {
    helper.populateDirectory()
    
    //console.log(helper.getRequireStatement('http'));
});

server.listen(port);

console.log('Server running on port:' + port);