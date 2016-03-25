var Login = React.createClass({
	displayName:'Login',
	getInitialState: function() {
		return {
			email:'',
			password:''
		}
	},
	invalidInput: function(input) {
		input.style.background = "red";
		setTimeout(function() {
			input.style.background = "white";
		}, 2500);
	},
	emailChange: function(e) {
		var email = e.target.value;
		this.setState({email:email});
	},
	passwordChange: function(e) {
		var password = e.target.value;
		this.setState({password:password});

	},
	submitLogin: function(e) {
		e.preventDefault();
		if (this.state.email && this.state.password) {
			console.log("Good to go...");
		} else {
			if (!this.state.email) {
				this.invalidInput(document.getElementById("email-login"));
			}
			if (!this.state.password) {
				this.invalidInput(document.getElementById("password-login"));
			}
			console.log("Not good.");
		}
	},
	render: function() {
		return (
			React.createElement("div", {className: "login-form"}, 
				React.createElement("label", {for: "email-login"}, "Email:"), 
				React.createElement("input", {id: "email-login", value: this.email, onChange: this.emailChange, type: "email"}), 				
				React.createElement("label", {for: "password-login"}, "Password:"), 
				React.createElement("input", {id: "password-login", value: this.password, onChange: this.passwordChange, type: "password"}), 
				React.createElement("button", {onClick: this.submitLogin}, "Submit")
			)
		)
	}
});

React.render(React.createElement(Login, null), document.getElementById('app'));