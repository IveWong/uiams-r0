
import React, { Component, PropTypes } from 'react';
import NavTop from '../../components/NavTop';

class IndexPage extends Component{
<<<<<<< HEAD
	
=======
	static pageInfo = {
		title: 'UIAMS • Welcome',
		description: 'UI auto management system.',
		stylesheet: 'src/assets/layout.css'
	};
	static propTypes = {};
	static defaultProps = {};

>>>>>>> 326a832e2d0433feeb1a0fe9206fe326b1550a82
	render() {
		return (
			<div class="">
				<NavTop />
				<div className="context page-layout">
					<h1>This is IndexPage.</h1>
				</div>
			</div>
		);
	}
}

export default IndexPage;
