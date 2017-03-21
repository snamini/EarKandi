// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import CheckBox from '../components/SearchBar';
import './Home.css';
import { Row, Col, CardPanel, CardTitle, Input, Icon, Dropdown, Button, Slider, Slide} from 'react-materialize';
import SearchBS from '../components/SearchBS';
import OwlCarousel from 'react-owl-carousel';
// then we use that component class that we just imported to make our special components
// // Home inherited a bunch of things from the component
class Home extends Component {
    render() {
        return (
            <div>

{/*------------------------------------nav bar header---------------------------------------*/}
                <Header isLoggedIn={this.props.route.isLoggedIn}/>


{/*-------------------------Title, Search Bar, Drop Down Genre, Followers button--------------------*/}
                    <div>
                      <h1 className="title">Creatington</h1>
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
                      <Row>
                         <Col s={12} className='search-bar'>
                          <SearchBS />
                        </Col>
                      </Row>


{/*-------------------------Card Section------------------*/}
<h1>Featured Artists</h1>
                      <OwlCarousel slideSpeed={300} itemsDesktop autoPlay >
    <div><Card /></div>
    <div><Card /></div>
    <div><Card /></div>
    <div><Card /></div>
    <div><Card /></div>
    <div><Card /></div>
    <div><Card /></div>

</OwlCarousel>


{/*-------------------------Footer-----------------------*/}
                <Footer/>
            </div>
</div>
        );
    }
}

export default Home;

// how are these components used? must make sure the app knows about them. so we import them in Routes.jsx
