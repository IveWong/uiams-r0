
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HtmlContext from './HtmlContext';
import rules from './rules';

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
		if (rules) {
			for(let key in rules){
				this._page = this._page.toLocaleLowerCase() === key.toLocaleLowerCase() ? rules[key] : rules.pagenotfound;
			}
		}
		// this.body = this._page;
		this.body = 'rules.pageerrd';
		// resData.bodyContent = ReactDOMServer.renderToString(<ComponentPage />);
		// this.type = 'text/html';
		// this.body = '<!doctype html>\n' + ReactDOMServer.renderToStaticMarkup(React.createElement(HtmlContext, resData));
	}
}

export default render;
