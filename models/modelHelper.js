module.exports = ({
	getRequireStatement:function(val) {
		return "var " + val + " = require('" + val + "');";
	}
})