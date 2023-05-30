import React from 'react'
import dayjs from 'dayjs';
import './History.css'
import InputSearch from '../../../components/input/search/Search';
import Option from '../../../components/option/Option';
import CustomTable from '../../../components/table/Table';
import { message, DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { ColumnsType } from 'antd/es/table';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store';

interface RevenueHistoryDataType {
  key: number,
  stt: number,
  contractID: string,
  company: string,
  expiryDate: string,
  contractType: string,
  playCount: number,
  totalRevenue: number,
  undistributedRevenue: string | number,
  closingDate: string,
  detail: string
}

const RevenueHistory: React.FC = () => {
  const { user } = useAppSelector(state => state.user)

  const disabledDateProps: RangePickerProps['disabledDate'] = (current) => {
    return current && current < dayjs().endOf('day');
  };

  const dataSource: RevenueHistoryDataType[] = [
    {
      key: 1,
      stt: 1,
      contractID: 'HĐ123',
      company: 'Cty TNHH TM DV ABCEDEF',
      expiryDate: '10/07/2020 - 10/07/2021 ',
      contractType: 'Trọn gói',
      playCount: 365,
      totalRevenue: 365000000,
      undistributedRevenue: 1000000,
      closingDate: '10/07/2021', 
      detail: 'Xem chi tiết'
    },
    {
      key: 2,
      stt: 2,
      contractID: 'HĐ123',
      company: 'Cty TNHH TM DV ABCEDEF',
      expiryDate: '10/07/2020 - 10/07/2021 ',
      contractType: 'Trọn gói',
      playCount: 365,
      totalRevenue: 365000000,
      undistributedRevenue: 0,
      closingDate: '10/07/2021', 
      detail: 'Xem chi tiết'
    },
    {
      key: 3,
      stt: 3,
      contractID: 'HĐ123',
      company: 'Cty TNHH TM DV ABCEDEF',
      expiryDate: '10/07/2020 - 10/07/2021 ',
      contractType: 'Trọn gói',
      playCount: 365,
      totalRevenue: 365000000,
      undistributedRevenue: 1000000,
      closingDate: '10/07/2021', 
      detail: 'Xem chi tiết'
    },
    {
      key: 4,
      stt: 4,
      contractID: 'HĐ123',
      company: 'Cty TNHH TM DV ABCEDEF',
      expiryDate: '10/07/2020 - 10/07/2021 ',
      contractType: 'Trọn gói',
      playCount: 365,
      totalRevenue: 365000000,
      undistributedRevenue: '-',
      closingDate: '10/07/2021', 
      detail: 'Xem chi tiết'
    },
    {
      key: 5,
      stt: 5,
      contractID: 'HĐ123',
      company: 'Cty TNHH TM DV ABCEDEF',
      expiryDate: '10/07/2020 - 10/07/2021 ',
      contractType: 'Trọn gói',
      playCount: 365,
      totalRevenue: 365000000,
      undistributedRevenue: 1000000,
      closingDate: '10/07/2021', 
      detail: 'Xem chi tiết'
    },
    {
      key: 6,
      stt: 6,
      contractID: 'HĐ123',
      company: 'Cty TNHH TM DV ABCEDEF',
      expiryDate: '10/07/2020 - 10/07/2021 ',
      contractType: 'Trọn gói',
      playCount: 365,
      totalRevenue: 365000000,
      undistributedRevenue: 0,
      closingDate: '10/07/2021', 
      detail: 'Xem chi tiết'
    }
  ]
  const columns: ColumnsType<RevenueHistoryDataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt'
    },
    {
      title: 'Số hợp đồng',
      dataIndex: 'contractID',
      key: 'contractID'
    },
    {
      title: 'Đơn vị khai thác',
      dataIndex: 'company',
      key: 'company'
    },
    {
      title: 'Thời hạn hợp đồng',
      dataIndex: 'expiryDate',
      key: 'expiryDate'
    },
    {
      title: 'Loại hợp đồng',
      dataIndex: 'contractType',
      key: 'contractType'
    },
    {
      title: 'Tổng lượt phát',
      dataIndex: 'playCount',
      key: 'playCount'
    },
    {
      title: 'Tổng doanh thu',
      dataIndex: 'totalRevenue',
      key: 'totalRevenue'
    },
    {
      title: 'Doanh thu chưa phân phối',
      dataIndex: 'undistributedRevenue',
      key: 'undistributedRevenue'
    },
    {
      title: 'Ngày chốt đối soát',
      dataIndex: 'closingDate',
      key: 'closingDate'
    },
    {
      title: '',
      dataIndex: 'detail',
      key: 'detail',
      render: (_, {detail}) => (
        <Link to="detail/id">{detail}</Link>
      )
    },
  ]

  const optionProps = [
    {
      icon: MdOutlineLogout,
      text: 'Xuất file',
      event: () => {

      },
      unActive:  user.isAdmin ? false : true
    }
  ]

  return (
    <div className="revenue-history">
        <h3>Lịch sử đối soát doanh thu</h3>
        <div className="timeAndSearch">
            <div>
              <h5>Thời gian thực hiện: </h5>
              <DatePicker className="datepicker" disabledDate={disabledDateProps} />
            </div>
            <div>
              <InputSearch placeholder='Nhập tên tài khoản quản trị' />
            </div>
        </div>
        <div>
          <h4>Danh sách hợp đồng khai thác đã đối soát</h4>
        </div>
        <div>
          <CustomTable 
            columns={columns} 
            dataSource={dataSource} 
            heightProps={65} 
            pagination={{pageSize: 9}}
          />
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default RevenueHistory