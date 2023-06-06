import React, { useState, useEffect } from 'react'
import './EditUser.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Input from '../../../components/input/Input'
import Swal from 'sweetalert2'
import { Button, Typography, Radio } from 'antd'
import { useNavigate } from 'react-router-dom'

const AddUser: React.FC = () => {
    const navigate = useNavigate();
    const [ title ] = useState("VCPMC | Thêm người dùng");

    useEffect(() => {
        document.title = title;
    }, [title]);

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

      const handleAddUser = (e : any) => {
        navigate('../../user-authorization')
        Toast.fire({
            icon: 'success',
            title: 'Thêm người dùng thành công!',
            background: '#727288',
            color: '#C8C8DB',
        })
      }
    
    const breadcrumbs = [
        {
          key: 1,
          path: '',
          namePage: 'Cài đặt'
        },
        {
          key: 2,
          path: '../user-authorization',
          namePage: 'Phân quyền người dùng'
        },
        {
          key: 3,
          path: '',
          namePage: 'Thêm người dùng'
        }
      ]

  return (
    <>
        <div className="edit-user-info">
            <div>
                <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <div>
                <h3>Thêm nguời dùng mới</h3>
            </div>
            <div className='content'>
                <div>
                    <span>
                        <h5>Tên người dùng: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={300} 
                            name="displayName"
                        />
                    </span>
                    <span>
                        <h5>Số điện thoại: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={300}  
                            name="phone"
                        />
                    </span>
                    <span>
                        <h5>Ngày hết hạn: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={200}
                            name="expiryDate"
                        />
                    </span>
                    <span>
                        <h5>Vai trò: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input type='text' width={300} />
                    </span>
                    <span>
                        <Typography style={{color: '#C8C8DB'}}><b style={{color: '#FF0000'}}>*</b> là những trường thông tin bắt buộc</Typography>
                    </span>
                </div>
                <div>
                    <span>
                        <h5>Email: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text'
                            width={300}
                            name="userName"
                        />
                    </span>
                    <span>
                        <h5>Tên đăng nhập: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text'
                            width={300} 
                            name="userName"
                        />
                    </span> 
                    <span>
                        <h5>Mật khẩu: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='password' 
                            width={300} 
                        />
                    </span>
                    <span>
                        <h5>Trạng thái: <i style={{color: '#FF0000'}}>*</i></h5>
                        <div>
                            <form action="">
                                <input 
                                    type="radio" 
                                    value="person" 
                                    name="authorizedPerson" 
                                    id='person'
                                    checked={false}
                                />
                                <label htmlFor="person">Đang hoạt động</label>
                                <input 
                                    type="radio" 
                                    value="organization" 
                                    name="authorizedPerson" 
                                    id='organization'
                                    checked={false}
                                /> 
                                <label htmlFor="organization">Ngừng hoạt động</label>
                            </form>
                        </div>
                    </span>
                </div>
            </div>
            <div className='button'>
                <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => navigate('../../user-authorization')}><b>Hủy</b></Button>
                <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleAddUser}><b>Lưu</b></Button>
            </div>
        </div>
    </>
  )
}

export default AddUser