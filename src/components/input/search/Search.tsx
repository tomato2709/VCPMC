import { Input } from 'antd';
import './Search.css';

const { Search } = Input;

interface Iprops {
    placeholder: string,
    setValue?: any,
    name?: string
}

function InputSearch({placeholder, setValue, name}: Iprops) {
    return (
        <Search className="search" 
          style={{width: 453}}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target)} 
          name={name}
         />
    )
}

export default InputSearch