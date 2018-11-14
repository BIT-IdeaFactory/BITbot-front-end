import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Button, Row, List } from "antd";

import DashboardLayout from "../../../components/Layout/DashboardLayout";

class DashboardEventsListPage extends Component {
  state = {
    events: [
      {
        id: "1234",
        question: "Czy placki są dobre?",
        answer: "Lubię placki!"
      },
      {
        id: "1235",
        question: "Najlepszy wydział na AGH?",
        answer: "WFiIS <3"
      }
    ]
  };

  render() {
    const { events } = this.state;
    return (
      <DashboardLayout>
        <Row>
          <NavLink to="/dashboard/events/add">
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              style={{ float: "right" }}
            />
          </NavLink>
        </Row>
        <Row>
          {events.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={events}
              renderItem={item => (
                <List.Item
                  actions={[
                    <NavLink to={`/dashboard/events/edit/${item.id}`}>
                      <Button type="primary" shape="circle" icon="edit" />
                    </NavLink>,
                    <NavLink to={`/dashboard/events/delete/${item.id}`}>
                      <Button type="primary" shape="circle" icon="delete" />
                    </NavLink>
                  ]}
                >
                  <List.Item.Meta
                    title={item.question}
                    description={item.answer}
                  />
                </List.Item>
              )}
            />
          ) : (
            <p>Brak pytań w bazie...</p>
          )}
        </Row>
      </DashboardLayout>
    );
  }
}

export default withRouter(DashboardEventsListPage);
