import React, { Component } from "react";

import { Layout } from "antd";
import PropTypes from "prop-types";

import Logo from "../Logo";
import Menu from "./Menu";
import TopMenu from "./TopMenu";
import Trigger from "../Trigger";

const { Header, Footer, Sider, Content } = Layout;

class DashboardLayout extends Component {
  isMobile = window.innerWidth <= 500;

  state = {
    collapsed: this.isMobile
  };

  toggle = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Logo />
          <Menu />
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              lineHeight: "48px",
              height: "48px"
            }}
          >
            <Trigger
              className="trigger"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <TopMenu />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BitBot ©2018 Created by Idea Factory
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

DashboardLayout.propTypes = {
  children: PropTypes.func
};

DashboardLayout.defaultProps = {
  children: ""
};

export default DashboardLayout;
