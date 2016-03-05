var fs = require('fs');
var root = 'users/';
var folders = ['controllers', 'views', 'models', 'public'];
var files = [['index.js', '.gitignore', 'package.json'], [], [], [], []];

module.exports = ({
    getRequireStatement: function (val) {
        return "var " + val + " = require('" + val + "');";
    },
    populateDirectory: function (username) {
        var dir = root + username + '/';
        fs.mkdir(dir, function (err) {
            if (err)
                return console.error(err);
        })
        for (var i in folders) {
            fs.mkdir(dir + folders[i] + '/', function (err) {
                if (err) {
                    return console.error(err);

                }
            });
        }
        var create = createFiles(dir);
        return 'Success';
    },
    appendFile: function(file, string) {
        fs.appendFile(file, string, function(err) {
           if(err)
               return console.error(err);
            return console.log('String successfully appended.');
        });
    }
})

function createFiles(root) {
    for (var i in files) {
        for (var j in files[i]) {
            fs.writeFile(root + '/' + files[i][j], '', function (err) {
                if (err) {
                    return console.error(err);
                }
            });
        }
    }
}