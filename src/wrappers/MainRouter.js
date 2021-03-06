import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Wrappers
import ErrorBoundary from './ErrorBoundary';
import Solicitudes from '../views/Solicitudes';

// Shared
import Header from '../shared/Header';
import Footer from '../shared/Footer';

// Views
import GenericError from '../views/GenericError';
import Home from '../views/Home';

const MainRouter = () => (
  <Router>
    <React.Fragment>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/solicitudes" component={Solicitudes} />
          <Route path="/oops" component={GenericError} />
          <Route component={GenericError} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </React.Fragment>
  </Router>
);

export default MainRouter;
