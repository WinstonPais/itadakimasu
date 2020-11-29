import React, { Component } from 'react';
import classes from './App.module.css';
import RecipeCard from './RecipeCard/RecipeCard'

class App extends Component {
  render(){
    return(
      <div>
        <RecipeCard></RecipeCard>
      </div>
    )
  }
}

export default App;
