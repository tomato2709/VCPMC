import React, { useEffect, useState } from 'react'
import './EditUnitUserDetail.css'
import Swal from 'sweetalert2';
import Breadcrumbs from '../../../../components/breadcrumbs/Breadcrumbs';
import Input from '../../../../components/input/Input';
import { Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom'

const EditUnitUserDetail: React.FC = () => {
    const navigate = useNavigate();
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
    const [ title ] = useState("VCPMC | Chỉnh sửa thông tin người dùng");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const handleUpdateUnitUser = (e: any) => {
        Toast.fire({
            icon: 'success',
            title: 'Chỉnh sửa thành công!',
            background: '#727288',
            color: '#C8C8DB',
        })
        navigate("../manage-unit/detail/id/")
    }

    const breadcrumb = [
        {
            key: 1 ,
            path: '',
            namePage: 'Quản lý' 
        },
        {
            key: 2,
            path: '../manage-unit',
            namePage: 'Đơn vị sử dụng'
        },
        {
            key: 3,
            path: '../manage-unit/detail/id',
            namePage: 'Chi tiết'
        },
        {
            key: 4,
            path: '../manage-unit/detail/id/user-detail/id',
            namePage: 'Thông tin người dùng'
        },
        {
            key: 5 ,
            path: '',
            namePage: 'Chỉnh sửa thông tin' 
        },
    ]

      
  return (
    <div className="edit-unit-user">
        <div>
            <Breadcrumbs crumbs={breadcrumb} />
        </div>
        <div>
            <h3>Thêm người dùng</h3>
        </div>
        <div className='content'>
            <div>
                <span>
                    <h5>Tên người dùng<i style={{color: '#FF0000'}}>*</i></h5>
                    <Input 
                        type='text' 
                        width={300} 
                        value="Nguyễn Văn A"
                        name="fullName"
                    />
                </span>
                <span>
                    <h5>Email<i>*</i></h5>
                    <Input 
                        type='text' 
                        width={300} 
                        value="nguyenvana@gmail.com"
                        name="email"
                    />
                </span>
                <span>
                    <h5>Vai trò<i>*</i></h5>
                    <Select className="select-wrap"
                    options={[
                      {
                        value: "qa",
                        label: "QA",
                      },
                      {
                        value: "qc",
                        label: "QC",
                      },
                      {
                        value: "superadmin",
                        label: "Super Admin",
                      },
                      {
                        value: "groupadmin",
                        label: "Group Admin",
                      },
                      {
                        value: "subuser",
                        label: "Sub-user",
                      },
                      {
                        value: "contentmanager",
                        label: "Content Manager",
                      },
                    ]}
                    style={{ width: 200 }}
                    defaultValue="qa"
                  ></Select>
                </span>
            </div>
            <div>
                <span>
                    <h5>Tên đăng nhập<i>*</i></h5>
                    <Input 
                        type='text'
                        width={300} 
                        value="nguyenvana@gmail.com"
                        name="userName"
                    />
                </span>
                <span>
                    <h5>Mật khẩu<i>*</i></h5>
                    <Input 
                        type='password' 
                        width={300} 
                        value="12345678"
                        name="password"
                    />
                </span>
                <span>
                    <h5>Nhập lại mật khẩu<i>*</i></h5>
                    <Input 
                        type='password' 
                        width={300} 
                        value="12345678"
                        name="password"
                    />
                </span>
            </div>
        </div>
        <div className='button'>
            <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => navigate('../manage-unit/detail/id/user-detail/id')}><b>Hủy</b></Button>
            <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleUpdateUnitUser}><b>Lưu</b></Button>
        </div>
    </div>
  )
}

export default EditUnitUserDetail