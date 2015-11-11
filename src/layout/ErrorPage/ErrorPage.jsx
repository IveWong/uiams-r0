
import React, { Component } from 'react';

class ErrorPage extends Component{

	static pageInfo = {
		title: 'UIAMS • Internal Server Error',
		description: 'UI auto management system.'
	};

	render() {
		return (
			<h3>This is ErrorPage.</h3>
		);
	}
}

export default ErrorPage;
