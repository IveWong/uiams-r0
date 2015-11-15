
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Location from './history';

const resData = { 
	bodyContent: '',
	title: '',
	description: '',
	extendsCSS: ''
};

function render(){

	return this;
}

function update(){
	let currentLocation = null;
	let currentState = null;

	const unlistion = Location.listion(location => {
		currentLocation = location;
		currentState = Object.assign({}, location.state, {
			path: location.pathname,
			query: location.query,
			state: location.state,
			resData
		});

		render(currentState);
	});
}

export default localserve;
