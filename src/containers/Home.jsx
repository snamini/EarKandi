// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import './Home.css';
import { Row, Col, Input, Icon, Dropdown, Button, Slider, Slide} from 'react-materialize';
// then we use that component class that we just imported to make our special components
// // Home inherited a bunch of things from the component
class Home extends Component {
    render() {
        return (
            <div>

{/*-------------------------Title, Search Bar, Drop Down Genre, Followers button--------------------*/}
                    <Row></Row>
<<<<<<< HEAD

                      <h1 className="title">Creatington</h1>

=======
                      <h1 class="title">Creatington</h1>
>>>>>>> 0325dd8581465e017dc325f35757697ae69fdf52
                      <Slider>
                          <Slide
                            src="http://lorempixel.com/580/250/nature/1"
                            title="This is our big Tagline!">
                            Here's our small slogan.
                          </Slide>
                          <Slide
                            src="http://lorempixel.com/580/250/nature/2"
                            title="Left aligned Caption"
                            placement="left">
                            Here's our small slogan.
                          </Slide>
                          <Slide
                            src="http://lorempixel.com/580/250/nature/3"
                            title="Right aligned Caption"
                            placement="right">
                            Here's our small slogan.
                          </Slide>
                        </Slider>
<<<<<<< HEAD

=======
>>>>>>> 0325dd8581465e017dc325f35757697ae69fdf52
                      <Row>
                        <Col s={5} className='search-bar'>
                          <SearchBar/>
                        </Col>
                        <Col s={2} className='genres'>
                          <Dropdown trigger={<Button>Genres<Icon right>arrow_drop_down</Icon></Button>}>
                              <Row>
                                  <Input name='group1' type='checkbox' value='red' label='Hip-Hop' />
                                  <Input name='group2' type='checkbox' value='red' label='R&B' />
                                  <Input name='group3' type='checkbox' value='red' label='Jazz' />
                                  <Input name='group4' type='checkbox' value='red' label='Classical' />
                                  <Input name='group5' type='checkbox' value='red' label='Electronic' />
                                  <Input name='group6' type='checkbox' value='red' label='Rock' />
                                  <Input name='group7' type='checkbox' value='red' label='Alternative' />
                                  <Input name='group8' type='checkbox' value='red' label='Punk' />
                                  <Input name='group9' type='checkbox' value='red' label='Swing' />
                                  <Input name='group10' type='checkbox' value='red' label='Bluegrass' />
                                  <Input name='group11' type='checkbox' value='red' label='Acoustic' />
                                  <Input name='group12' type='checkbox' value='red' label='Pop' />
                              </Row>
                            </Dropdown>
                         </Col>
                         <Col s={1} className='followers'>
                           <Button waves='light'>followers</Button>
                         </Col>
                      </Row>


{/*-------------------------Card Section------------------*/}
                      <Row>
                        <Col s={3} className='card1'>
                          <Card/>
                        </Col>
                        <Col s={3} className='card2'>
                          <Card/>
                        </Col>
                        <Col s={3} className='card3'>
                          <Card/>
                        </Col>
                        <Col s={3} className='card4'>
                          <Card/>
                        </Col>
                        <Col s={3} className='card5'>
                          <Card/>
                        </Col>
                        <Col s={3} className='card6'>
                          <Card/>
                        </Col>
                        <Col s={3} className='card7'>
                          <Card/>
                        </Col>
                        <Col s={3} className='card8'>
                          <Card/>
                        </Col>
                      </Row>


{/*-------------------------Footer-----------------------*/}
                <Footer/>
            </div>

        );
    }
}

export default Home;

// how are these components used? must make sure the app knows about them. so we import them in Routes.jsx
