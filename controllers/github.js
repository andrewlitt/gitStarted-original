var github = require('octonode');
var request = require('request');

var Ghub = function () {
    this.username = null;
    this.password = null;

    this.startGithub = function (username, password) {
        this.setCredentials(username, password);
    }

    this.setCredentials = function(username, password) {
        this.username = username;
        this.password = password;
    }

    this.createClient = function() {
        return github.client({
            username: this.username,
            password: this.password
        });
    }

    this.createRepo = function (name, desc) {
        var username = this.username;
        var password = this.password;
        var client = this.createClient(this.username, this.password);
        client.post("/user/repos", {
            "name": name,
            "description": desc
        },
        function (error, status, body, headers) {
            console.log(status);
            if(status == 201) {
                // Add files and collaborators
                //addCollaborator('ColinLMacLeod1')
                addFile('Test', 'index.js', 'Some text', username, password);
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

    function addFile(repoName, filename, content, username, password) {
        var client = github.client({
            username: username,
            password: password
        });
        var ghrepo = client.repo(username + '/' + repoName);
        console.log(ghrepo);
        ghrepo.createContents(filename, 'Add ' + filename + ' template.', content, function(error, status, body, headers) {
            console.log(body + '\n' + status);
            
        });
    }
}

module.exports = new Ghub();