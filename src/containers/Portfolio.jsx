  // importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {CardPanel, Collection, Input, Row, Col, CollectionItem, Collapsible, CollapsibleItem, Icon, Home} from 'react-materialize';
import PortfolioCard from '../components/PortfolioCard';
import DisplayCard from '../components/DisplayCard';
import StatusPost from '../components/StatusPost';
import AboutMe from '../components/AboutMe';
import Pagination from '../components/Pagination';
class Portfolio extends Component {
    render() {
    return (
        <div className="all">
            <Header/>
            <div>
                <Row>
                    <Col s={12}>
                        <DisplayCard/>
                    </Col>
                </Row>
                <Row>
                    <Col s={4} className="aboutme">
                        <CardPanel>
                            <Row>
                                <Col s={12}>
                                    <AboutMe/>
                                </Col>
                            </Row>
                            <Row>
                              <Col s={7}>
                                <h1>meow</h1>
                              </Col>
                              <Col s={5}>
                                <h1>meow</h1>
                              </Col>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <h1>meow</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <h1>meow</h1>
                                </Col>
                            </Row>
                            <Row>
                              <Col s={12}>
                                <h1>meow</h1>
                              </Col>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <h1>meow</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <h1>meow</h1>
                                </Col>
                            </Row>
                        </CardPanel>
                    </Col>
                    <Col s={8} className="portfolio">
                      <CardPanel>
                        <Row>
                          <Col s={12}>
                            <StatusPost/>
                          </Col>
                        </Row>
                        <Row>
                          <Col s={12}>
                            <PortfolioCard/>
                          </Col>
                        </Row>
                        <Row>
                          <Col s={12}>
                            <PortfolioCard/>
                          </Col>
                        </Row>
                        <Row>
                          <Col s={12}>
                            <PortfolioCard/>
                          </Col>
                        </Row>
                      </CardPanel>
                    </Col>
                </Row>
                <Row>
                  <Col s={9}></Col>
                  <Col s={3}>
                    <Pagination/>
                  </Col>
                </Row>
              </div>
              <Footer/>
            </div>
            );
        }
    }

    export default Portfolio;
