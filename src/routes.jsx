import React from 'react';
import { Route, IndexRoute } from 'react-router';

//import index from './index.js';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Messages from './containers/Messages';
import Register from './containers/Register';
import Login from './containers/Login';
//Auth0
import AuthService from './utils/AuthService'
import Container from './containers/Container'


export default () => {
  return [
      <Route path="/" component={Home} />,
  		<Route path="/portfolio" component={Portfolio} />,
  		<Route path="/messages" component={Messages} />,
  		<Route path="/register" component={Register} />,
  		<Route path="/login" component={Login} />
  ];
}
