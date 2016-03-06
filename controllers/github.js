var github = require('octonode');
var githubAPI = require('github');

var Ghub = function () {
    this.username = null;
    this.password = null;

    this.startGithub = function (username, password) {
        this.setCredentials(username, password);
    }

    this.setCredentials = function (username, password) {
        this.username = username;
        this.password = password;
    }

    this.createClient = function () {
        return github.client({
            username: this.username,
            password: this.password
        });
    }

    this.createRepo = function (name, desc, files, collaborators) {
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
                    addCollaborators(name, collaborators, username, password, collaborators.length - 1);
                    addFiles(name, files, username, password, files.length - 1);
                    // Tell the user valid repo
                } else {
                    // Tell the user invalid repo
                }
            });
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
            collabuser: collaborator
        }, function (err, res) {
            if (!err) {
                console.log(res);
                addFiles(repoName, files, username, password, --count);
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

module.exports = new Ghub()module.exports = new Ghub();