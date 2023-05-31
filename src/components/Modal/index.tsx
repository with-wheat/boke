import { Modal } from 'antd'
import React, { ReactNode, useState } from 'react'

interface propTypes {
  children: ReactNode
  title: string
  open: boolean
  confirmLoading: boolean
  handleOk: () => void
  handleCancel: () => void
}

const ModalPage: React.FC<propTypes> = (prop: propTypes) => {
  const { title, children, open, handleOk, handleCancel, confirmLoading } = prop

  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={() => {
          handleOk()
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  )
}

export default ModalPage
