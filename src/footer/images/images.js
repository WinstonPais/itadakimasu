import React from 'react';
import pizza from './pizza.jpg';
import burger from './burger.jpeg';
import roll from './roll.jpg';
import beef from './beef.jpg';
import sushi from './sushi.jpg';
import noodles from './noodles.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
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
    <Carousel autoPlay={true} infinite={true} autoPlaySpeed={1000} responsive={responsive}>
      <img src={pizza} alt="pizza" />
      <img src={burger} alt="burger" />
      <img src={roll} alt="roll" />
      <img src={beef} alt="beef" />
      <img src={sushi} alt="sushi" />
      <img src={noodles} alt="noodles" />
    </Carousel>
  );  
}

export default Imageslist;