  // importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AuthService from '../utils/AuthService'
import './Portfolio.css';

import  { PropTypes as T } from 'react'
//import styles from '../styles/styles.module.css'
import ProfileDetails from '../components/ProfileDetails'   
        
import { Row, Col, CardPanel } from 'react-materialize';
import { Input} from 'react-materialize';
import { Pagination, Chip, Icon, Button, NavItem, CollectionItem, Collection, Collapsible, CollapsibleItem} from 'react-materialize';
import Card from '../components/Card';
import Bookme from '../components/Bookme';
import './Portfolio.css';

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
      // loggedIn: props.auth.isLoggedIn()
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
                <Header isLoggedIn={this.props.route.isLoggedIn}/>
{/*-------------------------Page Content------------------*/}
                <div className="container">
{/*-------------------------JUMBOTRON------------------*/}
                    <Card></Card>
{/*-------------------------aboutme------------------*/}

                    <div className="row">
                        <div className="col s4" id="aboutme">
                            <Bookme />
                             <ProfileDetails profile={profile}></ProfileDetails>
                            <Button onClick={this.logout.bind(this)}>Logout</Button>
                          <CardPanel className=" black-text">
                              <Row>
                                  <Col s={12}>
                                      <Chip>
                                        
                                        <image src='../../public/assets/yuna.jpg' alt='Contact Person' />
                                              {profile.name}!
                                      </Chip>
                                  </Col>
                              </Row>
                              <Row>
                                  <Input s={7} label="First Name" validate><Icon>account_circle</Icon></Input>
                                  <Input s={5} label="Last Name" validate type='tel'></Input>
                              </Row>
                              <Row>
                                  <CardPanel>
                                    <Icon>queue_music</Icon>
                                    <div className="row">
                                      <form className="col s12">
                                        <div className="row">
                                          <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                                            <label htmlFor="textarea1">Music Description</label>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </CardPanel>
                                </Row>
                                <Row>
                                    <Collection>
                                      <CollectionItem>Alvin</CollectionItem>
                                      <CollectionItem>Alvin</CollectionItem>
                                      <CollectionItem>Alvin</CollectionItem>
                                      <CollectionItem>Alvin</CollectionItem>
                                    </Collection>

                                </Row>
                                <Row>
                                  <Collapsible popout>
                                    <CollapsibleItem header='First' icon='filter_drama'>
                                      Lorem ipsum dolor sit amet.
                                    </CollapsibleItem>
                                    <CollapsibleItem header='Second' icon='place'>
                                      Lorem ipsum dolor sit amet.
                                    </CollapsibleItem>
                                    <CollapsibleItem header='Third' icon='whatshot'>
                                      Lorem ipsum dolor sit amet.
                                    </CollapsibleItem>
                                  </Collapsible>
                                </Row>
                                    <Row>
                                      <Col s={12}>
                                        <Input s={12} label="Language" validate type='tel'><Icon>language</Icon></Input>
                                      </Col>
                                    </Row>
                                      <Row>
                                        <Col s={12}>
                                          <Input s={12} label="Language" validate type='tel'><Icon>language</Icon></Input>
                                        </Col>
                                      </Row>
                                    </CardPanel>
                        </div>
                        
                        <div className="col s8" id="port">
                          <CardPanel className=" black-text">
{/*-------------------------Portfolio Title------------------*/}
                            <h1 className="porfolio-title">Portfolio</h1>
{/*-------------------------Upload------------------*/}
                            <Row>
                              <Col s={8}>
                                <div>

      </div>
                                </Col>
                                <Col s={1}>
                                  <NavItem href='get-started.html'><Icon>input</Icon></NavItem>
                                  {/* <div>
                                  <Button waves='light'>submit</Button>
                                </div> */}
                                </Col>
                            </Row>
{/*-------------------------Cards------------------*/}

                            <Row>
                                <Col s={12}>

                                  <CardPanel>
                                    <div className="video-container">
                                        <iframe width="640" height="360" src="https://www.youtube.com/embed/10r9ozshGVE" frameBorder="0" allowFullScreen=""></iframe>
                                    </div>
                                  </CardPanel>
                                </Col>
                                <Col s={6}>
                                    <Card/>
                                </Col>
                                <Col s={6}>
                                    <Card/>
                                </Col>
                                <Col s={6}>
                                    <Card/>
                                </Col>
                                <Col s={6}>
                                    <Card/>
                                </Col>
                                <Col s={6}>
                                    <Card/>
                                </Col>
                            </Row>
                          <Pagination items={10} activePage={2} maxButtons={8}/>
                          </CardPanel>
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
