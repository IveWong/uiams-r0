
import React, { Component, PropTypes } from 'react';

class HtmlContent extends Component{
	static defaultProps = {

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
				<body dangerouslySetInnerHTML={{__html: this.props.bodyContent}}></body>
			</html>
		);
	}
}

// babel bug for 'static' keyworld (ES7);

HtmlContent.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	bodyContent: PropTypes.string.isRequired
};

export default HtmlContent;
