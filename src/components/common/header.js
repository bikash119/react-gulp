"use strict";

var React = require('react');

var Router = require('react-router');

var Link = Router.Link;

var Header = React.createClass({
	render(){
		return(
				<nav className="navbar navbar-defaut">
					<div className="container-fluid">
						<Link to="app" className="navbar-brand">
						</Link>
						<ul className="nav navbar-nav">
							<li><Link to="app">Home</Link></li>
							<li><Link to="about">About</Link></li>
							<li><Link to="authors">Authors</Link></li>
						</ul>
					</div>
				</nav>
			);
	}
});

module.exports = Header;