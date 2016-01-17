"use strict";

var React= require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

	mixins:[
		Router.Navigation
	],

	statics:{
		willTransitionFrom(transition,component){
			if(component.state.dirty && !confirm('Leave without saving')){
				transition.abort();
			}
		}
	},
	getInitialState(){
		return{
			author:{id:'',firstName:'',lastName:''},
			errors:{},
			dirty:false
		};
	},

	componentWillMount(){
		var authorId = this.props.params.authorId;
		if(authorId){
			this.setState({author:AuthorApi.getAuthorById(authorId)});
		}
	},

	setAuthorState(){
		this.setState({dirty:true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author:this.state.author});
	},

	authorFormIsValid(){
		var formIsValid = true;
		this.state.errors = {}; //Clear any previous errors
		if(this.state.author.firstName.length <3){
			formIsValid = false;
			this.state.errors.firstName="First Name must be atleast 3 characters";
		}

		if(this.state.author.lastName.length <3){
			formIsValid = false;
			this.state.errors.lastName="Last Name must be atleast 3 characters";
		}

		this.setState({errors:this.state.errors});
		return formIsValid;
	},

	saveAuthor(event){
		event.preventDefault();
		if(!this.authorFormIsValid()){
			return;
		}
		AuthorApi.saveAuthor(this.state.author);
		this.setState({dirty:false});
		toastr.success('Author saved');
		this.transitionTo('authors');

	},
	render(){
		return(
				<AuthorForm author={this.state.author}
						onChange={this.setAuthorState}
						onSave={this.saveAuthor}
						errors={this.state.errors}/>
			);
	}
});
//hathway-15544326

module.exports = ManageAuthorPage;