import React, { useEffect, useState } from 'react'
import './ReportDetail.css'
import CustomTable from '../../../components/table/Table';
import Option from '../../../components/option/Option';
import InputSearch from '../../../components/input/search/Search'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { Modal, Select } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { MdOutlineLogout } from 'react-icons/md';
import { TbChecklist } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store';

interface ReportType {
    key: number,
    stt: number,
    contractID: string,
    unit: string,
    contractExpiryDate: string,
    contractType: string,
    syncedDeviceAmount: string,
    playCount: string,
    closingDate: string,
    detail: string,
    syncHistory: string
}

const ReportDetail: React.FC = () => {
    const navigate = useNavigate()
    const { user } = useAppSelector(state => state.user)
    const [ openModal, setOpenModal ] = useState(false)
    const [ title ] = useState("VCPMC | Chi tiết báo cáo doanh thu");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const dataSource: ReportType[] = [
    {
        key: 1,
        stt: 1,
        contractID: 'HD123',
        unit: 'CTY TNHH MTV XYZ',
        contractExpiryDate: '01/04/2021 - 09/02/2025',
        contractType: 'Trọn gói',
        syncedDeviceAmount: '8/8',
        playCount: '321.000',
        closingDate: '22/04/2021',
        detail: 'Chi tiết doanh thu',
        syncHistory: 'Lịch sử đồng bộ trên thiết bị'
    },
    {
        key: 2,
        stt: 2,
        contractID: 'HD456',
        unit: 'CTY TNHH MTV XYZ',
        contractExpiryDate: '01/04/2021 - 09/02/2025',
        contractType: 'Theo lượt phát',
        syncedDeviceAmount: '10/10',
        playCount: '22.000',
        closingDate: '22/04/2021',
        detail: 'Chi tiết doanh thu',
        syncHistory: 'Lịch sử đồng bộ trên thiết bị'
    },
    {
        key: 3,
        stt: 3,
        contractID: 'HD321',
        unit: 'CTY TNHH MTV XYZ',
        contractExpiryDate: '01/04/2021 - 09/02/2025',
        contractType: 'Theo lượt phát',
        syncedDeviceAmount: '5/5',
        playCount: '124.000',
        closingDate: '22/04/2021',
        detail: 'Chi tiết doanh thu',
        syncHistory: 'Lịch sử đồng bộ trên thiết bị'
    },
    {
        key: 4,
        stt: 4,
        contractID: 'HD646',
        unit: 'CTY TNHH MTV XYZ',
        contractExpiryDate: '01/04/2021 - 09/02/2025',
        contractType: 'Trọn gói',
        syncedDeviceAmount: '6/7',
        playCount: '1.120',
        closingDate: '22/04/2021',
        detail: 'Chi tiết doanh thu',
        syncHistory: 'Lịch sử đồng bộ trên thiết bị'
    },
    ]

    const columns: ColumnsType<ReportType> = [
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
        dataIndex: 'unit',
        key: 'unit'
    },
    {
        title: 'Thời hạn hợp đồng',
        dataIndex: 'contractExpiryDate',
        key: 'contractExpiryDate'
    },
    {
        title: 'Loại hợp đồng',
        dataIndex: 'contractType',
        key: 'contractType'
    },
    {
        title: 'Số thiết bị đã đồng bộ',
        dataIndex: 'syncedDeviceAmount',
        key: 'syncedDeviceAmount'
    },
    {
        title: 'Tổng số lượt phát',
        dataIndex: 'playCount',
        key: 'playCount'
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
        render: (_, {detail}) => {
            return <Link to="detail/id">Chi tiết doanh thu</Link>
        }
    },
    {
        title: '',
        dataIndex: 'syncHistory',
        key: 'syncHistory',
        render: (_, {syncHistory}) => {
            return <Link to="sync-history/id">Lịch sử đồng bộ trên thiết bị</Link>
        }
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
        path: '../revenue-report',
        namePage: 'Báo cáo doanh thu'
    },
    {
        key: 3,
        path: '',
        namePage: 'Báo cáo chi tiết'
    }
    ]

    const optionProps = [
    {
        icon: TbChecklist,
        text: 'Chốt doanh thu',
        event: () => {
            setOpenModal(true)
        },
        unActive:  user.isAdmin ? false : true
    },
    {
        icon: MdOutlineLogout,
        text: 'Xuất dữ liệu',
        event: () => {

        },
        unActive:  user.isAdmin ? false : true
    }
    ]

  return (
    <div className="report-detail">
        <Breadcrumbs crumbs={breadcrumbs} />
        <h3>Doanh thu hợp đồng theo khai thác</h3>
        <div className="report-datepicker">
        <div className="select-wrap">
                <h5>Theo tháng:</h5>
                <span >
                <Select
                    options={[
                      {
                        value: "month",
                        label: "Theo tháng",
                      },
                      {
                        value: "quarter",
                        label: "Theo quý",
                      },
                    ]}
                    style={{ width: 160 }}
                    defaultValue="Theo tháng"
                ></Select>
                </span>
                <span>
                <Select
                    options={[
                      {
                        value: "january",
                        label: "Tháng 1",
                      },
                      {
                        value: "february",
                        label: "Tháng 2",
                      },
                      {
                        value: "march",
                        label: "Tháng 3",
                      },
                      {
                        value: "april",
                        label: "Tháng 4",
                      },
                      {
                        value: "may",
                        label: "Tháng 5",
                      },
                      {
                        value: "june",
                        label: "Tháng 6",
                      },
                      {
                        value: "july",
                        label: "Tháng 7",
                      },
                      {
                        value: "august",
                        label: "Tháng 8",
                      },
                      {
                        value: "september",
                        label: "Tháng 9",
                      },
                      {
                        value: "october",
                        label: "Tháng 10",
                      },
                      {
                        value: "november",
                        label: "Tháng 11",
                      },
                      {
                        value: "december",
                        label: "Tháng 12",
                      },
                    ]}
                    style={{ width: 160 }}
                    defaultValue="Tháng 1"
                ></Select>
                </span>
            </div>
            <div>
              <InputSearch placeholder='Nhập tên người dùng' />
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
        <Modal className="customModal"
            title="Chốt doanh thu"
            open={openModal}
            okText="Tiếp tục"
            cancelText="Hủy"
            onOk={() => navigate('detail/id')}
            onCancel={() => setOpenModal(false)}
            >
                <form action="">
                    <div>
                        <p>Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021 trên tất cả các hợp đồng sử dụng.</p>
                        <p> </p>
                        <p>Nhấn <b>Tiếp tục</b> để chốt doanh thu.</p>
                        <p>Nhấn <b>Hủy</b> để hủy bỏ và không chốt doanh thu</p>
                    </div>
                </form>
            </Modal>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default ReportDetail