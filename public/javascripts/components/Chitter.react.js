var React = require('react');
var $ = require('jquery');

var CheetInput = require('./CheetInput.react');
var CheetList = require('./CheetList.react');

var Chitter = React.createClass({

	getInitialState: function() {
		return {
			cheets: []
		};
	},

	loadCheetsFromServer: function(){
		$.get('/cheets').success(function(data){
			this.setState({cheets: data})
		}.bind(this));
	},

	componentDidMount: function() {
		this.loadCheetsFromServer() 
	},

	render: function() {
		return (
			<div>
				<CheetInput />
				<CheetList cheets={this.state.cheets} />
			</div>
		);
	}
});

module.exports = Chitter;