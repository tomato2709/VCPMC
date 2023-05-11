import React from 'react'
import { Input as InputAntd } from 'antd';
import './Input.css'

interface IInputprops {
  placeholder?: string;
  width: number;
  type: string;
  disabled?: boolean;
  value?: any;
  setValue?: any,
  height?: number,
  name?: string
  require?: boolean
}

function Input({placeholder, width, height, type, disabled = false, value, require = false, setValue, name}: IInputprops) {

  return (
        <InputAntd className="input" 
          onChange={(e) => setValue(e.target)} 
          type={type} 
          style={{width: width, height: height, color: '#C8C8DB', background: '#33334D'}} 
          placeholder={placeholder} 
          disabled={disabled} 
          defaultValue={value}
          name={name}
          required={require}
        />
  )
}

export default Input