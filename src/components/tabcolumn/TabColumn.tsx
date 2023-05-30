import React from 'react'
import { Tabs } from 'antd';
import './TabColumn.css'

interface TabColProps {
    tabData: any[]
}

function TabColumn({tabData}: TabColProps) {
  return (
    <>
        <Tabs className="tab"
            tabPosition={'left'}
            items={tabData.map((item, index) => {
                const order = index + 1;
                return {
                    label: <h5>{order}. {item.title}</h5>,
                    key: item.key,
                    children: <div><h5 className="manual-header">{item.title}</h5>{item.content}</div>
                }
            })}
        />
    </>
  )
}

export default TabColumn