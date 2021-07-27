import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import MainNavigation from "../src/shared/components/Navigation/MainNavigation"
import NewPlace from './places/pages/NewPlace'
import UserPlaces from "./places/pages/UserPlaces"
import User from "./users/pages/User"
import UpdatePlace from './places/pages/UpdatePlace'
import Authenticate from "./users/pages/Authenticate";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          <Route path="/:uid/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlace />
          </Route>
          <Route path="/auth" exact>
            <Authenticate />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
