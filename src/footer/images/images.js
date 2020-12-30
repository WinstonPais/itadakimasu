import React from 'react';
import pizza from './pizza.jpg';
import burger from './burger.jpeg';
import roll from './roll.jpg';
import beef from './beef.jpg';
import sushi from './sushi.jpg';
import noodles from './noodles.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './images.module.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Imageslist() {
  return(
    <Carousel infinite={true} autoPlay={true} responsive={responsive}>
      <img className={classes.imag} src={pizza} alt="pizza" />
      <img className={classes.imag} src={burger} alt="burger" />
      <img className={classes.imag} src={roll} alt="roll" />
      <img className={classes.imag} src={beef} alt="beef" />
      <img className={classes.imag} src={sushi} alt="sushi" />
      <img className={classes.imag} src={noodles} alt="noodles" />
    </Carousel>
  );  
}

export default Imageslist;