import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import index from './index.js';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Community from './containers/Community';
import Challenges from './containers/Challenges';

// this is an annonomous function. all it does is return a new route and the path to show.
// the component will be what we always want to show when going to page /, so App
// inside app, we will have index routes
// if we go to index of our website, it will open up the home component
export default () => {


	return <Route path="/">
		<IndexRoute isLoggedIn={true} component={Home}/>
		<Route path="/portfolio" isLoggedIn={true} component={Portfolio} />
		<Route path="/community" isLoggedIn={true}  component={Community} />
		<Route path="/challenges" isLoggedIn={true} component={Challenges} />
	</Route>;
};
