import React, { useState, useEffect } from 'react'
import InputSearch from '../../../components/input/search/Search'
import CustomTable from '../../../components/table/Table'
import { Switch } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { Link } from 'react-router-dom'
import { useSearch } from '../../../hooks/useSearch'
import { useSnapshot } from '../../../hooks/useSnapshot'
import { DataTypeAuthorizedPartner, fetchAuthorizedPartnerList } from '../../../redux/slice/authorizedPartner'
import { useAppDispatch, useAppSelector } from '../../../redux/store'

const ManageAuthorizedPartner: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user)
  const { authorizedPartnerList } = useAppSelector(state => state.authorizedPartner)
  const [ authorizedPartner, setAuthorizedPartner ] = useState<DataTypeAuthorizedPartner[]>(authorizedPartnerList);
  const { snapshot } = useSnapshot('authorized-partner');
  const [ search, setSearch ] = useSearch(snapshot, 'fullName');

  useEffect(() => {
    setAuthorizedPartner(search)
  }, [search])

  useEffect(() => {
    dispatch(fetchAuthorizedPartnerList())
    setAuthorizedPartner(snapshot)
  }, [snapshot])

  const handleChangeSetSearchValue = (e: any) => {
    const value = e.value;
    setSearch(value)
  }
  
  const dataSource: DataTypeAuthorizedPartner[] = authorizedPartner
  
  const columns: ColumnsType<DataTypeAuthorizedPartner> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, {}, index ) => (
        <p>{index + 1}</p>
      )
    },
    {
      title: 'Họ tên',
      dataIndex: 'fullName',
      key: 'fullName'
    },
    {
      title: 'Tên đăng nhập',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Ngày hết hạn',
      dataIndex: 'expiryDate',
      key: 'expiryDate'
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (_, {status}) => {
        return <>
          {status ? 
            <p><Switch defaultChecked /> Đang kích hoạt</p> : 
            <p><Switch /> Ngừng kích hoạt</p> }
        </>
      }
    },
    {
      title: '',
      dataIndex: 'update',
      key: 'update',
      render: (_, {id}) => {
        return <>
          {user.isAdmin ? <Link to={`detail/${id}`}>Cập nhật</Link> : ''}
        </>
      }
    }
  ]
  
  return (
    <div className="authorized">
        <h3>Danh sách đối tác ủy quyền</h3>
        <div>
        <InputSearch 
            placeholder='Họ tên, tên đăng nhập, Email...' 
            setValue={handleChangeSetSearchValue}
        />
        </div>
        <div>
        <CustomTable 
            columns={columns} 
            dataSource={dataSource} 
            heightProps={70} 
            pagination={{pageSize: 9}}
        />
        </div>
    </div>
  )
}

export default ManageAuthorizedPartner