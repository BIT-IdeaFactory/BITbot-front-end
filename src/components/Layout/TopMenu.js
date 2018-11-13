import React, { Component } from "react";

import { Avatar, Menu } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

const StyledAvatar = styled(Avatar)`
  margin-left: 5px;
`;

export default class TopMenu extends Component {
  state = {
    current: ""
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ float: "right" }}
      >
        <SubMenu
          title={
            <span>
              Witaj, User <StyledAvatar>USER</StyledAvatar>
            </span>
          }
        >
          <Menu.Item>
            <NavLink to="/logout">Wyloguj</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
