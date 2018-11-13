import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);
