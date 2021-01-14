import React, { Component, Fragment } from 'react';
import NavBar from './NavBar/NavBar';
import UserProvider from './contexts/UserProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './MainPages/Home/Home';

class App extends Component {
  render(){
    return(
      <UserProvider>
        <BrowserRouter>
          <Fragment>
            <Route path="/" component={NavBar}/>
            <Route path="/" component={Home}/>
          </Fragment>
        </BrowserRouter>
      </UserProvider>
    )
  }
}

export default App;
