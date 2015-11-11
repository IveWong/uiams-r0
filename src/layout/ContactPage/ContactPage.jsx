

import React, { Component } from 'react';
import NavTop from '../../components/NavTop';

class ContactPage extends Component{

	static pageInfo = {
		title: 'UIAMS • Contact',
		description: 'UI auto management system.',
		stylesheet: 'src/assets/layout.css'
	};

	render() {
		return (
			<div class="">
				<NavTop />
				<div className="context page-layout">
					<h1>This is ContactPage.</h1>
				</div>
			</div>
		);
	}
}

export default ContactPage;
