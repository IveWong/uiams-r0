
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HtmlContext from './HtmlContext';
// import rules from './rules';

import HomePage from '../layout/HomePage';
import IndexPage from '../layout/IndexPage';
import ContactPage from '../layout/ContactPage';
import ErrorPage from '../layout/ErrorPage';
import NotFoundPage from '../layout/NotFoundPage';
import SignInPage from '../layout/SignInPage';
import RegisterPage from '../layout/RegisterPage';

function render() {
	return function *(rules){
		var statusCode = 200;
		var resData = { bodyContent: '' };
		var context = { hello: 'world'};
		// yield router.dispatch({ path: this.request.url }, (state, component) => {
		// 	console.log(component.render);
		// 	resData.bodyContent = ReactDOMServer.renderToString(component);
		// 	console.log("bodyContent is:" + resData.bodyContent);
		// });

		var rule = {
			home: HomePage,
			index: IndexPage,
			contact: ContactPage,
			signin: SignInPage,
			register: RegisterPage,
			pagenotfound: NotFoundPage,
			pageerror: ErrorPage
		};

		if (rule[this._firstarg]) {
			var ComponentPage = rule[this._firstarg];
		} else {
			var ComponentPage = rule['pagenotfound'];
			this.state = 404;
		}
		
		// if (rules) {
		// 	this.body = context['hello'];
		// 	// for(let key of rules){
		// 	// 	this.body = this._firstarg === key.toLocaleLowerCase() ? rules[key] : rules.pagenotfound;
		// 	// }
		// }
		// this.body = rules['home'];
		
		resData.bodyContent = ReactDOMServer.renderToString(<ComponentPage />);
		this.type = 'text/html';
		this.body = '<!doctype html>\n' + ReactDOMServer.renderToStaticMarkup(React.createElement(HtmlContext, resData));
	}
}

export default render;
