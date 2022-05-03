import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { Form, Input, Button, message, notification } from "antd";
import "./login.css";

const LoginUser = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    loginHandler(values);
    form.resetFields();
    navigate("/");
    openNotification(values.email);
  };

  const onFinishFailed = (errorInfo) => {
    if (errorInfo) message.error(`bad data`);
  };

  const loginHandler = async (values) => {
    try {
      await axios
        .post(`http://127.0.0.1:3001/auth/login`, values, {
          headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            "Content-Type": "application/json",
          },
        })
        .then((responce) =>
          login(
            responce.data.token.accessToken,
            responce.data.id,
            responce.data.email
          )
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_container">
      <div>
        <h2>Sign in</h2>
      </div>
      <div>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            values: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 13,
              span: 10,
            }}
          >
            <Button type="primary" shape="round" htmlType="submit">
              login
            </Button>
            <Button type="link" href="/">
              Main page
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div></div>
    </div>
  );
};

export default LoginUser;

const openNotification = (email) => {
  notification.open({
    description: `Привет ${email}`,
  });
};
