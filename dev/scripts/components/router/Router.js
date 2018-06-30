import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../index/Index';
import Journey from '../sections/Journey'
import NotFound from './NotFound';

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = { Index } />
        <Route path = "/journey" component = { Journey } />
        <Route component = { NotFound } />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;