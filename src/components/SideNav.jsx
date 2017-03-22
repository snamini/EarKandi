import React from 'react';
import {SideNav, SideNavItem, Button} from 'react-materialize';


export default class MySideNav extends React.Component {
  render(){
    return (
      <SideNav
        trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ closeOnClick: true }}
        className = "fixed"
        >
        <SideNavItem userView
          user={{
            background: 'assets/office.jpg',
            image: 'assets/yuna.jpg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
      </SideNav>
    );
  }
}
