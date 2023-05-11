import React from 'react'
import './Feature.css'

interface IFeature {
    featureProps: IItems[] | any
}
interface IItems {
    icon: Function,
    text: string,
    event?: any,
    unActive?: boolean,
    color?: string
}

function Feature( {featureProps}: IFeature) {
  return (
    <div className="feature">
        {
            featureProps.map((item: IItems, index: number) => (
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

export default Feature