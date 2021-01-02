import React from 'react';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './images.module.css';

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
    <Carousel infinite={true} autoPlay={true} responsive={responsive}>
      {[img1,img2,img3,img4,img5,img6].map( (item,index) =>{
        return <img className={classes.imag} key={item+index} src={item} alt={item} />
      })}
    </Carousel>
  );  
}

export default Imageslist;