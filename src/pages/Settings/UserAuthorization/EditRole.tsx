import React, { useEffect, useState } from 'react'
import './Role.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Input from '../../../components/input/Input'
import Swal from 'sweetalert2'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const EditRole: React.FC = () => {
    const navigate = useNavigate();
    const [ title ] = useState("VCPMC | Cập nhật vai trò người dùng");

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

      const handleUpdateRole = (e : any) => {
        navigate('../../user-authorization')
        Toast.fire({
            icon: 'success',
            title: 'Chỉnh sửa vai trò thành công!',
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
          namePage: 'Cập nhật'
        }
      ]

  return (
    <>
        <div className="role-info">
            <div>
                <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <div>
                <h3>Cập nhật vai trò người dùng</h3>
            </div>
            <div className='content'>
                <div>
                    <span>
                        <h5>Tên vai trò: </h5>
                        <Input 
                            type='text' 
                            width={300} 
                            name="displayName"
                            value="Group Admin"
                        />
                    </span>
                    <span>
                        <h5>Mô tả: </h5>
                        <textarea 
                            cols={37} rows={6} 
                            name='desc'
                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        ></textarea>
                    </span>
                </div>
            </div>
            <div className='button'>
                <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => navigate('../../user-authorization')}><b>Hủy</b></Button>
                <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleUpdateRole}><b>Lưu</b></Button>
            </div>
        </div>
    </>
  )
}

export default EditRole