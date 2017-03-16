// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Row, Col, CardPanel, CardTitle} from 'react-materialize';
import { Input} from 'react-materialize';
import { Pagination, Chip, Tag, Icon, Button, NavItem } from 'react-materialize';
import Card from '../components/Card';
import './Portfolio.css';
// then we use that component class that we just imported to make our special components
// // portfolio inherited a bunch of things from the component
class Portfolio extends Component {
  render(){
        return (
            <div>
{/*-------------------------Header------------------------*/}
                <Header isLoggedIn={this.props.route.isLoggedIn}/>
{/*-------------------------Page Content------------------*/}
                <div className="container">
{/*-------------------------JUMBOTRON------------------*/}
                    <div className="row">
                      <div className="col s12" id="jumbotron">

                        <div className="card">
                          <div className="card-image">
                            <img src="assets/sample-1.jpg" />
                            <span className="card-title">Card Title</span>
                          </div>
                          <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                          </div>
                          <div className="card-action">
                            <a href="#">This is a link</a>
                          </div>
                        </div>


                      </div>

                    </div>
{/*-------------------------Card Section------------------*/}

                    <div className="row">
                        <div className="col s4" id="aboutme">
                          <CardPanel className=" black-text">
                              <Row>
                                  <Col s={12}>
                                      <Chip>
                                        <image src='assets/yuna.jpg' alt='Contact Person' />
                                          Jane Doe
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
                                            <label for="textarea1">Music Description</label>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </CardPanel>
                                </Row>
                                <Row>
                                  <CardPanel>
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
                                    <Row>
                                      <Col s={12}>
                                        <Input s={12} label="Language" validate type='tel'><Icon>language</Icon></Input>
                                      </Col>
                                    </Row>
                                  </CardPanel>
                                </Row>
                                <Row>
                                  <CardPanel>
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
                                      <Row>
                                        <Col s={12}>
                                          <Input s={12} label="Language" validate type='tel'><Icon>language</Icon></Input>
                                        </Col>
                                      </Row>
                                    </CardPanel>
                                </Row>
                        </CardPanel>
                        </div>
                        <div className="col s8" id="port">
                          <CardPanel className=" black-text">
{/*-------------------------Title------------------*/}
                            <h1 className="porfolio-title">Portfolio</h1>
{/*-------------------------Upload------------------*/}
                            <Row>
                              <Col s={8}>
                                <form action="#">
                                  <div className="file-field input-field">
                                    <div className="btn">
                                      <span>File</span>
                                      <input type="file" multiple />
                                    </div>
                                    <div className="file-path-wrapper">
                                      <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                                    </div>
                                  </div>
                                </form>
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
