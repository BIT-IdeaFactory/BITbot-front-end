import React from "react";
import { withRouter } from "react-router";

import { Col, Row } from "antd";

import Logo from "../components/Utils/Logo";
import WrappedLoginForm from "../components/Forms/LoginForm";

const LoginPage = () => (
  <Row type="flex" justify="center" align="middle" style={{ height: "100%" }}>
    <Col>
      <Logo />
      <WrappedLoginForm />
    </Col>
  </Row>
);

export default withRouter(LoginPage);
