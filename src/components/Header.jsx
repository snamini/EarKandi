import React from 'react';
import logo from './logo.svg';


export default function() {
	return  <nav className="pink lighten-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Music ME</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Profile</a></li>
            <li><a href="collapsible.html">Login</a></li>
          </ul>
        </div>
      </nav>;
}
