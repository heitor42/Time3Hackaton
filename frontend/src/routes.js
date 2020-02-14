import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => (<h1>Teste</h1>)}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;