var express = require('express');
var zip = require('adm-zip');
var path = require('path');
var bodyParser = require('body-parser');
var stylus = require('stylus');

var models = require('./models/modelHelper.js');

var app = express();
 
// Views
var indexPage = require('./routes/main.js');
var slackContent = require('./routes/slack.js');
var mainContent = require('./routes/content.js');

app.use(stylus.middleware({
 // Source directory
     src: __dirname + '/assets/stylesheets',
     // Destination directory
     dest: __dirname + '/public',
     // Compile function
     compile: function(str, path) {
       return stylus(str)
         .set('filename', path)
         .set('compress', true);
         }
     }));

app.use(express.static('public'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use('/', indexPage);
app.get('/slack', slackContent);
app.get('/content', mainContent);

app.post('/content', function(req, res) {
	console.log(req.body.email);
    // res.send();
});

var server = app.listen(3000, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
 
});