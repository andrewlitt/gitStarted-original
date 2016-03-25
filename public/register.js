var Register = React.createClass({
	displayName:'Register',
	getInitialState: function() {
		return {
			email:'',
			password:''
		}
	},
	emailChange: function(e) {
		var email = e.target.value;
		this.setState({email:email});
	},
	passwordChange: function(e) {
		var password = e.target.value;
		this.setState({password:password});
	},
	submitRegister: function(e) {
		e.preventDefault();
		if (this.state.email && this.state.password) {
			console.log("Good to go...");
		} else {
			console.log("Not good.");
		}
	},
	render: function() {
		return (
				React.createElement("div", {className: "register-form"}, 
					React.createElement("label", {for: "email"}, "Email:"), 
					React.createElement("input", {id: "email", value: this.email, onChange: this.emailChange, type: "email"}), 
					React.createElement("label", {for: "password"}, "Password:"), 
					React.createElement("input", {id: "password", value: this.password, onChange: this.passwordChange, type: "password"}), 
					React.createElement("button", {onClick: this.submitLogin}, "Register")
				)
			)
	}
});

React.render(React.createElement(Register, null), document.getElementById('app'));