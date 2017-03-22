import React from 'react';
import {Slider, Slide} from 'react-materialize';


export default class MySlider extends React.Component {

  render(){
    return (
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

    );
  }
}
