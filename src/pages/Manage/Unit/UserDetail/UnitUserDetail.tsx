import React from 'react'
import './UnitUserDetail.css'
import Breadcrumbs from '../../../../components/breadcrumbs/Breadcrumbs';
import Option from '../../../../components/option/Option';
import { SlNote } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/store';

const UnitUserDetail: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAppSelector(state => state.user)

    const optionProps = [
        {
            icon: SlNote,
            text: 'Chỉnh sửa',
            event: () => {
                navigate("edit-unit-user")
            },
            unActive: user.isAdmin ? false : true
        }
    ]

    const breadcrumbs = [
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
            path: '',
            namePage: 'Thông tin người dùng'
        }
    ]
  return (
    <div className="unit-user-detail">
        <div>
            <Breadcrumbs crumbs={breadcrumbs} />
        </div>
        <div>
            <h3>Thông tin người dùng</h3>
        </div>
        <div className='content'>
            <div>
                <span>
                    <h5>Tên người dùng:</h5>
                    <p>Nguyễn Văn A</p>
                </span>
                <span>
                    <h5>Vai trò:</h5>
                    <p>QA</p>
                </span>
                <span>
                    <h5>Email:</h5>
                    <p>nguyenvana@gmail.com</p>
                </span>
            </div>
            <div>
                <span>
                    <h5>Tên đăng nhập:</h5>
                    <p>nguyenvana@gmail.com</p>
                </span>
                <span>
                    <h5>Mật khẩu:</h5>
                    <p>●●●●●●●●</p>
                </span>
                <span>
                    <h5>Trạng thái thiết bị:</h5>
                    <p>Đã kích hoạt</p>
                </span>
            </div>
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default UnitUserDetail