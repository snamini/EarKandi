// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

// then we use that component class that we just imported to make our special components
// // Home inherited a bunch of things from the component
class Home extends Component {
    render() {
        return (
            <div>
{/*-------------------------Header------------------------*/}
                <Header/>
{/*-------------------------Page Content------------------*/}
                <div className="container">
{/*-------------------------Jumbotron---------------------*/}
                    <div>
                        <h1>Mimps</h1>
                        <h5>
                            Music from the Truth
                        </h5>
{/*-------------------------Search Bar--------------------*/}
                        <form>
                            <label>Search A Genre</label>
                            <input></input>
                        </form>
                    </div>
{/*-------------------------Card Section------------------*/}
                    <div className="row">
                        <div className="col s3">
                            <Card/>
                        </div>
                        <div className="col s3">
                            <Card/>
                        </div>
                        <div className="col s3">
                            <Card/>
                        </div>
                        <div className="col s3">
                            <Card/>
                        </div>
                        <div className="col s3">
                            <Card/>
                        </div>
                        <div className="col s3">
                            <Card/>
                        </div>
                        <div className="col s3">
                            <Card/>
                        </div>
                        <div className="col s3">
                            <Card/>
                        </div>
                    </div>
                </div>
{/*-------------------------Footer-----------------------*/}
                <Footer/>
            </div>
        );
    }
}

export default Home;

// how are these components used? must make sure the app knows about them. so we import them in Routes.jsx
