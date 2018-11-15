import React from "react";
import { withRouter } from "react-router";

import DashboardLayout from "../../components/Layout/DashboardLayout";

const DashboardIndexPage = () => (
  <DashboardLayout>
    <div>Content!!</div>
  </DashboardLayout>
);

export default withRouter(DashboardIndexPage);
