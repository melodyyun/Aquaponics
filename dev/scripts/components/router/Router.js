import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../header/Nav';
import Home from '../sections/Home';
import Journey from '../sections/Journey'
import Index from '../index/Index';
import NotFound from './NotFound';
import DIY from '../sections/DIY';

const Router = () => {
  return(
    <React.Fragment>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = { Home } />
          <Route path = "/journey" component = { Journey } />
          <Route path = "/DIY" component = {DIY} />
          <Route path = "/farm/:farmId" component = { Index } />
          <Route component = { NotFound } />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Router;