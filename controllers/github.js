var github = require('octonode');
var request = require('request');

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

    this.createRepo = function (name, desc, files) {
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
                    // Add files and collaborators
                    //addCollaborator('ColinLMacLeod1')
                    addFiles(name, files, username, password, files.length-1);
                }
            });
    }

    function addCollaborator(collaborator) {
        // TO DO
        //        request.post('https://api.github.com/repos/' + this.username + '/' + this.repo + '/collaborators/' + collaborator, function(error, response, body) {
        //            console.log(response);
        //            if(!error) {
        //                console.log('Add Collaborator:' + response.statusCode)
        //            }
        //        });
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
            console.log('body: ' + body + '\nstatus: ' + status);
            addFiles(repoName, files, username, password, --count);
        });
    }
}

module.exports = new Ghub()