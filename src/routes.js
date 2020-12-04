import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/Login" component={Login} />
      <Route path="/Home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
