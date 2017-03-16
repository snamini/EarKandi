import React from 'react';
import { Navbar, NavItem } from 'react-materialize'

export default function() {
	return <Navbar brand='logo' right>
			<NavItem href='/'>Home</NavItem>
			<NavItem href='/portfolio'>Portfolio</NavItem>
			<NavItem href='/community'>Community</NavItem>
			<NavItem href='/challenges'>Challenges</NavItem>
			<NavItem href='/Login'>Login</NavItem>
		</Navbar>

}
  