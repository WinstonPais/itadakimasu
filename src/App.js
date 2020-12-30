import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from './NavBar/NavBar';
import Footer from './footer/footer';
import HomeCarousel from './homecarousel/homecarousel';
import Grid from './Grid/Grid';
import { Container} from 'reactstrap';

class App extends Component {
  render(){
    return(
      <div>
        <NavBar/>
        <HomeCarousel className={classes.homeCarousel}/>
        <Container>
          <h4 className={[classes.whiteText,classes.featured].join(' ')}>&nbsp;&nbsp;Featured &nbsp;&nbsp;</h4>
          <Grid/>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default App;
