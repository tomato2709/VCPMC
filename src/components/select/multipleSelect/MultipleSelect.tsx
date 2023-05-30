import React from 'react'
import './MultipleSelect.css'

interface MultipleSelectProps {
    selectItems: string[]
}

function MultipleSelect({selectItems} :MultipleSelectProps) {
  return (
    <>
        {selectItems && selectItems.map((item, index) => (
            <span className="multiple-select" key={item}>
                {index > 4 ? '...' : item}
            </span>
        ))}
    </>
  )
}

export default MultipleSelect