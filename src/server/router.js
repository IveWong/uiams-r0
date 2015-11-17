
// import React from 'react';
// import HtmlContext from './HtmlContext';
// import router from 'koa-router';
// import HomePage from '../layout/HomePage';
// import ContactPage from '../layout/ContactPage';
// import NotFoundPage from '../layout/NotFoundPage';
// import ErrorPage from '../layout/ErrorPage';

function router(rules) {
  return function *(next, rules){
    let firstPathName = this.path.split('/')[1];
    if (firstPathName == '') {
    	this._firstarg = 'index';
    } else{
    	this._firstarg = firstPathName.toLocaleLowerCase();
    }
    
    yield next;
  }
}

export default router;
