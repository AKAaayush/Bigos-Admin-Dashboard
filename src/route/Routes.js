import React from "react";
import Login from "../Login";
import Home from "../Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
