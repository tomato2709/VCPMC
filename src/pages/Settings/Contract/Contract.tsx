import React, {useState} from 'react'
import './Contract.css'
import Option from '../../../components/option/Option'
import CustomTable from '../../../components/table/Table'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import { ColumnsType } from 'antd/es/table'
import { MdDateRange } from 'react-icons/md'
import { GiNotebook } from 'react-icons/gi'
import { useAppSelector } from '../../../redux/store'

interface DataType {
  key: number,
  stt: number,
  contractType: string,
  revenue: number
}

const ManagerContract: React.FC = () => {
  const { user } = useAppSelector(state => state.user)
  const dataSource: DataType[] = [
    {
      key: 1,
      stt: 1,
      contractType: 'Trọn gói',
      revenue: 20
    },
    {
      key: 2,
      stt: 2,
      contractType: 'Giá trị bài hát/lượt phát',
      revenue: 20
    },
  ]
  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt'
    },
    {
      title: 'Loại hợp đồng',
      dataIndex: 'contractType',
      key: 'contractType'
    },
    {
      title: 'Doanh thu VCMVC/Hợp đồng (Đơn vị: %)',
      dataIndex: 'revenue',
      key: 'revenue'
    }
  ]
  const optionProps = [
    {
      icon: GiNotebook,
      text: 'Chỉnh sửa loại hợp đồng',
      event: () => {
        
      },
      unActive: user.isAdmin ? false : true
    },
    {
      icon: MdDateRange,
      text: 'Chỉnh sửa cảnh báo hết hạn',
      event: () => {
        
      },
      unActive: user.isAdmin ? false : true
    }
  ]
  const breadcrumb = [
    {
        key: 1 ,
        path: '',
        namePage: 'Cài đặt' 
    },
    {
        key: 2,
        path: '',
        namePage: 'Quản lý loại hợp đồng'
    },
]
  return (
    <div className="managerContract">
      <div>
        <Breadcrumbs crumbs={breadcrumb} />
      </div>
      <h3>Loại hợp đồng</h3>
      <div className="containerContent">
        <div>
          <CustomTable dataSource={dataSource} columns={columns} heightProps={20} />
        </div>
        <div className="warning">
            <h4>Cảnh báo hết hạn khai thác tác phẩm</h4>
            <h5>Hợp đồng được cảnh báo trước thời gian hết hạn: 365 ngày</h5>
        </div>
      </div>
      <Option optionProps={optionProps} />
    </div>
  )
}

export default ManagerContract