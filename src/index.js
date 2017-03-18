import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router';
import makeRoutes from './routes';
// the makeRoutes is just a variable. can be named anything


const APP_ENTRY = <Router history={browserHistory}>{makeRoutes()}
								</Router>;

ReactDOM.render(
	APP_ENTRY,
	document.getElementById('root')
);
