/*
 * html-model.js
 * Created by: Jake Alsemgeest
 * March 9th, 2016
*/

var HTMLIndexPage = function(data) {
	this._data = data;
}

// Constants
HTMLIndexPage.prototype._HTMLStart = '<!DOCTYPE html><html><head><title>';
HTMLIndexPage.prototype._HTMLEnd = '</head><body><div style="text-align:center; width:100%;"><a style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="#"><img style="width: 30px;" alt="Brand" src="http://pngimg.com/upload/heart_PNG706.png"></a><a target="_blank" style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="https://github.com/zackharley/QHacks"><img style="width:30px;" alt="Brand" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"></a><a style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="#"><img style="width: 30px;" alt="Brand" src="http://pngimg.com/upload/heart_PNG706.png"></a></div><div ><div style="text-align:center; width:100%;"><h4>Thanks for making a repo using gitStarted</h4></div><div style="text-align:center; width:100%;"><h4>Woot!</h4><iframe style="margin-top:15px; border:0px;" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/IKqV7DB8Iwg?autoplay=1"></iframe></div></div></body></html>';
HTMLIndexPage.prototype._HTMLBootstrapEnd = '</head><body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header" style="width:100%; text-align:center;"><a style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="#"><img style="width: 30px;" alt="Brand" src="http://pngimg.com/upload/heart_PNG706.png"></a><a target="_blank" style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="https://github.com/zackharley/QHacks"><img style="width:30px;" alt="Brand" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"></a><a style="text-align: center;float: none;display: inline-block;" class="navbar-brand" href="#"><img style="width: 30px;" alt="Brand" src="http://pngimg.com/upload/heart_PNG706.png"></a></div></div></nav><div class="container"><div class="row"><div class="col-md-12" style="text-align:center"><h4>Thanks for making a repo using gitStarted</h4></div><div class="col-md-12" style="text-align:center"><h4>Woot!</h4><iframe style="margin-top:15px; border:0px;" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/IKqV7DB8Iwg?autoplay=1"></iframe></div></div></div></body></html>';
HTMLIndexPage.prototype._jQuery = '\n<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>\n';
HTMLIndexPage.prototype._Bootstrap = '\n<!-- Latest compiled and minified CSS -->\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">\n\n<!-- Optional theme -->\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">\n\n<!-- Latest compiled and minified JavaScript -->\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>\n';
HTMLIndexPage.prototype._FontAwesome = '\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">\n';

HTMLIndexPage.prototype._data = {};

HTMLIndexPage.prototype.getPage = function(callback) {
	if (this._data === {}) {
		callback(null);
		return;
	}

	var returnStr = this._HTMLStart;
	returnStr += this._data.gitProjectName;
	returnStr += '</title>';
	returnStr += (this._data.frontEnd.jquery === true ? this._jQuery : '');
	returnStr += (this._data.frontEnd.bootstrap === true ? this._Bootstrap : '');
	returnStr += (this._data.frontEnd.fontAwesome === true ? this._FontAwesome : '');

	if (this._data.frontEnd.bootstrap === true) {
		returnStr += this._HTMLBootstrapEnd;
	} else {
		returnStr += this._HTMLEnd;
	}

	callback(returnStr);
	return;
}

module.exports = HTMLIndexPage;