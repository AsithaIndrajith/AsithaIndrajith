import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter, Redirect, Switch, Route,
} from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;
const routerBasename = (() => {
  try {
    const { pathname } = new URL(PUBLIC_URL || '/', window.location.origin);
    return pathname === '/' ? undefined : pathname.replace(/\/$/, '');
  } catch (error) {
    return undefined;
  }
})();

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Publications = lazy(() => import('./pages/Publications'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter basename={routerBasename}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/publications" component={Publications} />
        <Redirect from="/projects" to="/publications" />
        <Route path="/stats" component={Stats} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
