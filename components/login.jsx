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
			<div className="login-form">
				<label for="email-login">Email:</label>
				<input id="email-login" value={this.email} onChange={this.emailChange} type="email"/>				
				<label for="password-login">Password:</label>
				<input id="password-login" value={this.password} onChange={this.passwordChange} type="password"/>
				<button onClick={this.submitLogin}>Submit</button>
			</div>
		)
	}
});

React.render(<Login />, document.getElementById('app'));