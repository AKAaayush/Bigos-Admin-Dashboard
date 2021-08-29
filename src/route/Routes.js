import React from "react";
import Login from "../container/Login";
import Home from "../container/Home";
import Product from "../container/Product";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/product" component={Product} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
