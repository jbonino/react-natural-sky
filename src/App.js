import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NotFound from "./components/NotFound/NotFound";
import Dashboard from "./containers/Dashboard/Dashboard";
import NaturalSky from "./containers/NaturalSky/NaturalSky";

import classes from "./App.scss";
 
class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <Switch>
          <Route path={"/dashboard"} component={Dashboard} />
          <Route path={"/"} exact component={NaturalSky} />
          <Route path={"/not-found"} exact component={NotFound} />
          <Redirect from={"/"} to={"/not-found"} />
        </Switch>
      </div>
    );
  }
}

export default App;
