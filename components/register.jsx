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
				<div className="register-form">
					<label for="email">Email:</label>
					<input id="email" value={this.email} onChange={this.emailChange} type="email"/>
					<label for="password">Password:</label>
					<input id="password" value={this.password} onChange={this.passwordChange} type="password"/>
					<button onClick={this.submitLogin}>Register</button>
				</div>
			)
	}
});

React.render(<Register />, document.getElementById('app'));