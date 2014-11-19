var React = require('react');

var TestComponent = React.createClass({
	render: function() {
		return (
			<h1 className="TestComponent">Hello World</h1>
		);
	}
});

React.render(<TestComponent />, document.getElementById('app'))

// module.exports = TestComponent;