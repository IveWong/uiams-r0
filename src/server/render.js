
import React from 'react';
import ReactDOM from 'react-dom/server';
import HtmlContext from './HtmlContext';

function render() {
	return function *(next){
		// var statusCode = 200;
		// var resData = { bodyContent: '' };
		// var context = { hello: 'world'};
		// yield router.dispatch({ path: this.request.url }, (state, component) => {
		// 	console.log(component.render);
		// 	resData.bodyContent = ReactDOMServer.renderToString(component);
		// 	console.log("bodyContent is:" + resData.bodyContent);
		// });
		// this.type = 'text/html';
		// this.body = '<!doctype html>\n' + ReactDOMServer.renderToStaticMarkup(React.createElement(HtmlContext, resData));
	  yield * next
	}
}

export default render;
