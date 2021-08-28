import React from "react";
import Login from "../Login";
import Home from "../Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
