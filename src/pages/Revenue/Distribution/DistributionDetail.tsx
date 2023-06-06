import React, { useEffect, useState } from 'react'
import './DistributionDetail.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Option from '../../../components/option/Option'
import InputSearch from '../../../components/input/search/Search'
import CustomTable from '../../../components/table/Table'
import { ColumnsType } from 'antd/es/table'
import { TbFileExport } from 'react-icons/tb'
import { useAppSelector } from '../../../redux/store'

interface DataTypeRecordList {
    record: string,
    playCount: number,
    revenue: string,
    AdministrativeFee: string,
    royalties: string,
}
interface DataTypeRevenue {
    miningUnit: string,
    playCount: number,
    revenue: string
}

const DistributionDetail: React.FC = () => {
    const { user } = useAppSelector(state => state.user)

    const [ title ] = useState("VCPMC | Chi tiết phân phối doanh thu");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const columnsRevenue: ColumnsType<DataTypeRevenue> = [
        {
            title: 'Đơn vị khai thác',
            dataIndex: 'miningUnit',
            key: 'miningUnit'
        },
        {
            title: 'Số lượt phát',
            dataIndex: 'playCount',
            key: 'playCount'
        },
        {
            title: 'Doanh thu (VNĐ)',
            dataIndex: 'revenue',
            key: 'revenue'
        },
    ]

    const dataSourceRevenue: DataTypeRevenue[] = [
        {
            miningUnit: 'CTy TNHH A',
            playCount: 200,
            revenue: '2.500.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 300,
            revenue: '425.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 400,
            revenue: '400.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 500,
            revenue: '280.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 600,
            revenue: '250.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 700,
            revenue: '400.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 800,
            revenue: '400.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 900,
            revenue: '250.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 100,
            revenue: '280.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 101,
            revenue: '365.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 102,
            revenue: '425.000'
        },
        {
            miningUnit: 'CTy TNHH A',
            playCount: 103,
            revenue: '365.000'
        },
    ]

    const columnsRecordList: ColumnsType<DataTypeRecordList> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, {}, index) => (
                <p>{index + 1}</p>
            )
        },
        {
            title: 'Bài hát',
            dataIndex: 'record',
            key: 'record'
        },
        {
            title: 'Số lượt phát',
            dataIndex: 'playCount',
            key: 'playCount'
        },
        {
            title: 'Doanh thu (VNĐ)',
            dataIndex: 'revenue',
            key: 'revenue'
        },
        {
            title: 'Hành chính phí (VNĐ)',
            dataIndex: 'AdministrativeFee',
            key: 'AdministrativeFee'
        },
        {
            title: 'Nhuận bút (VNĐ)',
            dataIndex: 'royalties',
            key: 'royalties'
        },
    ]
    const dataSourceRecordList: DataTypeRecordList[] = [
        {
            record: 'Hết thương cạn nhớ',
            playCount: 1200,
            revenue: '12.000.000',
            AdministrativeFee: '2.500.000',
            royalties: '2.500.000',
        },
        {
            record: 'Cuộc gọi nhỡ',
            playCount: 300,
            revenue: '3.000.000',
            AdministrativeFee: '425.000',
            royalties: '425.000',
        }, 
        {
            record: 'Gặp nhưng không ở lại',
            playCount: 1000,
            revenue: '10.000.000',
            AdministrativeFee: '400.000',
            royalties: '400.000',
        },
        {
            record: 'Giá cô ấy đừng xuất hiện',
            playCount: 2500,
            revenue: '24.500.000',
            AdministrativeFee: '280.000',
            royalties: '280.000',
        },
        {
            record: 'Gặp nhưng không ở lại 2',
            playCount: 400,
            revenue: '4.000.000',
            AdministrativeFee: '250.000',
            royalties: '250.000',
        },
        {
            record: 'Giá cô ấy đừng xuất hiện',
            playCount: 2500,
            revenue: '24.500.000',
            AdministrativeFee: '400.000',
            royalties: '400.000',
        },
        {
            record: 'Gặp nhưng không ở lại',
            playCount: 250,
            revenue: '11.000.000',
            AdministrativeFee: '400.000',
            royalties: '400.000',
        },
        {
            record: 'Cuộc gọi nhỡ',
            playCount: 120,
            revenue: '12.000.000',
            AdministrativeFee: '250.000',
            royalties: '250.000',
        },
        {
            record: 'Hết thương cạn nhớ',
            playCount: 600,
            revenue: '13.000.000',
            AdministrativeFee: '280.000',
            royalties: '280.000',
        },
        {
            record: 'Cuộc gọi nhỡ',
            playCount: 400,
            revenue: '15.000.000',
            AdministrativeFee: '365.000',
            royalties: '365.000',
        },
        {
            record: 'Gặp nhưng không ở lại',
            playCount: 214,
            revenue: '2.400.000',
            AdministrativeFee: '365.000',
            royalties: '365.000',
        },
    ]
    const breadcrumbs = [
        {
          key: 1,
          path: '',
          namePage: 'Doanh thu'
        },
        {
          key: 2,
          path: '../revenue-distribution',
          namePage: 'Phân phối doanh thu'
        },
        {
            key: 3,
            path: '',
            namePage: 'Chi tiết doanh thu'
          }
      ]

    const optionProps = [
        {
            icon: TbFileExport,
            text: 'Xuất dữ liệu',
            unActive:  user.isAdmin ? false : true
        }
    ]
  return (
    <div className="distribution-detail">
        <div>
            <Breadcrumbs crumbs={breadcrumbs} /> 
        </div>
        <div>
            <h3>Hợp đồng Ủy quyền UQ123 - Quý 1</h3>
        </div>
        <div className='content'>
            <div>
                <h4>Danh sách bản ghi</h4>
                <InputSearch placeholder='Nhập tên bài hát' />
                <CustomTable 
                    heightProps={65} 
                    columns={columnsRecordList} 
                    dataSource={dataSourceRecordList} 
                    widthProps={97}
                    pagination={{pageSize: 7}}
                />
            </div>
            <div>
                <h4>Doanh thu bản ghi</h4>
                <h4 style={{color: '#FFAC69', marginBottom: 25, fontSize: 20}}>Cuộc gọi nhỡ</h4>
                <CustomTable 
                    columns={columnsRevenue} 
                    dataSource={dataSourceRevenue}  
                    heightProps={65}
                    widthProps={92} 
                />
            </div>
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default DistributionDetail