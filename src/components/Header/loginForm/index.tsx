import React, { RefObject } from 'react'
import { Form, Input } from 'antd'

interface propsType {
  onFinish: (val: any) => void
  ref: RefObject<any>
}

const LoginForm: React.FC<propsType> = ({ ref, onFinish }) => {
  return (
    <Form
      ref={ref}
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  )
}

export default LoginForm
