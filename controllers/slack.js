

var Slack = function() {
	this.email = null;
	this.password = null;	

	this.createUser = function(email, pw) {
		this.email = email;
		this.password = pw;

		if (this.isUser()) {
			
		}
	}

	this.isUser = function() {
		if (this.email && this.password) {
			return true;
		}
		return false;
	}

	this.printCredentials = function() {
		return this.email + " " +  this.password;
	}	

}

module.exports = new Slack();
