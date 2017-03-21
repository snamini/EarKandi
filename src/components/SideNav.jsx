import React from 'react';
import {SideNav, SideNavItem, Button} from 'react-materialize';


export default class MySideNav extends React.Component {
  render(){
    return (
      <SideNav
        trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ closeOnClick: true, menuWidth: 300, edge: 'right'}}
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
// -----------------------------------------------------------------
// // components/SideNav.jsx
// import Search from './components/Search.jsx'
//
// export default class SideNav extends Component {
//     constructor() {
//         this.state = {
//             searchValue: '',
//             searchResults: []
//         }
//     }
//
//     handleSearchChange(event){
//         if (/\d+/.test(event.target.value)) {
//             return;
//         }
//
//         this.setState({
//             searchValue: event.target.value
//         });
//     }
//
//     render() {
//         returns <div>
//             <Search value={this.state.searchValue} onChange={this.handleSearchChange}>
//         </div>;
//     }
// }
