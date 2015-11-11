
import React, { Component, PropTypes } from 'react';

class HtmlContent extends Component{
	static propTypes = {
		title: PropTypes.string,
		description: PropTypes.string,
		bodyContent: PropTypes.string.isRequired,
		extendsCSS: PropTypes.string
	};
	static defaultProps = {};

	static defaultProps = {};

	render() {
		return (
			<html className="no-js" lang="">
				<head>
					<meta charSet="utf-8" />
	        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
	        <title>{this.props.title}</title>
	        <meta name="description" content={this.props.description} />
	        <link rel="stylesheet" type="text/css" href="node_modules/normalize.css/normalize.css"/>
	        <link rel="stylesheet" type="text/css" href={this.props.extendsCSS}/>
				</head>
				<body dangerouslySetInnerHTML={{__html: this.props.bodyContent}}></body>
			</html>
		);
	}
}

export default HtmlContent;
