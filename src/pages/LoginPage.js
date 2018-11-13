import React from "react";
import { withRouter } from "react-router";

import WrappedLoginForm from "../components/LoginPanel/LoginForm";
const LoginPage = () => <WrappedLoginForm />;

export default withRouter(LoginPage);
