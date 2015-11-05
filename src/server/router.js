
import React from 'react';
import Router from 'react-routing/lib/Router';
import HtmlContext from './HtmlContext';
import HomePage from '../layout/HomePage';
import ContactPage from '../layout/ContactPage';
import NotFoundPage from '../layout/NotFoundPage';
import ErrorPage from '../layout/ErrorPage';

class router {

  constructor(initialize){
    this.routes = [];
    this.render = Object.create(null);

    if (typeof initialize === 'function') {
      initialize(this.on.bind(this));
    };
  }
}

export default router;
