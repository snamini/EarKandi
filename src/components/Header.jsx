import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

export default function() {
	return <Navbar brand='logo' right>
		  <NavItem href='get-started.html'>Getting started</NavItem>
		  <NavItem href='components.html'>Components</NavItem>
		</Navbar>

}
