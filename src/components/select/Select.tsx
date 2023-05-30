import React from 'react'
import './Select.css'
import { Select } from 'antd'

interface ISelect {
    onChange?: any
    items: any
    value: any
    width?: number
}

function CustomSelect({onChange, items, value, width = 120}: ISelect) {
  return (
    <Select className="select"
        style={{ width: width }}
        onChange={onChange}
        options={items.map((item: any) => ({ label: item, value: item }))}
        value={value}
    />
  )
}

export default CustomSelect