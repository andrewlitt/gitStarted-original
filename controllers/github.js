var github = require('octonode');
var githubAPI = require('github');

var Ghub = function () {
    this.username = null;
    this.password = null;

    this.startGithub = function (username, password) {
        this.username = username;
        this.password = password;
    }

    this.createClient = function () {
        return github.client({
            username: this.username,
            password: this.password
        });
    }

    this.createRepo = function (name, desc, files, collaborators, callback) {
        var username = this.username;
        var password = this.password;
        var client = this.createClient(this.username, this.password);
        client.post("/user/repos", {
                "name": name,
                "description": desc
            },
            function (error, status, body, headers) {
                console.log('create repo status: ' + status);
                if (status == 201) {
                    if (collaborators && collaborators != 0) {
                        console.log("COLLABORATORS");
                        console.log(collaborators);
                        addCollaborators(name, collaborators, username, password, collaborators.length - 1);
                    }
                    addFiles(name, files, username, password, files.length - 1);

                    callback('https://github.com/' + username + '/' + name + '.git');
                    // Tell the user valid repo
                } else {
                    // Tell the user invalid repo
                }
            });
    }
    
    this.checkUser = function(username, callback) {
        var client = this.createClient();
        console.log(username);
        var ghuser = client.user(username);
        ghuser.info(function(error, body, status, headers){
            console.log('done');
            if(!error) {
                console.log('User exists');
                return callback(null, 'User exists.');
            } else {
                console.log('User doesn\'t exist');
                return callback(error.statusCode + ' - ' + error, 'User does not exist');
            }
        });
    }
    
    this.checkUsers = function(usernames, callback) {
        console.log(usernames);
        for(var i in usernames) {
            this.checkUser(usernames[i], function(err, res) {
                console.log('User:' + usernames[i]);
                console.log(err);
                console.log(res);
            })
        }
    }

    function addCollaborators(projectName, collaborators, username, password, count) {
        console.log(count);
        if (count < 0) {
            return;
        }
        var gh = new githubAPI({
            version: "3.0.0",
            protocol: "https",
            host: "api.github.com",
            timeout: 5000
        });

        gh.authenticate({
            type: 'basic',
            username: username,
            password: password
        });

        gh.repos.addCollaborator({
            user: username,
            repo: projectName,
            collabuser: collaborators[count]
        }, function (err, res) {
            if (!err) {
                console.log(res);
                addCollaborators(projectName, collaborators, username, password, --count);
            } else {
                console.log(err);
            }
        });
    }

    function addFiles(repoName, files, username, password, count) {
        console.log(count);
        if (count < 0) {
            return;
        }
        console.log('Creating file: ' + files[count].path);
        var client = github.client({
            username: username,
            password: password
        });
        var ghrepo = client.repo(username + '/' + repoName);
        ghrepo.createContents(files[count].path, 'Add ' + files[count].path + ' template.', files[count].contents, function (error, status, body, headers) {
            if (!error) {
                console.log('body: ' + body + '\nstatus: ' + status);
                addFiles(repoName, files, username, password, --count);
            } else {
                console.log(error);
            }
        });
    }
}

module.exports = new Ghub();