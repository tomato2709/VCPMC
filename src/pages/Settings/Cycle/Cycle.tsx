import React from 'react'
import { Radio } from 'antd'
import './Cycle.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'

const Cycle: React.FC = () => {
    
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
  return (
    <div className="cycle">
        <Breadcrumbs crumbs={breadcrumb} />
        <h3>Cài đặt hệ thống</h3>
        <div className="container">
            <div className="contentPage">
                <h4>Cài đặt chu kì đối soát</h4>
                <Radio.Group>
                    <Radio value={"quarter"}><h5>Đối soát theo quý</h5></Radio> <br />
                    <div className="quarter">
                        <p>Quý 1: 01/06 - 30/07</p> <br />
                        <p>Quý 2: 01/08 - 30/09</p> <br />
                        <p>Quý 3: 01/10 - 30/11</p> <br />
                        <p>Quý 4: 01/12 - 31/12</p> <br />
                    </div>
                    <Radio value={"month"}><h5>Đối soát theo tháng</h5></Radio>
                </Radio.Group>
            </div>
        </div>
    </div>
  )
}

export default Cycle