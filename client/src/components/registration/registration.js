import React from "react";
import { useNavigate } from "react-router-dom";
import { registration } from "../../axios/index";
import { Form, Input, Button, DatePicker, notification } from "antd";

const RegistrationUser = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    registration(values);
    form.resetFields();
    setTimeout(() => {
      navigate("/");
      openNotification(values.email);
    }, 1500);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select date!",
      },
    ],
  };

  return (
    <div className="form_container">
      <div>
        <h2>Sign up</h2>
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
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name={"username"}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"lastname"}
            label="Lastname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="date-picker" label="DatePicker" {...config}>
            <DatePicker />
          </Form.Item>
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
              Create Account
            </Button>
            <Button type="link" href="/">
              Main page
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationUser;

const openNotification = (email) => {
  notification.open({
    message: "Пользователь добавлен",
    description: `Подтвердите email ${email}`,
  });
};
