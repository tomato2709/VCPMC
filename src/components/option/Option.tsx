import React from 'react'
import './Option.css'

interface OptionProps {
    optionProps: OptionItems[] | any
}
interface OptionItems {
    icon: Function,
    text: string,
    event?: any,
    unActive?: boolean,
    color?: string
}

function Option({optionProps}: OptionProps) {
  return (
    <div className="option">
        {
            optionProps.map((item: OptionItems, index: number) => (
                <div key={index} onClick={item.event}>
                    <div className='icon'>
                        <item.icon 
                            color={item.color ? item.color : item.unActive ? '#3333' : '#FF7506'} 
                            size={27} 
                        />
                    </div>
                    <p>{item.text}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Option