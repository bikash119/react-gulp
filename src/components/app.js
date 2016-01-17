/*eslint-disable strict*/ // Need global variable, disabling check

var React = require('react');
var Header = require("./common/header");
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render(){
		return(
				<div>
					<Header/>
					<div className="fluid-container">
						<RouteHandler/>
					</div>
				</div>
			);
	}
});

module.exports=App;