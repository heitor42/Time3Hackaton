import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

import Home from './pages/Home/index';
import Courses from './pages/Courses/index';
import Investiments from './pages/Investiments/index';
import Login from './pages/Login/index';


function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <main className="container">
          <Route path="/" exact component={Home}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/investiments" component={Investiments}/>
          <Route path="/login" component={Login}/>
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;