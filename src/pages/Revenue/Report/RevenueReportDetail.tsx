import React from 'react'
import './RevenueReportDetail.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Option from '../../../components/option/Option'
import InputSearch from '../../../components/input/search/Search'
import CustomTable from '../../../components/table/Table'
import { DatePicker } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { MdOutlineLogout } from 'react-icons/md'
import { useAppSelector } from '../../../redux/store'

interface DataType {
    recordName: string,
    playCount: number,
    totalRevenue: string,
    performanceRights: string,
    productionRights: string,
    vcpmc: string
}

const RevenueReportDetail: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, {}, index) => <p>{index + 1}</p>
        },
        {
            title: 'Tên bài hát',
            dataIndex: 'recordName',
            key: 'recordName',
        },
        {
            title: 'Tổng số lượt phát',
            dataIndex: 'playCount',
            key: 'playCount',
        },
        {
            title: 'Tổng doanh thu',
            dataIndex: 'totalRevenue',
            key: 'totalRevenue',
        },
        {
            title: 'Quyền biểu diễn',
            dataIndex: 'performanceRights',
            key: 'performanceRights',
        },
        {
            title: 'Quyền sản xuất',
            dataIndex: 'productionRights',
            key: 'productionRights',
        },
        {
            title: 'VCPMC',
            dataIndex: 'vcpmc',
            key: 'vcpmc',
        },
    ]
    const dataSource: DataType[] = [
        {
            recordName: 'Bài hát 1',
            playCount: 365,
            totalRevenue: '365.000.000',
            performanceRights: '36.266',
            productionRights: '36.266',
            vcpmc: '36.200'
        },
        {
            recordName: 'Bài hát 2',
            playCount: 250,
            totalRevenue: '250.000.000',
            performanceRights: '2500',
            productionRights: '2510',
            vcpmc: '2540'
        },
        {
            recordName: 'Bài hát 3',
            playCount: 425,
            totalRevenue: '425.000.000',
            performanceRights: '1427',
            productionRights: '1400',
            vcpmc: '1600'
        },
        {
            recordName: 'Bài hát 4',
            playCount: 400,
            totalRevenue: '400.000.000',
            performanceRights: '4000',
            productionRights: '4069',
            vcpmc: '4089'
        },
        {
            recordName: 'Bài hát 5',
            playCount: 280,
            totalRevenue: '280.000.000',
            performanceRights: '5434',
            productionRights: '5214',
            vcpmc: '5384'
        },
        {
            recordName: 'Bài hát 6',
            playCount: 250,
            totalRevenue: '250.000.000',
            performanceRights: '2000',
            productionRights: '2051',
            vcpmc: '2051'
        },
        {
            recordName: 'Bài hát 7',
            playCount: 400,
            totalRevenue: '400.000.000',
            performanceRights: '40.000',
            productionRights: '400',
            vcpmc: '4020'
        },
        {
            recordName: 'Bài hát 8',
            playCount: 400,
            totalRevenue: '400.000.000',
            performanceRights: '420.040',
            productionRights: '20.040',
            vcpmc: '30.040'
        },
        {
            recordName: 'Bài hát 9',
            playCount: 250,
            totalRevenue: '250.000.000',
            performanceRights: '250.000',
            productionRights: '50.000',
            vcpmc: '80.000'
        },
        {
            recordName: 'Bài hát 10',
            playCount: 280,
            totalRevenue: '280.000.000',
            performanceRights: '280.000',
            productionRights: '20.000',
            vcpmc: '60.000'
        },
        {
            recordName: 'Bài hát 11',
            playCount: 365,
            totalRevenue: '365.000.000',
            performanceRights: '365.000',
            productionRights: '35.000',
            vcpmc: '35.000'
        },
        {
            recordName: 'Bài hát 12',
            playCount: 365,
            totalRevenue: '365.000.000',
            performanceRights: '365.000',
            productionRights: '65.000',
            vcpmc: '65.000'
        },
    ]
    const breadcrumbs = [
        {
            key: 1 ,
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
            namePage: 'Chi tiết'
        },
        {
            key: 4,
            path: '',
            namePage: 'Chi tiết doanh thu'
        }
    ]
    const optionProps = [
        {
          icon: MdOutlineLogout,
          text: 'Xuất file',
          unActive:  user.isAdmin ? false : true
        }
      ]
  return (
    <div className="revenue-report-detail">
        <div>
            <Breadcrumbs crumbs={breadcrumbs} />
        </div>
        <div>
            <h3>Hợp đồng HD123 - Kỳ Tháng 06/2021</h3>
        </div>
        <div className='content'>
            <div>
                <div className='contract-info'>
                    <h4>Thông tin hợp đồng</h4>
                    <span>
                        <h5>Số hợp đồng:</h5>
                        <p>HĐ123</p>
                    </span>
                    <span>
                        <h5>Đơn vị khai thác:</h5>
                        <p>Công ty TNHH ABC</p>
                    </span>
                    <span>
                        <h5>Loại hợp đồng:</h5>
                        <p>Trọn gói</p>
                    </span>
                    <span>
                        <h5>Hiệu lực từ:</h5>
                        <p>01/01/2020</p>
                    </span>
                    <span>
                        <h5>Ngày hết hạn:</h5>
                        <p>01/01/2022</p>
                    </span>
                    <span>
                        <h5>Giá trị hợp đồng:</h5>
                        <p>730.000.000 VNĐ</p>
                    </span>
                    <span>
                        <h5>Giá trị phân phối theo ngày:</h5>
                        <p>365.000.000 VNĐ</p>
                    </span>
                </div>
                <div className='control-info'>
                    <h4>Thông tin đối soát</h4>
                    <span>
                        <h5>Ký đối soát:</h5>
                        <p>01/01/2020</p>
                    </span>
                    <span>
                        <h5>Số bài hát:</h5>
                        <p>13 bài</p>
                    </span>
                    <span>
                        <h5>Tổng số lượt phát:</h5>
                        <p>200.000 lượt</p>
                    </span>
                    <span>
                        <h5>Tổng doanh thu:</h5>
                        <p>300.000.000 VNĐ  </p>
                    </span>
                    <span>
                        <h5>Doanh thu chưa phân phối:</h5>
                        <p>1.000.000 VNĐ</p>
                    </span>
                    <span>
                        <h5>Trạng thái đối soát:</h5>
                        <p>Chưa đối soát</p>
                    </span>
                </div>
            </div>
            <div>
                <h4>Danh sách bản ghi</h4>
                <div className='dateAndSearch'>
                    <div>
                        <h5>Xem theo ngày/tuần:</h5>
                        <DatePicker picker="month" className="datepicker" />
                    </div>
                    <InputSearch placeholder='Nhập tên bài hát' />
                </div>
                <div>
                    <CustomTable 
                        widthProps={100}
                        columns={columns} 
                        dataSource={dataSource} 
                        heightProps={65} 
                        pagination={{pageSize: 9}}
                    />
                </div>
            </div>
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default RevenueReportDetail