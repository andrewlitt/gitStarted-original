/*
 * server-model.js
 * Created by: Jake Alsemgeest
 * March 9th, 2016
*/

var Routes = require('./routes-model');

var ServerFiles = function(data) {
	this._date = data;
}

// Constants
ServerFiles.prototype._startHTML = 'app.use(bodyParser.json()); // support json encoded bodies\napp.use(bodyParser.urlencoded({ extended: true }));\napp.use(express.static(__dirname + \'/public\'));\n\nvar server = app.listen(3000, function () {\n\tvar host = server.address().address;\n\tvar port = server.address().port;\n\tconsole.log(\'Example app listening at http://%s:%s\', host, port);\n});';

ServerFiles.prototype._data = {};

ServerFiles.prototype.createServerFile = function() {

}

module.export = ServerFiles;

