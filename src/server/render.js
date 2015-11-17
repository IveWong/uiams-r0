
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HtmlContext from './HtmlContext';
import { testUA } from 'commonpurefuc';
// import rules from './rules';

// import IndexPage from '../layout/IndexPage';
// import HomePage from '../layout/HomePage';
// import ContactPage from '../layout/ContactPage';
// import ErrorPage from '../layout/ErrorPage';
// import NotFoundPage from '../layout/NotFoundPage';
// import SignInPage from '../layout/SignInPage';
// import RegisterPage from '../layout/RegisterPage';

import {
	IndexPage,
	HomePage,
	ContactPage,
	ErrorPage,
	NotFoundPage,
	SignInPage,
	RegisterPage
} from '../client/client';

function render() {
	return function *(rules){
		var statusCode = 200;
		var resData = { 
			bodyContent: '',
			title: '',
			description: '',
			extendsCSS: ''
		};
		var context = { hello: 'world'};

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
			this.body = 'ComponentPage';
		} else {
			var ComponentPage = rule['pagenotfound'];
			this.status = 404;
			this.body = require('../client/client').IndexPage;
		}
		
		// resData.title = ComponentPage.pageInfo.title;
		// resData.description = ComponentPage.pageInfo.description;
		// resData.extendsCSS = ComponentPage.pageInfo.stylesheet;
		// resData.bodyContent = ReactDOMServer.renderToString(<ComponentPage />);
		// resData.bodyContent = JSON.stringify(testUA.parse(this.header['user-agent']));
		this.type = 'text/html';
		// this.body = '<!doctype html>\n' + ReactDOMServer.renderToStaticMarkup(React.createElement(HtmlContext, resData));
	}
}

export default render;
