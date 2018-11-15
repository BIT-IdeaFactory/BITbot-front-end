import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import DashboardIndexPage from "./pages/Dashboard/DashboardIndexPage";
import DashboardEventsListPage from "./pages/Dashboard/Events/DashboardEventsListPage";

import LoginPage from "./pages/LoginPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />

      <Route exact path="/dashboard" component={DashboardIndexPage} />

      <Route
        exact
        path="/dashboard/events/list"
        component={DashboardEventsListPage}
      />
      <Route path="/dashboard/events/add" />
      <Route path="/dashboard/events/edit/:eventId" />
      <Route path="/dashboard/events/delete/:eventId" />

      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);
