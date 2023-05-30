import React from "react";
import CustomTable from "../../components/table/Table";
import Option from "../../components/option/Option";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { ColumnsType } from 'antd/es/table';
import { SlNote } from "react-icons/sl";
import { useAppSelector } from "../../redux/store";

interface DataType {
    key: number,
    stt: number,
    playlistName: string,
    playlistDate: string,
    startEndDate: string,
    cycle: string,
    device: string
  }

const ScheduleDetail: React.FC = () => {
    const { user } = useAppSelector(state => state.user)

    const breadcrumbs = [
        {
          key: 1,
          path: '../schedule',
          namePage: 'Lập lịch phát'
        },
        {
          key: 2,
          path: '',
          namePage: 'Chi tiết'
        }
    ]

    const dataSource: DataType[] = [
        {
            key: 1,
            stt: 1,
            playlistName: 'Top USUK 2021',
            playlistDate: '22/05/2021 - 30/05/2021',
            startEndDate: '06:00:00 - 08:00:00',
            cycle: 'Thứ 3 | Thứ 6',
            device: 'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 4'
        },
        {
            key: 2,
            stt: 2,
            playlistName: 'Love Songs',
            playlistDate: '22/05/2021 - 30/05/2021',
            startEndDate: '06:00:00 - 08:00:00',
            cycle: 'Thứ 5',
            device: 'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 4'
        },
        {
            key: 3,
            stt: 3,
            playlistName: 'Loving You',
            playlistDate: '22/05/2021 - 30/05/2021',
            startEndDate: '14:00:00 - 16:00:00',
            cycle: 'Thứ 7',
            device: 'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 4'
        },
    ]

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Tên Playlist',
            dataIndex: 'playlistName',
            key: 'playlistName'
        },
        {
            title: 'Ngày phát Playlist',
            dataIndex: 'playlistDate',
            key: 'playlistDate'
        },
        {
            title: 'Bắt đầu - Kết thúc',
            dataIndex: 'startEndDate',
            key: 'startEndDate'
        },
        {
            title: 'Chu kỳ phát',
            dataIndex: 'cycle',
            key: 'cycle'
        },
        {
            title: 'Thiết bị',
            dataIndex: 'device',
            key: 'device'
        },
      ]

      const optionProps = [
        {
          icon: SlNote,
          text: 'Chỉnh sửa lịch phát',
          event: () => {

          },
          unActive:  user.isAdmin ? false : true
        }
      ]

    return (
        <div className="schedule-detail">
            <div>
                <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <h3>Lịch phát số 1</h3>
            <h4>Danh sách Playlist</h4>
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

export default ScheduleDetail