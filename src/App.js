import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import DashboardPage from "./routes/DashboardPage";
import LoginPage from "./routes/LoginPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Redirect from="/" to="login" />
    </Switch>
  </BrowserRouter>
);
