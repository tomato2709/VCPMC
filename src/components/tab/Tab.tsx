import React, { useState } from 'react'
import './Tab.css'

interface IButton {
    id: number,
    text: string
}

interface Iitem {
    id: number,
    component: any
}

interface ITabProps {
    buttons: IButton[],
    items: Iitem[]
}

function CustomTab({buttons, items} :ITabProps) {
    const [toggleState, setToggleState] = useState(1);

  return (
    <div className="tabs">
        <div className='blockTabs'>
            {buttons.map(item => (
                <button key={item.id} className={toggleState === item.id ? 'active-tab' : ''} onClick={() => setToggleState(item.id)}>{item.text}</button>
            ))}
        </div>
        <div className='contentTabs'>
            {items.map(item => {
                const Page = item.component;
                return <div key={item.id} className={toggleState === item.id ? 'activeContent' : 'content'} >
                    <Page />
                </div>
            })}
        </div>
    </div>
  )
}

export default CustomTab