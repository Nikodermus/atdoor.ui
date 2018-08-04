import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Wrappers
import ErrorBoundary from './ErrorBoundary';

// Shared
import Header from '../shared/Header';
import Footer from '../shared/Footer';

// Views
import GenericError from '../views/GenericError';
import Home from '../views/Home';

const MainRouter = () => (
  <Router>
    <div>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oops" component={GenericError} />
          <Route component={GenericError} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </div>
  </Router>
);

export default MainRouter;
