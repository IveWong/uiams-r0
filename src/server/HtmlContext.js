
import React, { Component, PropTypes } from 'react';

class HtmlContent extends Component{

	static propTypes = {
		title: PropTypes.string,
		description: PropTypes.string,
		bodyContent: PropTypes.string.isRequired
	};

	render() {
		return (
			<html className="no-js" lang="">
				<head>
					<meta charSet="utf-8" />
	        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
	        <title>{this.props.title}</title>
	        <meta name="description" content={this.props.description} />
				</head>
				<body dangerouslySetInnerHTML={{__html: this.props.body}}></body>
			</html>
		);
	}
}

export default HtmlContent;
