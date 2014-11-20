var React = require('react');
var CheetItem = require('./CheetItem.react'); 

var CheetList = React.createClass({


	render: function() {

		var cheetNodes = this.props.cheets.map(function(cheet){
			return(
				<CheetItem author={cheet.author} body={cheet.body} />
			);
		});

		return (
			<div> 
				{cheetNodes}
			</div>
		);
	}
});

module.exports = CheetList