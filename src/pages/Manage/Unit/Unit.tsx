import React, { useState, useEffect } from 'react'
import Option from '../../../components/option/Option'
import InputSearch from '../../../components/input/search/Search'
import CustomTable from '../../../components/table/Table'
import { Modal, Switch } from 'antd'
import Swal from 'sweetalert2'
import { ColumnsType } from 'antd/es/table'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { DataTypeUnit, fetchUnit } from '../../../redux/slice/unitSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { useSnapshot } from '../../../hooks/useSnapshot'
import { useSearch } from '../../../hooks/useSearch'

const { confirm } = Modal;

const ManageUnit: React.FC = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.user)
    const [ removeUnit, setRemoveUnit ] = useState<DataTypeUnit[]>([])
    const { snapshot } = useSnapshot('unit');
    const [ search, setSearch ] = useSearch(snapshot, 'adminAccountName');
    const [ listUnit, setListUnit ] = useState<DataTypeUnit[]>(snapshot)
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

    useEffect(() => {
        setListUnit(search)
    }, [search])

    useEffect(() => {
      dispatch(fetchUnit())
      setListUnit(snapshot)
    }, [snapshot])


    const handleChangeSetSearchValue = (e: any) => {
        const value = e.value;
        setSearch(value)
    }

    const handleRemoveDevice = () => {
        if(removeUnit.length) {

            confirm({
                title: 'Xóa thiết bị',
                icon: <ExclamationCircleOutlined />,
                content: <p>Bạn có chắc chắn muốn xoá các thiết bị này? Hành động này không thể hoàn tác.</p>,
                onOk() {
                    removeUnit.forEach(async (item)   => {
                        const docRef = doc(db, 'unit-used', `${item.id}`)
                        await deleteDoc(docRef)
                    })
                },
                onCancel() {
                  console.log('Cancel');
                },
              });

         return
        }
        Toast.fire({
            icon: 'warning',
            title: 'Chưa chọn đơn vị sử dụng',
            background: '#727288',
            color: '#C8C8DB'
        })
    }

    const rowSelection = {
        onChange: (selectedRowKeys: number, selectedRows: any, ) => {
            setRemoveUnit(selectedRows)
        }
    };
    
    const dataSource: DataTypeUnit[] = listUnit
    const columns: ColumnsType<DataTypeUnit> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, {}, index) => (
                <p>{index + 1}</p>
            )
        },
        {
            title: 'Tên tài khoản quản trị',
            dataIndex: 'adminAccountName',
            key: 'adminAccountName'
        },
        {
            title: 'Số hợp đồng',
            dataIndex: 'contractID',
            key: 'contractID'
        },
        {
            title: 'Admin',
            dataIndex: 'admin',
            key: 'admin',
            render: (_, {admin}) => {
                return <p>Admin {admin}</p>
            }
        },
        {
            title: 'Người dùng',
            dataIndex: 'userAmount',
            key: 'userAmount',
            render: (_, {listUser}) => {
                return <p>{listUser.length}</p>
            }
        },
        {
            title: 'Thiết bị được chỉ định',
            dataIndex: 'assignedDevice',
            key: 'assignedDevice'
        },
        {
            title: 'Ngày hết hạn',
            dataIndex: 'expiryDate',
            key: 'expiryDate'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, {status}) => (
                <>
                  {status ? 
                    <p><Switch defaultChecked /> Đang kích hoạt</p> : 
                    <p><Switch /> Ngừng kích hoạt</p> }
                </>
            )
        },
        {
            render: (_, {id}) => (
                <Link to={`detail/id`}>Xem chi tiết</Link> 
            )
        },
    ]
    
    const optionProps = [
        {
            icon: FaTimes,
            text: 'Xóa', 
            event: () => {
                handleRemoveDevice()
            },
            unActive: user.isAdmin ? removeUnit.length ? false : true : true
        }
    ]
  return (
    <div className="unit">
        <h3>Đơn vị sử dụng</h3>
        <div>
            <InputSearch 
                placeholder='Tên khoản giá trị, số hợp đồng,...' 
                setValue={handleChangeSetSearchValue}    
            />
        </div>
        <div>
            <CustomTable 
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={dataSource} 
                heightProps={70} 
                pagination={{pageSize: 9}}
            />
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default ManageUnit