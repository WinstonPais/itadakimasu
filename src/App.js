import React, { Component } from 'react';
// import classes from './App.module.css';
import NavBar from './NavBar/NavBar';
import RecipeCard from './RecipeCard/RecipeCard';
import Footer from './footer/footer';

class App extends Component {
  render(){
    return(
      <div>
        <NavBar/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <Footer />
      </div>
    )
  }
}

export default App;
