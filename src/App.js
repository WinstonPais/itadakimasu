import React, { Component } from 'react';
// import classes from './App.module.css';
import RecipeCard from './RecipeCard/RecipeCard'
import Footer from './footer/footer';

class App extends Component {
  render(){
    return(
      <div>
        <RecipeCard/>
        <Footer />
      </div>
    )
  }
}

export default App;
