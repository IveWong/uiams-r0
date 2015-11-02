
import React from 'react';
import Router from 'react-routing/lib/Router';
import HtmlContext from './HtmlContext';
import HomePage from '../layout/HomePage';
import ContactPage from '../layout/ContactPage';
import NotFoundPage from '../layout/NotFoundPage';
import ErrorPage from '../layout/ErrorPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <HtmlContext context={state.context}>{component}</HtmlContext>;
  });

  on('/contact', async () => <ContactPage />);

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  // on('*', async (state) => {
  //   const content = await http.get(`/api/content?path=${state.path}`);
  //   return content && <HomePage {...content} />;
  // });

  on('error', (state, error) => state.statusCode === 404 ?
    <HtmlContext context={state.context} error={error}><NotFoundPage /></HtmlContext> :
    <HtmlContext context={state.context} error={error}><ErrorPage /></HtmlContext>
  );
});

export default router;
