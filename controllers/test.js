var helper = require('./controllerHelper.js');
var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res) {
    var requireStatement = helper.getRequireStatement('http');
    var fileIO = helper.populateDirectory('zack');
    console.log('fileIO: ' + fileIO);
    helper.appendFile('users/zack/index.js', requireStatement);
    
    //console.log(helper.getRequireStatement('http'));
});

server.listen(port);

console.log('Server running on port:' + port);