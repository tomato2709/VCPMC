import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import './Distribution.css'
import CustomTable from '../../../components/table/Table';
import Option from '../../../components/option/Option';
import InputSearch from '../../../components/input/search/Search'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import { ColumnsType } from 'antd/es/table';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store';

interface DistributionType {
    key: number,
    stt: number,
    contractID: string,
    authorizedPerson: string,
    recordAmount: string,
    revenue: number,
    administrativeFee: number,
    royalty: number,
    closingDate: string,
    revenueDetails: string
}

const RevenueDistribution: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    
    const disabledDateProps: RangePickerProps['disabledDate'] = (current) => {
        return current && current < dayjs().endOf('day');
    };

    const [ title ] = useState("VCPMC | Phân phối doanh thu");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const dataSource: DistributionType[] = [
    {
        key: 1,
        stt: 1,
        contractID: 'UQ789',
        authorizedPerson: 'Vương Anh Tú',
        recordAmount: '15',
        revenue: 365000000,
        administrativeFee: 365000000,
        royalty: 365000000,
        closingDate: '21/07/2021',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 2,
        stt: 2,
        contractID: 'UQ789',
        authorizedPerson: 'Nguyễn Đức Cường',
        recordAmount: '30',
        revenue: 2500000,
        administrativeFee: 2500000,
        royalty: 2500000,
        closingDate: '-',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 3,
        stt: 3,
        contractID: 'UQ789',
        authorizedPerson: 'Hứa Kim Tuyền',
        recordAmount: '25',
        revenue: 425000000,
        administrativeFee: 425000000,
        royalty: 425000000,
        closingDate: '21/07/2021',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 4,
        stt: 4,
        contractID: 'UQ789',
        authorizedPerson: 'Nguyễn Minh Cường',
        recordAmount: '234',
        revenue: 400000000,
        administrativeFee: 400000000,
        royalty: 400000000,
        closingDate: '21/07/2021',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 5,
        stt: 5,
        contractID: 'UQ789',
        authorizedPerson: 'Trang Pháp',
        recordAmount: '33',
        revenue: 250000000,
        administrativeFee: 250000000,
        royalty: 250000000,
        closingDate: '21/07/2021',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 6,
        stt: 6,
        contractID: 'UQ789',
        authorizedPerson: 'Vương Anh Tú',
        recordAmount: '43',
        revenue: 400000000,
        administrativeFee: 400000000,
        royalty: 400000000,
        closingDate: '21/07/2021',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 7,
        stt: 7,
        contractID: 'UQ789',
        authorizedPerson: 'Vương Anh Tú',
        recordAmount: '11',
        revenue: 400000000,
        administrativeFee: 400000000,
        royalty: 400000000,
        closingDate: '21/07/2021',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 8,
        stt: 8,
        contractID: 'UQ789',
        authorizedPerson: 'Vương Anh Tú',
        recordAmount: '12',
        revenue: 250000000,
        administrativeFee: 250000000,
        royalty: 250000000,
        closingDate: '-',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 9,
        stt: 9,
        contractID: 'UQ789',
        authorizedPerson: 'Vương Anh Tú',
        recordAmount: '13',
        revenue: 280000000,
        administrativeFee: 280000000,
        royalty: 280000000,
        closingDate: '-',
        revenueDetails: 'Xem chi tiết'
    },
    {
        key: 10,
        stt: 10,
        contractID: 'UQ789',
        authorizedPerson: 'Vương Anh Tú',
        recordAmount: '15',
        revenue: 365000000,
        administrativeFee: 365000000,
        royalty: 365000000,
        closingDate: '-',
        revenueDetails: 'Xem chi tiết'
    },
    ]

    const columns: ColumnsType<DistributionType> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt'
    },
    {
        title: 'Hợp đồng ủy quyền',
        dataIndex: 'contractID',
        key: 'contractID'
    },
    {
        title: 'Người ủy quyền',
        dataIndex: 'authorizedPerson',
        key: 'authorizedPerson'
    },
    {
        title: 'Số bài hát ủy quyền',
        dataIndex: 'recordAmount',
        key: 'recordAmount'
    },
    {
        title: 'Doanh thu (VNĐ)',
        dataIndex: 'revenue',
        key: 'revenue'
    },
    {
        title: 'Hành chính phí (VNĐ)',
        dataIndex: 'administrativeFee',
        key: 'administrativeFee'
    },
    {
        title: 'Mức nhuận bút (VNĐ)',
        dataIndex: 'royalty',
        key: 'royalty'
    },
    {
        title: 'Ngày chốt đối soát',
        dataIndex: 'closingDate',
        key: 'closingDate'
    },
    {
        title: 'Chi tiết doanh thu',
        dataIndex: 'revenueDetails',
        key: 'revenueDetails',
        render: (_, {revenueDetails}) => {
            return <Link to="detail/id">Xem chi tiết</Link>
        }
    },
    ]

    const breadcrumb = [
    {
        key: 1,
        path: '',
        namePage: 'Doanh thu'
    },
    {
        key: 2,
        path: '',
        namePage: 'Phân phối doanh thu'
    }
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
    <div className="revenue-distribution">
        <Breadcrumbs crumbs={breadcrumb} />
        <h3>Quản lý phân phối doanh thu</h3>
        <div className="distribution-datepicker">
            <div>
              <h5>Theo tháng: </h5>
              <DatePicker className="datepicker" picker="month" disabledDate={disabledDateProps} />
            </div>
            <div>
              <InputSearch placeholder='Nhập tên bài hát...' />
            </div>
        </div>
        <div>
            <CustomTable 
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

export default RevenueDistribution