// importing the component class from the react library
import React, { Component } from 'react';

// then we use that component class that we just imported to make our special components
// // portfolio inherited a bunch of things from the component
class Portfolio extends Component {
  render(){
    return <h1>  portfolio page </h1>;
  }
}

export default Portfolio;

// how are these components used? must make sure the app knows about them. so we import them in Routes.jsx
