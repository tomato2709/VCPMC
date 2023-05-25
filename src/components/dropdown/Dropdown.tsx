import { memo } from 'react'
import './Dropdown.css'
import { DownOutlined } from '@ant-design/icons';
import Button from 'antd/es/button';
import Dropdown from 'antd/es/dropdown';
import { Space } from 'antd';

interface IDropdownProps {
    menuProps: {},
    orange?: boolean
}

function CustomDropdown({menuProps, orange}: IDropdownProps) {
  return (
    <div>
    <Space className="space">
        <Dropdown className="dropdown" menu={menuProps}>
          <Button style={orange ? {border: '1px solid #FF7506'} : {border: '1px solid #fff'}}>
              <Space>
              Tất cả
              <DownOutlined />
              </Space>
          </Button>
        </Dropdown>
    </Space>
    </div>
  )
}

export default memo(CustomDropdown)