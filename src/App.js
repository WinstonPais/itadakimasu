import React, { Component, Fragment } from 'react';
import NavBar from './NavBar/NavBar';
import UserProvider from './contexts/UserProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './MainPages/Home/Home';
import PageNotFound from './MainPages/PageNotFound/PageNotFound';
import RecipeDetailsPage from './MainPages/RecipeDetailsPage/RecipeDetailsPage';

class App extends Component {
  render(){
    return(
      <UserProvider>
        <BrowserRouter>
          <Fragment>
            <Route path="/" component={NavBar}/>
            <Switch>
              <Route path="/itadakimasu" component={Home} exact />
              <Route path="/recipe" component={RecipeDetailsPage} />
              <Route component={PageNotFound} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </UserProvider>
    )
  }
}

export default App;
