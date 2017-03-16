  // importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthService from '../utils/AuthService'
import './Portfolio.css';
import  { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import styles from '../styles/styles.module.css'
import ProfileDetails from '../components/ProfileDetails'



console.log("T.object is : ");
console.log(T.object);
// then we use that component class that we just imported to make our special components
// // portfolio inherited a bunch of things from the component
class Portfolio extends Component {
    static contextTypes = {
    router: T.object
  }
static propTypes = {
    auth: T.instanceOf(AuthService)
  }

constructor(props, context) {
  console.log(props); //pbject
  console.log(context);
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    // props.auth.on('profile_updated', (newProfile) => {
    //   this.setState({profile: newProfile})
    // })
  }

   logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  render(){
        const { profile } = this.state
        return (
            <div>
{/*-------------------------Header------------------------*/}
                <Header/>
{/*-------------------------Page Content------------------*/}
                <div className="container">
{/*-------------------------Card Section------------------*/}
                    <div className="row">
                        <div className="col s4" id="aboutme">
                          <h1>meow meow meow</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="col s8" id="portfolio">
                              <div className={styles.root}>
        <h2>Now I know who you are...</h2>
        <h3>{profile.name}!</h3>
         <ProfileDetails profile={profile}></ProfileDetails>

        <Button onClick={this.logout.bind(this)}>Logout</Button>
      </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                               sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
{/*-------------------------Footer-----------------------*/}
                <Footer/>
            </div>
        );
    }
}

export default Portfolio;




// how are these components used? must make sure the app knows about them. so we import them in Routes.jsx
