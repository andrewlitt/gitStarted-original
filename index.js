var express = require('express');
var session = require('express-session');
var zip = require('adm-zip');
var path = require('path');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var github = require('octonode');
var Handlebars = require('handlebars');

// Controllers
var models = require('./models/modelHelper.js');

// Creating the Web Server
var app = express();
 
// Setting up the Web Server
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

var sess = session({
	secret: 'gitslacking', 
	cookie: { maxAge: 3600000 }
});

// Setting up the session
// app.use(app.router);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(function(req, res, next){
    res.locals.session = req.session;
    next();
});


// Views
var indexPage = require('./routes/main.js');
var slackContent = require('./routes/slack.js');
var content = require('./routes/content.js');

// Setting up the Routes
app.use('/', sess, indexPage);
app.get('/slack', sess, slackContent);
app.get('/content', sess, content);

// Getting Post information
app.post('/content', function(req, res) {
    if (req.body.username == 'undefined' || req.body.password == 'undefined') {
    	res.redirect('/');
    } else {
    	var username = req.body.username, password = req.body.password;
    	var client = github.client({
				  username: username,
				  password: password
				});
    	req.session.client = client;
    	client.get('/user', {}, function (err, status, body, headers) {
			  req.session.userInfo = body; //json object
			  client.get('/user/following', {}, function (err, status, body, headers) {
		    		req.session.following = body;
		    		res.redirect('/content');
		    	});
			});
    }
});

var server = app.listen(3000, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
 
});