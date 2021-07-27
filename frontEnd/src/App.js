import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import MainNavigation from "../src/shared/components/Navigation/MainNavigation"
import NewPlace from './places/pages/NewPlace'
import UserPlaces from "./places/pages/UserPlaces"
import User from "./users/pages/User"
import UpdatePlace from './places/pages/UpdatePlace'
import Authenticate from "./users/pages/Authenticate";
import { AuthContext } from "./shared/context/Auth-context"

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const login = useCallback(() => {
    setLoggedIn(true)
  }, [])
  const logout = useCallback(() => {
    setLoggedIn(false)
  }, [])

  let routes;
  if (isLoggedIn) {
    routes = (
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
        <Redirect to="/" />

      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/:uid/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth" exact>
          <Authenticate />
        </Route>
        <Redirect to="/auth" />

      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
