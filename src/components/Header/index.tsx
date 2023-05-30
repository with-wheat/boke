import React, { memo, useState, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import headerTitles from '@/assets/data/header_titles.json'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import Modal from '@/components/Modal'
import LoginForm from './loginForm'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const [open, setOpen] = useState(false)

  const formRef = useRef<any>(null)

  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    // 发送登录请求
    // / 通过 ref 获取 LoginForm 组件的实例
    const formInstance = formRef.current

    // 手动调用 Form 组件的 submit 方法来触发表单提交事件
    formInstance && formInstance.submit()
  }

  const handleLoginFormSubmit = (values: any) => {
    console.log('LoginForm values:', values)
    // 在这里处理表单的值，例如发送登录请求等操作
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const showItem = (item: any) =>
    item.type === 'path' ? (
      <NavLink to={item.link}>
        {item.title}
        <i className="icon sprite_01"></i>
      </NavLink>
    ) : (
      <a href={item.link} target="_blank" rel="noreferrer">
        {item.title}
      </a>
    )

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a className="logo sprite_01" href="/#">
            个人博客
          </a>
          <div className="title-list">
            {headerTitles.map((item) => (
              <div className="item" key={item.title}>
                {showItem(item)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="文章标题" prefix={<SearchOutlined />} />
          <span className="center login" onClick={showModal}>
            登录
          </span>
        </HeaderRight>
      </div>
      <div className="divider"></div>

      <Modal title="登录" open={open} handleOk={handleOk} handleCancel={handleCancel}>
        <LoginForm ref={formRef} onFinish={handleLoginFormSubmit} />
      </Modal>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
