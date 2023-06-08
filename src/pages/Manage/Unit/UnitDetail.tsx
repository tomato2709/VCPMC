import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import Option from '../../../components/option/Option';
import InputSearch from '../../../components/input/search/Search';
import CustomTable from '../../../components/table/Table';
import Swal from 'sweetalert2';
import { Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { HiPlus } from "react-icons/hi";
import { FaTrashAlt, FaUserFriends } from 'react-icons/fa';
import { RxDotFilled } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom'
import { DataTypeUser } from '../../../redux/slice/unitSlice';
import { useAppSelector } from '../../../redux/store';

const UnitDetail: React.FC = () => {
    const navigate = useNavigate()
    const { user } = useAppSelector(state => state.user)

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

    const [ title ] = useState("VCPMC | Chi tiết đơn vị sử dụng");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const dataSource: DataTypeUser[] = [
    {
        key: 1,
        fullName: "Nguyễn Văn A",
        role: "QC",
        email: "nguyenvanb@gmail.com",
        userName: "nguyenvanb",
        password: "123456",
        lastUpdated: "21/04/2021",
        status: true,
    },
    {
        key: 2,
        fullName: "Nguyễn Văn A",
        role: "QA",
        email: "nguyenvanb@gmail.com",
        userName: "nguyenvanb",
        password: "123456",
        lastUpdated: "21/04/2021",
        status: true,
    },
    {
        key: 3,
        fullName: "Nguyễn Văn A",
        role: "Content Manager",
        email: "nguyenvanb@gmail.com",
        userName: "nguyenvanb",
        password: "123",
        lastUpdated: "21/04/2021",
        status: false,
    },
    ]

    const columns: ColumnsType<DataTypeUser> = [
    {
        title: 'STT',
        dataIndex: '',
        key: '',
        render: (_, {}, index) => (
            <p>{index + 1}</p>
        )
    },
    {
        title: 'Tên người dùng',
        dataIndex: 'fullName',
        key: 'fullName',
    },
    {
        title: 'Vai trò',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Tên đăng nhập',
        dataIndex: 'userName',
        key: 'userName',
    },
    {
        title: 'Cập nhật lần cuối',
        dataIndex: 'lastUpdated',
        key: 'lastUpdated',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (_, {status}) => (
            <>
                {status ? 
                <p><RxDotFilled color='lime' /> Đang kích hoạt</p> : 
                <p><RxDotFilled color='red' /> Ngừng kích hoạt</p> }
            </>
        )
    },
    {
        key: '',
        render: (_, {key} ) => (
            <Link to={`user-detail/id`}>Xem chi tiết</Link>
        )
    },
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
        path: '',
        namePage: 'Chi tiết'
    }
    ]

    const optionProps = [
    {
        icon: HiPlus,
        text: 'Thêm người dùng',
        event: () => {
            navigate("add-unit-user")
        },
        unActive: user.isAdmin ? false : true
    },
    {
        icon: FaTrashAlt,
        color: "red",
        text: 'Xóa', 
        event: () => {

        },
        unActive: user.isAdmin ? false : true
    },
    {
        icon: FaUserFriends,
        text: 'Vai trò', 
        unActive: user.isAdmin ? false : true
    },
    ]

    const rowSelection = {
        onChange: (selectedRowKeys: number, selectedRows: any, ) => {
        }
    };

  return (
    <div className="unit-detail">
        <div>
            <Breadcrumbs crumbs={breadcrumbs} />
        </div>
        <div>
            <h3>Đơn vị sử dụng - 1234</h3>
        </div>
        <div>
            <InputSearch 
                placeholder='Tên bản ghi, tên ca sĩ, tên tác giả...' 
            />
        </div>
        <div>
            <CustomTable 
                dataSource={dataSource} 
                columns={columns} 
                heightProps={65}
                rowSelection={rowSelection}
                pagination={{pageSize: 9}}
            />
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default UnitDetail