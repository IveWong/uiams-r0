
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HtmlContext from './HtmlContext';
import HomePage from '../layout/HomePage';

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
		if (rules) {};
		ComponentPage = yield require('../layout/' + this._page + 'Page');
		this.body = ComponentPage + HomePage;
		// resData.bodyContent = ReactDOMServer.renderToString(<ComponentPage />);
		// this.type = 'text/html';
		// this.body = '<!doctype html>\n' + ReactDOMServer.renderToStaticMarkup(React.createElement(HtmlContext, resData));
	}
}

export default render;
