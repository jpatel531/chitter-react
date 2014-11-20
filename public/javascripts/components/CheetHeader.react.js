var React = require('react');

var CheetHeader = React.createClass({
	render: function() {
		return (
		<h1>{this.props.author}</h1>
		);
	}
});

module.exports = CheetHeader