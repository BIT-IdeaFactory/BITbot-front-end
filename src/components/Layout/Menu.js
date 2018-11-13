import React from "react";

import { Icon, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

export default () => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={["questions"]}>
    <SubMenu
      key="questions"
      title={
        <span>
          <Icon type="question-circle" />
          <span>Pytania</span>
        </span>
      }
    >
      <Menu.Item key="addquestion">
        <NavLink to="/dashboard/questions/add">Dodaj nowe pytanie</NavLink>
      </Menu.Item>
      <Menu.Item key="listquestion">
        <NavLink to="/dashboard/questions/list">Lista pytań</NavLink>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="events"
      title={
        <span>
          <Icon type="calendar" />
          <span>Eventy</span>
        </span>
      }
    >
      <Menu.Item key="addevent">
        <NavLink to="/dashboard/events/add">Dodaj nowy event</NavLink>
      </Menu.Item>
      <Menu.Item key="listevent">
        <NavLink to="/dashboard/events/list">List eventów</NavLink>
      </Menu.Item>
    </SubMenu>
  </Menu>
);
