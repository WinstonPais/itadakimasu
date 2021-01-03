import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from './NavBar/NavBar';
import Footer from './footer/footer';
import HomeCarousel from './homecarousel/homecarousel';
import Grid from './Grid/Grid';
import { Container} from 'reactstrap';
import UserProvider from './contexts/UserProvider'
import CreateRecipes from './createRecipes/createRecipes';

class App extends Component {
  render(){
    return(
        <UserProvider>
            <NavBar/>
            <HomeCarousel/>
            <div className={classes.makePositionRelative}>
              <Container className={classes.gridTopMargin}>
                <h4 className={[classes.whiteText,classes.featured].join(' ')}>&nbsp;&nbsp;Featured &nbsp;&nbsp;</h4>
                <Grid/>
              </Container>
              <CreateRecipes />
              <Footer />
            </div>
        </UserProvider>
    )
  }
}

export default App;
