var projectData = [
    {
        'type': 'folder',
        'name': 'controllers',
        'path': '/controllers',
        'children': []
    },
    {
        'type': 'folder',
        'name': 'models',
        'path': '/models',
        'children': []
    },
    {
        'type': 'folder',
        'name': 'public',
        'path': '/public',
        'children': []
    },
    {
        'type': 'folder',
        'name': 'views',
        'path': '/views',
        'children': []
    },
    {
        'type': 'file',
        'name': '.gitignore',
        'path': '/.gitignore',
        'contents': `
            # Logs
            logs
            *.log
            npm-debug.log*

            # Runtime data
            pids
            *.pid
            *.seed

            # Directory for instrumented libs generated by jscoverage/JSCover
            lib-cov

            # Coverage directory used by tools like istanbul
            coverage

            # Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
            .grunt

            # node-waf configuration
            .lock-wscript

            # Compiled binary addons (http://nodejs.org/api/addons.html)
            build/Release

            # Dependency directories
            node_modules
            jspm_packages

            # Optional npm cache directory
            .npm

            # Optional REPL history
            .node_repl_history
            `
    },
    {
        'type': 'file',
        'name': 'index.js',
        'path': '/index.js',
        'contents': ''
    },
    {
        'type': 'file',
        'name': 'package.json',
        'path': '/package.json',
        'contents': ''
    }

];

var serverBody = `
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true }));

    var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Example app listening at http://%s:%s', host, port);
    });            
    `

module.exports = ({
    updateProjectData: function() {
        //placeholder
        serverFile = generateServerFile
    },
    populateDirectory: function () {
        checkDir(projectData);
    }
})




function checkDir(root) {
    for (var i in root) {
        console.log(root[i].type);
        if (root[i].type == 'file') {
            createFile(root[i].name, root[i].contents);
        } else {
            checkDir(root[i].children);
        }
    }
}

function createFile(name, contents) {
    //create file in github repo at 
}

function generateServerFile (name, dependencies) {
    var fileData = {
        'filename': name,
        'contents': function (dependencies) {
            var str = '';
            for (var i in dependencies) {
                str += getRequireStatement(dependencies[i]);
            }
            return str + serverBody
        }
    }
    return fileData;
}

function getRequireStatement(val) {
    return "var " + val + " = require('" + val + "');\n";
}