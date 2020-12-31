import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import classes from './HomeCarousel.module.css';

class HomeCarousel extends Component {
  render() {
      return (
          <Carousel infiniteLoop={true} className={classes.homeCarousel} showArrows={true} showStatus={false} autoPlay={true} showThumbs={false}>
              <div>
                  <img src={image1} alt=""/>
              </div>
              <div>
                  <img src={image2} alt=""/>
              </div>
              <div>
                  <img src={image3} alt=""/>
              </div>
          </Carousel>
      );
  }
}

export default HomeCarousel;