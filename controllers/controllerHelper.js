var github = require('./github');
var HTMLData = require('../models/html-model');
var MainReadMe = require('../models/main-readme-model');
var Project = require('../models/project-model');
var Server = require('../models/server-model');
    
    this.generateFiles = function(data, callback) {
        // Creating a project.
        var project = new Project(data);
        project.defaultSetup();

        // Starting GitHub Auth.
        github.startGithub(data.gitUsername, data.gitPassword);

        // Adding routes if there are any.
        if (data.routes != undefined) {
            this.addRoutes(data.routes, project);
        }
        
        // Generate the server files.
        this.generateServerFile(project);
        this.generatePackage(project);

        // Node Manager
        project.addManager();

        // Generate Files
        this.generateREADME(data, project);
        this.generateHTML(data, project);

        // Get files.
        var files = this.scanFiles(project.getProject(), data.gitProjectName, data.gitProjectDesc);

        // Create Repo
        github.createRepo(data.gitProjectName, data.gitProjectDesc, files, data.collaborators, callback);
    }

    // Add routes to project.
    this.addRoutes = function(routes, project) {
        for (var i = 0; i < routes.length; i++) {
            project.addRoute(routes[i].routeName);
        }
    }
    
    // Scan files and add the to project
    this.scanFiles = function(root, repoName, desc){
        var files = [];
        for (var i in root) {
            if (root[i].type == 'file') {
                console.log(root[i].name);
                files.push(root[i]);
            } else {
                temp = this.scanFiles(root[i].children, repoName, desc);
				for(var j in temp)
					files.push(temp[j]);
            }
        }
        return files;
    }
    
    // Create the server.js file.
    this.generateServerFile = function(project) {
        project.addServer();
    }
    
    // Create the package.json file.
    this.generatePackage = function(project) {
        project.addPackage();
    }
    
    // Creates the README file.
    this.generateREADME = function(data, project) {
        var readMe = new MainReadMe(data);
        readMe.createReadMe(function (str) {
            project.addReadMe(str);
        });
    }
    
    // Creates the HTML file.
    this.generateHTML = function(data, project) {
        var htmlContent = new HTMLData(data);
        htmlContent.getPage(function (str) {
            project.addHtmlPage(str);
        });
    }