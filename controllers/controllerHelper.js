var github = require('./github');
var Helper = function () {
    this.projectData = [
        {
            'type': 'folder',
            'name': 'controllers',
            'path': 'controllers',
            'children': [
                {
                    'type': 'file',
                    'name': 'controller.js',
                    'path': 'controllers/controller.js',
                    'contents': ''
                }
            ]
        },
        {
            'type': 'folder',
            'name': 'models',
            'path': 'models',
            'children': [
                {
                    'type': 'file',
                    'name': 'model.js',
                    'path': 'models/model.js',
                    'contents': ''
                }
            ]
        },
        {
            'type': 'folder',
            'name': 'public',
            'path': 'public',
            'children': [
                {
                    'type': 'file',
                    'name': 'public.js',
                    'path': 'public/public.js',
                    'contents': ''
                }
            ]
        },
        {
            'type': 'folder',
            'name': 'views',
            'path': 'views',
            'children': [
                {
                    'type': 'file',
                    'name': 'index.html',
                    'path': 'views/index.html',
                    'contents': ''
                }
            ]
        },
        {
            'type': 'file',
            'name': '.gitignore',
            'path': '.gitignore',
            'contents': `# Logs\nlogs\n*.log\nnpm-debug.log*\n\n# Runtime data\npids\n*.pid\n*.seed\n\n# Directory for instrumented libs generated by jscoverage/JSCover\nlib-cov\n\n# Coverage directory used by tools like istanbul\ncoverage\n\n# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)\n.grunt\n\n# node-waf configuration\n.lock-wscript\n\n# Compiled binary addons (http://nodejs.org/api/addons.html)\nbuild/Release\n\n# Dependency directories\nnode_modules\njspm_packages\n\n# Optional npm cache directory\n.npm\n\n# Optional REPL history\n.node_repl_history`
        },
        {
            'type': 'file',
            'name': 'manager.js',
            'path': 'manager.js',
            'contents': ''
        },
        {
            'type': 'file',
            'name': 'index.js',
            'path': 'index.js',
            'contents': ''
        },
        {
            'type': 'file',
            'name': 'package.json',
            'path': 'package.json',
            'contents': ''
        },
        {
            'type': 'file',
            'name': 'LICENSE.md',
            'path': 'LICENSE.md',
            'contents': `The MIT License (MIT)\nCopyright (c) 2016 GitStarted\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
        },
        {
            'type': 'file',
            'name': 'README.md',
            'path': 'README.md',
            'contents': ''
        }
    ];
    
    this.serverBody = `app.use(bodyParser.json()); // support json encoded bodies\napp.use(bodyParser.urlencoded({ extended: true }));\n\nvar server = app.listen(3000, function () {\n\tvar host = server.address().address;\n\tvar port = server.address().port;\n\tconsole.log('Example app listening at http://%s:%s', host, port);\n});`;
    
    this.gulpStart = `// Dependencies\nvar gulp = require('gulp');\nvar nodemon = require('gulp-nodemon');\nvar notify = require('gulp-notify');\nvar livereload = require('gulp-livereload');\n\n// Task\ngulp.task('default', function() {\n\t// listen for changes\n\tlivereload.listen();\n\t// configure nodemon\n\tnodemon({\n\t\t// the script to run the app\n\t\tscript: '`;
    this.gulpMid = `',\n\t\text: 'js'\n\t}).on('restart', function(){\n\t\t// when the app has restarted, run livereload.\n\t\tgulp.src('`;
    this.gulpEnd = `')\n\t\t\t.pipe(livereload())\n\t\t\t.pipe(notify('Reloading page, please wait...'));\n\t})\n})`;
    
    this.htmlStart = `<!DOCTYPE html><html><head><title>`;

    this.htmlEndWBootstrap = `</head><body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header" style="width:100%; text-align:center;"><a style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="#"><img style="width: 30px;" alt="Brand" src="http://pngimg.com/upload/heart_PNG706.png"></a><a target="_blank" style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="https://github.com/zackharley/QHacks"><img style="width:30px;" alt="Brand" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"></a><a style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="#"><img style="width: 30px;" alt="Brand" src="http://pngimg.com/upload/heart_PNG706.png"></a></div></div></nav><div class="container"><div class="row"><div class="col-md-12" style="text-align:center"><h4>Thanks for making a repo through GitStarted</h4></div><div class="col-md-12" style="text-align:center"><h4>Woot!</h4><iframe style="margin-top:15px; border:0px;" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/IKqV7DB8Iwg?autoplay=1"></iframe></div></div></div></body></html>`;
    
    this.htmlEnd = `</head><body><div style="text-align:center; width:100%;"><a style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="#"><img style="width: 30px;" alt="Brand" src="http://pngimg.com/upload/heart_PNG706.png"></a><a target="_blank" style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="https://github.com/zackharley/QHacks"><img style="width:30px;" alt="Brand" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"></a><a style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="#"><img style="width: 30px;" alt="Brand" src="http://pngimg.com/upload/heart_PNG706.png"></a></div><div ><div style="text-align:center; width:100%;"><h4>Thanks for making a repo through GitStarted</h4></div><div style="text-align:center; width:100%;"><h4>Woot!</h4><iframe style="margin-top:15px; border:0px;" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/IKqV7DB8Iwg?autoplay=1"></iframe></div></div></body></html>`;

    this.generateFiles = function(data) {
        console.log('HERE!');
        github.startGithub(data.gitUsername, data.gitPassword);
        this.generateServerFile(data.serverName, data.dependencies);
        this.generatePackage(data.gitProjectName, data.gitUsername, data.serverName, data.dependencies);
        if(data.nodeManager.name == 'gulp') {
            this.generateGulp(data.serverName);
        } else if(data.nodeManager.name == 'grunt') {
            this.generateGrunt();
        }
        this.generateREADME(data.gitProjectName, data.gitProjectDesc, data.nodeManager.name);
        this.generateHTML(data);
        var files = this.scanFiles(this.projectData, data.gitProjectName, data.gitProjectDesc);
        console.log(files);
        github.createRepo(data.gitProjectName, data.gitProjectDesc, files, data.collaborators);
        return 'https://github.com/' + data.gitUsername + '/' + data.gitProjectName + '.git';
    }
    
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
    
    this.generateServerFile = function(serverFile, dependencies) {
        var str = '';
        this.projectData[6].name = serverFile;
        this.projectData[6].path = serverFile;
        
        for (var i in dependencies) {
            str += getRequireStatement(dependencies[i].name);
        }
        str += this.serverBody;
        this.projectData[6].contents = str;
    }
    
    this.generatePackage = function(gitProjectName, gitUser, serverFile, dependencies) {
        this.projectData[7].contents = `{\n\t"name": "` + gitProjectName + `",\n\t"version": "0.0.1",\n\t"repository": {\n\t\t"type": "git",\n\t\t"url": "https://github.com/` + gitUser + `/` + gitProjectName + `"\n\t},\n\t"scripts": {\n\t\t"start": "node ` + serverFile + `"\n\t},\n\t"dependencies": {\n` + getPackageDependencies(dependencies) + `\t},\n\t"license": "MIT"\n}`
    }
    
    this.generateGulp = function(serverFile) {
        this.projectData[5].name = 'gulpfile.js';
        this.projectData[5].path = 'gulpfile.js';
        this.projectData[5].contents = this.gulpStart + serverFile + this.gulpMid + serverFile + this.gulpEnd;
    }
    
    this.generateGrunt = function() {
        this.projectData[5].name = 'Gruntfile.js';
        this.projectData[5].path = 'Gruntfile.js';
        this.projectData[5].contents = '';
    }
    
    this.generateREADME = function(projectName, description, manager) {
        this.projectData[9].contents = `#` + projectName + `\n\n` + description + `\n\n## Installation\n\nIf you do not have Node.js, navigate to their [website]() to install. After installing Node, navigate to the folder containing your project.\nTo install:\n\`\`\`\nnpm install\n\`\`\`\n\n## Usage\n\nTo run:\n\`\`\`\n` + manager + `\n\`\`\`\n\n## Contributing\n\n1. Fork it!\n2. Create your feature branch: \`git checkout -b my-new-feature\`\n3. Commit your changes: \`git commit -am 'Add some feature'\\n4. Push to the branch: \`git push origin my-new-feature\`\n5. Submit a pull request :D\n\n## Credits\n\nMade with :heart: using [GitStarted]()\n\n## License\n` + this.projectData[8].contents;
    }
    
    this.generateHTML = function(data) {
        var jQuery = '', bootstrap = '', fontAwesome = '';
        if(data.frontEnd.jquery) {
            // add jQuery
            jQuery = '\n<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>\n';
        }
        if(data.frontEnd.bootstrap) {
            // add Bootstrap
            bootstrap = `\n<!-- Latest compiled and minified CSS -->\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">\n\n<!-- Optional theme -->\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">\n\n<!-- Latest compiled and minified JavaScript -->\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>\n`;
        }
        if(data.frontEnd.fontAwesome) {
            // add FontAwesome
            fontAwesome = '\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">\n';
        }
        this.projectData[3].children[0].contents = this.htmlStart + data.gitProjectName + `</title>` + jQuery + fontAwesome + bootstrap + data.frontEnd.bootstrap ? this.htmlEndWBootstrap : this.htmlEnd;
        // console.log(this.projectData[3][0].contents);
    }
}



module.exports = new Helper();

function getPackageDependencies(dependencies) {
    var str = '';
    if(dependencies.length > 1) {
        for(var i = 0; i < dependencies.length - 1; i++) {
            str += '\t\t"' + dependencies[i].name + '": "' + dependencies[i].version + '",\n';
        }
    }
    if(dependencies.length > 0)
        str += '\t\t"' + dependencies[dependencies.length - 1].name + '": "' + dependencies[dependencies.length - 1].version + '"\n';
    return str;
}

function getRequireStatement(val) {
    return "var " + val + " = require('" + val + "');\n";
}