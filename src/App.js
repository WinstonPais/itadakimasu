import React, { Component } from 'react';
// import classes from './App.module.css';
import RecipeCard from './RecipeCard/RecipeCard';
import NavBar from './NavBar/NavBar';

class App extends Component {
  render(){
    return(
      <div>
        <NavBar/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
      </div>
    )
  }
}

export default App;
