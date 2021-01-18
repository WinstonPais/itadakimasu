import React, { Component, Fragment } from 'react';
import NavBar from './NavBar/NavBar';
import UserProvider from './contexts/UserProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './MainPages/Home/Home';
import AllRecipesPage from './MainPages/AllRecipes/AllRecipes';
import PageNotFound from './MainPages/PageNotFound/PageNotFound';

class App extends Component {
  render(){
    return(
      <UserProvider>
        <BrowserRouter>
          <Fragment>
            <Route path="/" component={NavBar}/>
            <Switch>
              <Route path="/itadakimasu" component={Home} exact />
              <Route path="/itadakimasu/recipe" component={AllRecipesPage} />
              <Route component={PageNotFound} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </UserProvider>
    )
  }
}

export default App;
