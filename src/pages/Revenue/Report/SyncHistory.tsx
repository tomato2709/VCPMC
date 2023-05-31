import React from 'react'
import './SyncHistory.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Option from '../../../components/option/Option'
import InputSearch from '../../../components/input/search/Search'
import CustomTable from '../../../components/table/Table'
import { ColumnsType } from 'antd/es/table'
import { RxDotFilled } from 'react-icons/rx'
import { TbFileExport } from 'react-icons/tb'
import { useAppSelector } from '../../../redux/store'

interface DataTypeDevice {
    deviceName: string,
    status: string,
    syncTime: string,
    playCount: number
}
interface DataTypeRecord {
    recordList: string,
    playCount: number
}

const SyncHistory: React.FC = () => {
    const { user } = useAppSelector(state => state.user)

    const columnsRecord: ColumnsType<DataTypeRecord> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, {}, index) => (
                <p>{index + 1}</p>
            )
        },
        {
            title: 'Danh sách bài hát',
            dataIndex: 'recordList',
            key: 'recordList'
        },
        {
            title: 'Số lượt phát',
            dataIndex: 'playCount',
            key: 'playCount'
        }
    ]

    const dataSourceRecord: DataTypeRecord[] = [
        {
            recordList: 'Dù ngay mai bão giông',
            playCount: 10
        },
        {
            recordList: 'Dù em có yêu ai',
            playCount: 20
        },
        {
            recordList: 'Anh vẫn ở đây',
            playCount: 42
        },
        {
            recordList: 'Em nợ anh',
            playCount: 25
        },
        {
            recordList: 'Lựa chọn con tim',
            playCount: 20
        },
        {
            recordList: 'Nước mắt trong tim',
            playCount: 45
        },
        {
            recordList: 'Vẫn xin yêu người',
            playCount: 75
        },
        {
            recordList: 'Có một cái cây trong một cái vườn',
            playCount: 64
        }
    ]

    const columnsDevice: ColumnsType<DataTypeDevice> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, {}, index) => (
                <p>{index + 1}</p>
            )
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'deviceName',
            key: 'deviceName'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, { status }) => {
                return (
                    <><p><RxDotFilled color="lime" />Đang hoạt động</p></>
                )
            }
        },
        {
            title: 'Thời gian đồng bộ dữ liệu',
            dataIndex: 'syncTime',
            key: 'syncTime'
        },
        {
            title: 'Tổng số lượt phát',
            dataIndex: 'playCount',
            key: 'playCount'
        },
    ]
    const dataSourceRecordList: DataTypeDevice[] = [
        {
            deviceName: 'Device1223322',
            status: 'Đang hoạt động',
            syncTime: '22/05/2021 22:15:00',
            playCount: 70
        },
        {
            deviceName: 'Device1223322',
            status: 'Đang hoạt động',
            syncTime: '22/05/2021 22:15:00',
            playCount: 21
        },
        {
            deviceName: 'Device1223322',
            status: 'Đang hoạt động',
            syncTime: '22/05/2021 22:15:00',
            playCount: 500
        },
        {
            deviceName: 'Device1223322',
            status: 'Đang hoạt động',
            syncTime: '22/05/2021 22:15:00',
            playCount: 140
        },
        {
            deviceName: 'Device1223322',
            status: 'Đang hoạt động',
            syncTime: '22/05/2021 22:15:00',
            playCount: 45
        },
      ]

    const optionProps = [
        {
            icon: TbFileExport,
            text: 'Xuất dữ liệu',
            unActive:  user.isAdmin ? false : true
        }
    ]

    const breadcrumbs = [
        {
          key: 1,
          path: '',
          namePage: 'Doanh thu'
        },
        {
          key: 2,
          path: '../revenue-report',
          namePage: 'Báo cáo doanh thu'
        },
        {
            key: 3,
            path: '../../report-detail',
            namePage: 'Báo cáo chi tiết'
        },
        {
            key: 4,
            path: '',
            namePage: 'Lịch sử đồng bộ thiết bị'
        }
      ]
  return (
    <div className="distribution-detail">
        <div>
            <Breadcrumbs crumbs={breadcrumbs} /> 
        </div>
        <div>
            <h3>Hợp đồng HD123 - Kỳ tháng 03/2021</h3>
        </div>
        <div className='content'>
            <div>
                <h4>Danh sách thiết bị</h4>
                <InputSearch placeholder='Nhập tên bài hát' />
                <div>
                    <p>
                        <b>Tổng thiết bị:</b> 8 thiết bị      <b>Tổng lượt phát:</b> 1784
                    </p>
                </div>
                <CustomTable 
                    heightProps={58} 
                    columns={columnsDevice} 
                    dataSource={dataSourceRecordList} 
                    widthProps={97}
                    pagination={{pageSize: 7}}
                />
            </div>
            <div>
                <CustomTable 
                    columns={columnsRecord} 
                    dataSource={dataSourceRecord}  
                    heightProps={78}
                    widthProps={105} 
                    pagination={{pageSize: 7}}
                />
            </div>
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default SyncHistory