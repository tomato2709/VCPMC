import React from 'react'
import { Modal } from 'antd'

interface IModal {
    title: string
    openModal: boolean
    handleOk: any
    handleCancel: any
    content: any
}

function CustomModal({title, openModal, handleOk, handleCancel, content}: IModal) {
  return (
    <Modal className="modal"
        title={title}
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
    >
        {content}
    </Modal>
  )
}

export default CustomModal