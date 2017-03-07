// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

// then we use that component class that we just imported to make our special components
// // Home inherited a bunch of things from the component
class Home extends Component {
  render(){
    return (<div>
    <Header/>
    <div>

      {/* JUMBOTRON */}
      <div>
        <h1>Be there. Live through your music. Beats Me is a bleh bleh bleh.</h1>
        <form>
          <label>Search</label>
          <input></input>
        </form>
      </div>

      <hr />


      {/* BODY WITH CARDS */}
      <row>
        <Card className="col s3"/>
        <Card className="col s3"/>
        <Card className="col s3"/>
      </row>

    </div>
    <Footer/>
  </div> )
  }
}

export default Home;

// how are these components used? must make sure the app knows about them. so we import them in Routes.jsx
