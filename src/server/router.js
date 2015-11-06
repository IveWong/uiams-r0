
import React from 'react';
import Router from 'react-routing/lib/Router';
import HtmlContext from './HtmlContext';
// import router from 'koa-router';
import HomePage from '../layout/HomePage';
import ContactPage from '../layout/ContactPage';
import NotFoundPage from '../layout/NotFoundPage';
import ErrorPage from '../layout/ErrorPage';

function router(rules) {
  return function *(next, rules){
    let firstPathName = this.path.split('/')[1].toLocaleLowerCase();
    this._page = firstPathName.replace(firstPathName[0], firstPathName[0].toLocaleUpperCase());
    yield * next
  }
}

export default router;
