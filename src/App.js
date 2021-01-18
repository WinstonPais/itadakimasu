import React, { Component, Fragment } from 'react';
import NavBar from './NavBar/NavBar';
import UserProvider from './contexts/UserProvider';
import Home from './MainPages/Home/Home';
import PageNotFound from './MainPages/PageNotFound/PageNotFound';
import RecipeDetailsPage from './MainPages/RecipeDetailsPage/RecipeDetailsPage';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <UserProvider>
        {/* <BrowserRouter>
          <Fragment>
            <Route path="/" component={NavBar}/>
            <Switch>
              <Route path="/itadakimasu" component={Home} exact />
              <Route path="/recipe" component={RecipeDetailsPage} />
              <Route component={PageNotFound} />
            </Switch>
          </Fragment>
        </BrowserRouter> */}
        <>
        <Router history={history}>
            <Switch >
              <Route path="*" component={NavBar}/>
            </Switch>
        </Router>
        </>
        <>
        <Router history={history}>
            <Switch >
              <Route path="/itadakimasu" component={Home} exact />
              <Route path="/recipe/:id" component={RecipeDetailsPage} />
              <Route component={PageNotFound} />
            </Switch>
        </Router>
        </>
       
      </UserProvider>
    )
  }
}

export default App;
