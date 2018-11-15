import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button, Checkbox, Row } from "antd";
import Logo from "../Utils/Logo";
import Center from "../Utils/Center";
const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Center>
        <Logo />
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{
            maxWidth: "300px",
            padding: "30px",
            paddingBottom: 0,
            border: "1px solid lightgray",
            borderRadius: "7px"
          }}
        >
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "Podaj login" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Login"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Podaj hasło" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Hasło"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Zapamiętaj mnie</Checkbox>)}
            <a className="login-form-forgot" href="/">
              Zapomnij hasło
            </a>
            <Row
              type="flex"
              align="middle"
              style={{
                marginTop: "15px",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: "150px"
                }}
              >
                Zaloguj się
              </Button>
            </Row>
          </FormItem>
        </Form>
      </Center>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    password: PropTypes.string,
    remember: PropTypes.bool,
    userName: PropTypes.string
  })
};

LoginForm.defaultProps = {
  form: {
    getFieldDecorator: "",
    password: "",
    remember: "",
    userName: ""
  }
};

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;
