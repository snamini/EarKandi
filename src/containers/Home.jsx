// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Slider from '../components/Slider';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import DisplayCard from '../components/DisplayCard';
import FloatBtn from '../components/FloatBtn';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import searchBootstrap from '../components/searchBootstrap';
import './Home.css';
import { Row, Col} from 'react-materialize';
// then we use that component class that we just imported to make our special components
// // Home inherited a bunch of things from the component
class Home extends Component {
    render() {
      return (
        <div className = "all">
{/*------------------------------------nav bar header---------------------------------------*/}
          <Header/>
{/*-------------------------Title, Search Bar, Drop Down Genre, Followers button--------------------*/}
          <div className = "wrapper">
            <div>
              <h1 className="title">Creatington</h1>
              <Slider/>
              <Row>
                <Col s={12} className='search-bar'>
                  <searchBootstrap/>
                  {/* <SearchBar/>
                </Col>
                <Col s={2} className='genres'>
                  <Dropdown/>
                </Col>
                <Col s={1} className='followers'>
                  <Button/> */}
                </Col>
              </Row>
{/*-------------------------Card Section------------------*/}
              <Row>
                <Col s={3} className='card1'>
                  <DisplayCard/>
                </Col>
                <Col s={3} className='card2'>
                  <DisplayCard/>
                </Col>
                <Col s={3} className='card3'>
                  <DisplayCard/>
                </Col>
                <Col s={3} className='card4'>
                  <DisplayCard/>
                </Col>
                <Col s={3} className='card5'>
                  <DisplayCard/>
                </Col>
                <Col s={3} className='card6'>
                  <DisplayCard/>
                </Col>
                <Col s={3} className='card7'>
                  <DisplayCard/>
                </Col>
                <Col s={3} className='card8'>
                  <DisplayCard/>
                </Col>
              </Row>
              <Row>
                <Col s={9}></Col>
                <Col s={3}>
                  <Pagination/>
                </Col>
              </Row>
{/*-------------------------Float Button------------------*/}
              <FloatBtn/>
{/*-------------------------Footer-----------------------*/}
            </div>
          </div>
          <Footer/>
        </div>
        );
    }
}

export default Home;
