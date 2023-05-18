import { useState } from 'react'
import './Configuration.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import CustomSelect from '../../../components/select/Select';
const theme1 = require('../../../assets/theme1.png');
const theme2 = require('../../../assets/theme2.png');
const theme3 = require('../../../assets/theme3.png');
const theme4 = require('../../../assets/theme4.png');

const Configuration: React.FC = () => {
  const [ valueSelect, setValueSelect ] = useState('Tiếng Việt');
  const breadcrumb = [
    {
      key: 1,
      path: '',
      namePage: 'Cài đặt'
    },
    {
      key: 2,
      path: '',
      namePage: 'Cài đặt hệ thống'
    }
  ]

  const select = {
    items: ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Nhật', 'Tiếng Thái'],
    onChange: (value: string) => {
        setValueSelect(value)
    }
}
  return (
    <div className="configuration">
      <div>
        <Breadcrumbs crumbs={breadcrumb} />
      </div>
      <div> 
        <h3>Cài đặt cấu hình</h3>
      </div>
      <div className='content'>
        <div>
          <div className='main-theme'>
            <img src={theme1} alt="" />
          </div>
          <div className='select-theme'>
              <img src={theme2} alt="" />
              <img src={theme3} alt="" />
              <img src={theme4} alt="" />
          </div>
        </div>
        <div className='select-language'>
          <h5>Ngôn ngữ hiển thị</h5>
          <CustomSelect 
            value={valueSelect}
            items={select.items}
            onChange={select.onChange}
            width={160}
          />
        </div>
      </div>
    </div>
  )
}

export default Configuration