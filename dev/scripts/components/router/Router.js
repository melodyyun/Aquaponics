import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../header/Nav';
import Home from '../sections/Home';
import Journey from '../sections/Journey'
import Index from '../index/Index';
import NotFound from './NotFound';
import DIY from '../sections/DIY';

class Router extends React.Component {
  constructor() {
    super();
  };

  render() {
    return(
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path = "/" component = { Home } />
              <Route path = "/journey" component = { Journey } />
              <Route path = "/DIY" component = {DIY} />
              <Route path = "/farm/:farmId" component = { Index } />
              <Route component = { NotFound } />
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default Router;