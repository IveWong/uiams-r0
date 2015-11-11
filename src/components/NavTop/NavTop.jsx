
import React, { Component, PropTypes } from 'react';

class NavTop extends Component{
	static pageInfo = {
		title: 'UIAMS • Welcome',
		description: 'UI auto management system.'
	};
	static propTypes = {};
	static defaultProps = {};

	render() {
		return (
			<div className="nav-top">
				<div className="page-layout">
					<a href="/" className="logo-img"></a>
					<div className="nav-top-list">
						<a href="/home">UserCenter</a>
						<a href="/contact">Contact</a>
						<a href="/register">Register</a>
						<a href="/signin">SignIn</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NavTop;
