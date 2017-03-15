import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'

// PascalCase (for classes and constructors) vs camelCase


export default class MyHeader extends React.Component {
	constructor(props) {
		super(props);

		this.getNavItems = this.getNavItems.bind(this);
	}

	// functions defined within the class will be available within the component

	getNavItems() {
		var navItems;

			if (this.props.isLoggedIn) {
				navItems = [
					<NavItem key="search" href='/'>Home</NavItem>,
				 <NavItem key="portfolio" href='/portfolio'>Portfolio</NavItem>,
				 <NavItem key="community" href='/community'>Community</NavItem>,
				 <NavItem key="challenges" href='/challenges'>Challenges</NavItem>];
			} else {
				navItems = [
					<NavItem key="login" href='components.html'>Login</NavItem>
				];

			}

			return navItems;
		}



  render(){
    return (
			<Navbar brand='logo' right>
		  	{this.getNavItems()}
		</Navbar>



);
}
}
