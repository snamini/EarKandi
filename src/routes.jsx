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





//import Home from './Home/Home'
//import Login from './Login/Login'

// const auth = new AuthService('52U7LZuyd6wsDLBHtVDBbLogIfh9dDNB', 'volskaia.auth0.com');

// validate authentication for private routes
// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/login' })
//   }
// }

// export const makeMainRoutes = () => {
//   return (
//     <Route path="/" component={Container} auth={auth}>
//       <IndexRedirect to="/home" />
//       <Route path="home" component={Home} onEnter={requireAuth} />
//       <Route path="login" component={Login} />
//     </Route>
//   )
// }

// export default makeMainRoutes

// this is an annonomous function. all it does is return a new route and the path to show.
// the component will be what we always want to show when going to page /, so App
// inside app, we will have index routes
// if we go to index of our website, it will open up the home component

// export default () => {
// 	return <Route path="/"component={Container} auth={auth}>
//  	   	<IndexRoute component={Home}/>
// 		<Route path="/portfolio" isLoggedIn={true} component={Portfolio} />
// 		<Route path="/community" isLoggedIn={true}  component={Community} />
// 		<Route path="/challenges" isLoggedIn={true} component={Challenges} />
// 		<Route path="/register" component={Register} />
// 		<Route path="/Login" component={Login} />
// 		<Route path="/Register" component={Register} />
// 	    <Route path="/home" component={Home} onEnter={requireAuth} />
// 	</Route>
// };
