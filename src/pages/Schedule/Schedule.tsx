import React, { useEffect, useState } from "react";
import CustomTable from "../../components/table/Table";
import Option from "../../components/option/Option";
import { ColumnsType } from 'antd/es/table';
import { MdPlaylistAdd } from 'react-icons/md'
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

interface DataType {
    key: number,
    stt: number,
    scheduleName: string,
    scheduleTime: string,
    detail: string,
    delete: string
  }

const Schedule: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    const [ title ] = useState("VCPMC | Lịch phát");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const dataSource: DataType[] = [
        {
            key: 1,
            stt: 1,
            scheduleName: 'Lịch phát số 1',
            scheduleTime: '22/05/2021 - 30/05/2021',
            detail: 'Xem chi tiết',
            delete: 'Xóa'
        },
        {
            key: 2,
            stt: 2,
            scheduleName: 'Lịch phát số 2',
            scheduleTime: '22/05/2021 - 30/05/2021',
            detail: 'Xem chi tiết',
            delete: 'Xóa'
        },
        {
            key: 3,
            stt: 3,
            scheduleName: 'Lịch phát số 3',
            scheduleTime: '22/05/2021 - 30/05/2021',
            detail: 'Xem chi tiết',
            delete: 'Xóa'
        },
        {
            key: 4,
            stt: 4,
            scheduleName: 'Lịch phát số 4',
            scheduleTime: '22/05/2021 - 30/05/2021',
            detail: 'Xem chi tiết',
            delete: 'Xóa'
        },
        {
            key: 5,
            stt: 5,
            scheduleName: 'Lịch phát số 5',
            scheduleTime: '22/05/2021 - 30/05/2021',
            detail: 'Xem chi tiết',
            delete: 'Xóa'
        },
        {
            key: 6,
            stt: 6,
            scheduleName: 'Lịch phát số 6',
            scheduleTime: '22/05/2021 - 30/05/2021',
            detail: 'Xem chi tiết',
            delete: 'Xóa'
        },
        {
            key: 7,
            stt: 7,
            scheduleName: 'Lịch phát số 7',
            scheduleTime: '22/05/2021 - 30/05/2021',
            detail: 'Xem chi tiết',
            delete: 'Xóa'
        },
        {
            key: 8,
            stt: 8,
            scheduleName: 'Lịch phát số 8',
            scheduleTime: '22/05/2021 - 30/05/2021',
            detail: 'Xem chi tiết',
            delete: 'Xóa'
        },
    ]

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Tên lịch',
            dataIndex: 'scheduleName',
            key: 'scheduleName'
        },
        {
            title: 'Thời gian phát',
            dataIndex: 'scheduleTime',
            key: 'scheduleTime'
        },
        {
            title: '',
            dataIndex: 'detail',
            key: 'detail',
            render: (_, {detail}) => {
                return <Link to="detail/id">Xem chi tiết</Link>
            }
        },
        {
            title: '',
            dataIndex: 'delete',
            key: 'delete',
            render: (_) => {
                return <a style={{color: '#FF0000'}}>Xóa</a>
            }
        },
      ]

      const optionProps = [
        {
          icon: MdPlaylistAdd,
          text: 'Thêm lịch phát',
          event: () => {

          },
          unActive:  user.isAdmin ? false : true
        }
      ]

    return (
        <div className="schedule">
            <h3>Danh sách lịch phát</h3>
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

export default Schedule