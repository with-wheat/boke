import React, { forwardRef } from 'react'
import { Form, Input } from 'antd'

interface propsType {
  onFinish: (val: any) => void
}

const LoginForm: React.ForwardRefRenderFunction<any, propsType> = ({ onFinish }, ref) => {
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
        label="name"
        name="name"
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

export default forwardRef(LoginForm)
