import React from "react";
import { withRouter } from "react-router";

import WrappedLoginForm from "../components/Forms/LoginForm";

const LoginPage = () => <WrappedLoginForm />;

export default withRouter(LoginPage);
