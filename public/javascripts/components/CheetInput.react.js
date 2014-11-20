var React = require('react');
var $ = require('jquery');

var CheetInput = React.createClass({

	_onKeyDown: function(event){
		if(event.keyCode === 13){
			this.postToServer();
		}
	},

	postToServer: function(){
		var newCheet = {cheet: this.refs.cheetInput.getDOMNode().value.trim()}
		$.post('/cheets', newCheet).success(function(data){
			this.refs.cheetInput.getDOMNode().value = ''
		});
	},

	render: function() {
		return (
			<input
				placeholder="Write your cheet here"
				onKeyDown={this._onKeyDown}
				ref="cheetInput" />
		);
	}
});

module.exports = CheetInput