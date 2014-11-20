var React = require('react');

var CheetHeader = require('./CheetHeader.react');
var CheetBody = require('./CheetBody.react');

var CheetItem = React.createClass({
	render: function() {
		return (
			<div>
				<CheetHeader author={this.props.author} />
				<CheetBody body={this.props.body} />
			</div>
		);
	}
});

module.exports = CheetItem