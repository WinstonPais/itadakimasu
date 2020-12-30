import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from './NavBar/NavBar';
// import RecipeCard from './RecipeCard/RecipeCard';
import Footer from './footer/footer';
import Grid from './Grid/Grid';
import { Container} from 'reactstrap';

class App extends Component {
  render(){
    return(
      <div>
        <NavBar/>
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
