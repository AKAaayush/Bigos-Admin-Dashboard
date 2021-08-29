import React from "react";
import Login from "../container/Login";
import Home from "../container/Home";
import Product from "../container/Product";
import Events from "../container/Events";
import Users from "../container/Users";
import Profile from "../container/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/events" component={Events} />
          <Route path="/users" component={Users} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
