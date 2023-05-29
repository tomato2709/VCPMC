import React, {useState} from 'react'
import './Cycle.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import { Radio, DatePicker, Button } from 'antd'
import Swal from 'sweetalert2'

const Cycle: React.FC = () => {
    const [value, setValue] = useState("quarter");

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 800,
      heightAuto: false,
      customClass: 'swal-height',
      showClass: {
          popup: 'animate__animated animate__fadeIn'
      },
  })

    const onChange = (e: any) => {
      setValue(e.target.value);
      localStorage.setItem("cycleValue", e.target.value);
    };
    const handleSaveCycle = (e:any) => {
      Toast.fire({
        icon: 'success',
        title: 'Lưu cài đặt chu kỳ đối soát thành công',
        background: '#727288',
        color: '#C8C8DB',
      })
    }
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
            <div className="content">
                <h4>Cài đặt chu kì đối soát</h4>
                <Radio.Group onChange={onChange} defaultValue={"quarter"} >
                    <Radio value={"quarter"}><h5>Đối soát theo quý</h5></Radio> <br />
                    {value === "quarter" ? (
                      <div className="quarter">
                        <p><b>Quý 1</b>: 01/06 - 30/07</p> <br />
                        <p><b>Quý 2</b>: 01/08 - 30/09</p> <br />
                        <p><b>Quý 3</b>: 01/10 - 30/11</p> <br />
                        <p><b>Quý 4</b>: 01/12 - 31/12</p> <br />
                    </div>
                    ) : (
                    <></>
                    )}  
                    <Radio value={"month"}><h5>Đối soát theo tháng</h5></Radio> <br />
                    {value === "month" ? (
                    <div>
                      <div>
                        <p><b>Ngày bắt đầu:</b></p>{" "}
                        <DatePicker
                          style={{ width: "200px" }}
                          className="datepicker"
                          placeholder={"dd/mm/yyyy"}
                        />
                      </div>
                      <div>
                        <p><b>Ngày kết thúc:</b></p>{" "}
                        <DatePicker
                          style={{ width: "200px" }}
                          className="datepicker"
                          placeholder={"dd/mm/yyyy"}
                        />
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </Radio.Group>
            </div>
        </div>
        <div className="button">
          <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleSaveCycle}><b>Lưu</b></Button>
        </div>
    </div>
  )
}

export default Cycle