import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../index/Index';
import About from '../sections/About'
import NotFound from './NotFound';

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = { Index } />
        <Route path = "/about" component = { About } />
        <Route component = { NotFound } />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;