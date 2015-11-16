
import React, { Component } from 'react';
import NavTop from '../../../components/NavTop';

class HomePage extends Component{

	static pageInfo = {
		title: 'UIAMS • Welcome Home!',
		description: 'UI auto management system.',
		stylesheet: 'src/assets/layout.css'
	};

	render() {
		return (
			<div class="">
				<NavTop />
				<div className="context page-layout">
					<h1>This is HomePage.</h1>
				</div>
			</div>
		);
	}
}

export default HomePage;
