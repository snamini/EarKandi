import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'

export default class MyHeader extends React.Component {
	render(){
    return (
			<div className= "navbar-fixed">
				<Navbar brand='logo' right>
					<NavItem key="search" href='/'>Home</NavItem>
						 <NavItem key="portfolio" href='/portfolio'>Portfolio</NavItem>
						 <NavItem key="messages" href='/messages'>Messages</NavItem>
						 <NavItem key="login" href='/login'>Login</NavItem>
				</Navbar>
			</div>
);
}
}
