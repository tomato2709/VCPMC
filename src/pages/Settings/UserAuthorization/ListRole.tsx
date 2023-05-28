import React from 'react'
import Option from '../../../components/option/Option'
import CustomTable from '../../../components/table/Table'
import { message } from 'antd';
import { ColumnsType } from 'antd/es/table'
import { FiUsers } from "react-icons/fi";
import { useAppSelector } from '../../../redux/store';

interface DataType {
    key: number,
    id: number,
    userGroupName: string,
    amount: number,
    role: string,
    description: string,
    del: boolean
}

const ListRole: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Tên nhóm người dùng',
            dataIndex: 'userGroupName',
            key: 'userGroupName'
        },
        {
            title: 'Số lượng người dùng',
            dataIndex: 'amount',
            key: 'amount'
        },
        {
            title: 'Vai trò',
            dataIndex: 'role',
            key: 'role'
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: '',
            dataIndex: 'update',
            key: 'update',
            render: (_, {}) => {
                return user.isAdmin ? <a>Chỉnh sửa</a> : ''
            }
        },
        {
            title: '',
            dataIndex: 'delete',
            key: 'delete',
            render: (_, {del}) => {
                return user.isAdmin ? <a>{del ? "Xóa" : ''}</a> : ''
            }
        },
    ]
    const dataSource: DataType[] = [
        {
            key: 1,
            id: 1,
            userGroupName: 'Super Admin',
            amount: 1,
            role: 'System Admin',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            del: false
        },
        {
            key: 2,
            id: 2,
            userGroupName: 'Group Admin',
            amount: 8,
            role: 'System Admin',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            del: false
        },
        {
            key: 3,
            id: 3,
            userGroupName: 'Sub - user',
            amount: 30,
            role: 'Super Admin',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            del: false
        },
        {
            key: 4,
            id: 4,
            userGroupName: 'Content manager',
            amount: 5,
            role: 'Licenses',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            del: false
        },
        {
            key: 5,
            id: 5,
            userGroupName: 'QC',
            amount: 5,
            role: 'Licenses',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            del: false
        },
        {
            key: 6,
            id: 6,
            userGroupName: 'Kế toán',
            amount: 1,
            role: 'Licenses',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            del: true
        },
    ]
    const optionProps = [
        {
            icon: FiUsers,
            text: "Thêm vai trò",
            event: () => {

            },
            unActive: user.isAdmin ? false : true
        }
    ]
  return (
    <div>
        <CustomTable columns={columns} dataSource={dataSource} heightProps={70} />
        <Option optionProps={optionProps} />
    </div>
  )
}

export default ListRole