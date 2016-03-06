var express = require('express');
var session = require('express-session');
var zip = require('adm-zip');
var path = require('path');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var octonode = require('octonode');
var Handlebars = require('handlebars');


// Controllers
var models = require('./controllers/controllerHelper.js');
var github = require('./controllers/github.js')

// Creating the Web Server
var app = express();

// Setting up the Web Server
app.use(stylus.middleware({
    // Source directory
    src: __dirname + '/assets/stylesheets',
    // Destination directory
    dest: __dirname + '/public',
    // Compile function
    compile: function (str, path) {
        return stylus(str)
            .set('filename', path)
            .set('compress', true);
    }
}));

app.use(express.static('public'));

var sess = session({
    secret: 'gitslacking',
	cookie: { 
		maxAge: 1000 * 60 * 60 * 24, // 24 Hours
		httpOnly: true,
    	secure: false
	},
	rolling: true
});

// Setting up the session
// app.use(app.router);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    if ('HEAD' == req.method || 'OPTIONS' == req.method) return next();
    res.locals.session = req.session;
    next();
});


// Views
var indexPage = require('./routes/main.js');
var slackContent = require('./routes/slack.js');
var content = require('./routes/content.js');
var gitLogin = require('./routes/gitlogin.js');

// Setting up the Routes
app.use('/', sess, indexPage);
app.get('/slack', sess, slackContent);
app.get('/GitLogin', sess, gitLogin)
app.get('/github', sess, content);
app.post('/searchModules', sess, content);


// Getting Post information
app.post('/githubLogin', function (req, res) {

    if (req.body.git_user == 'undefined' || req.body.git_pass == 'undefined') {
        res.redirect('/');
    } else {
        var username = req.body.git_user,
            password = req.body.git_pass;
        github.startGithub(username, password);
        var client = github.createClient();
        req.session.client = client;
        req.session.clientAvatarURL = client.avatar_url;
        client.get('/user', {}, function (err, status, body, headers) {
            req.session.userInfo = body; //json object
            req.session.avatar = body.avatar_url;
			req.session.github_profile = body.html_url;
            client.get('/user/following', {}, function (err, status, body, headers) {
                req.session.following = body;
                res.redirect('/github');
            });
        });
    }
});

app.post('/gitStarted', function (req, res) {
	console.log(req.body);
});

// app.post('/searchModules', function(req, res) {

// });

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});