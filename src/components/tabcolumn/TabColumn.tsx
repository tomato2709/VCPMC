import React from 'react'
import { Tabs } from 'antd';
import './TabColumn.css'

interface ITabs {
    tabData: any[]
}

function TabColumn({tabData}: ITabs) {
  return (
    <>
        <Tabs className="tab"
            tabPosition={'left'}
            items={tabData.map((item, index) => {
                const order = index + 1;
                return {
                    label: <h5>{order}. {item.title}</h5>,
                    key: item.key,
                    children: item.content
                }
            })}
        />
    </>
  )
}

export default TabColumn