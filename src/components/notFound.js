"use strict";

var React = require('react');

var Router = require('react-router');

var Link = Router.Link

var NotFoundPage = React.createClass({
	render(){
		return(
				<div>
					<h1>Page Not Found</h1>
					<p> Whoops! Sorry, there is nothing here</p>
					<p><Link to="app">Back to home</Link></p>
				</div>
			);
	}
});

module.exports = NotFoundPage;