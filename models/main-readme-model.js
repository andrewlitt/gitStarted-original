/*
 * main-readme-model.js
 * Created by: Jake Alsemgeest
 * March 9th, 2016
*/

var MainReadMe = function(data) {
	this._data = data;
}

// Constants
MainReadMe.prototype._INFO = '# [[[PROJECTNAME]]] \n\n [[[DESCRIPTION]]] \n\n## Installation\n\nIf you do not have Node.js, navigate to their [website](https://nodejs.org/en/) to install. After installing Node, navigate to the folder containing your project.\nTo install:\n\nnpm install\n\n\n## Usage\n\nTo run:\n\n [[[MANAGER]]] \n\n\n## Contributing\n\n1. Fork it!\n2. Create your feature branch: git checkout -b my-new-feature\n3. Commit your changes: git commit -am \'Add some feature\'\n4. Push to the branch: git push origin my-new-feature\n5. Submit a pull request :D\n\n## Credits\n\nMade with :heart: using [GitStarted](https://github.com/zackharley/gitStarted)\n\n## License\n [[[LICENSE]]]';
MainReadMe.prototype._LICENSE = 'The MIT License (MIT)\nCopyright (c) 2016 GitStarted\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
MainReadMe.prototype._data = {};

MainReadMe.prototype.createReadMe = function(callback) {
	if (this._data === {}) {
		callback(null);
		return;
	}
	console.log(this._data);
	var returnStr = this._INFO;
	console.log(returnStr.replace('[[[PROJECTNAME]]]', this._data.gitProjectName));
	returnStr = returnStr.replace('[[[PROJECTNAME]]]', this._data.gitProjectName);
	returnStr = returnStr.replace('[[[DESCRIPTION]]]', this._data.gitProjectDesc);
	returnStr = returnStr.replace('[[[MANAGER]]]', this._data.nodeManager);
	returnStr = returnStr.replace('[[[LICENSE]]]', this._LICENSE);

	callback(returnStr);
	return;
}

module.exports = MainReadMe;