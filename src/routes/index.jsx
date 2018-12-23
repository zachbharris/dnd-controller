import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
  </Switch>
);

export default withRouter(Routes);
