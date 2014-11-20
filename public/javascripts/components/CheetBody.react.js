var React = require('react');

var CheetBody = React.createClass({
	render: function() {
		return (
		<p>{this.props.body}</p>
		);
	}
});

module.exports = CheetBody