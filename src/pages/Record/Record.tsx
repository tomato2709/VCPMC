import React, { useState, useEffect } from 'react'
import './Record.css'
import InputSearch from '../../components/input/search/Search'
import FeatureInPage from '../../components/feature/Feature';
import CustomDropdown from '../../components/dropdown/Dropdown';
import CustomTable from '../../components/table/Table';
import { Link } from 'react-router-dom';
import { MenuProps, message } from 'antd'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { SlNote } from 'react-icons/sl';
import { RxDotFilled } from 'react-icons/rx';
import { useSearch } from '../../hooks/useSearch';
import { usePaymentsCollection } from '../../hooks/useSnapshot';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { DataTypeRecord, fetchRecord } from '../../redux/slice/recordSlice';

const Record: React.FC = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.user)
    const recordStore = useAppSelector(state => state.record.record)
    const [ record, setRecord ] = useState(recordStore)
    const { payments, loading } = usePaymentsCollection('record')
    const [ displaySwitch, setDisplaySwitch ] = useState('row')
    const [ displayRowSelection, setDisplayRowSelection ] = useState(false)
    const [ search, setSearch ] = useSearch(recordStore, 'nameMusic')

    useEffect(() => {
      setRecord(search)
    }, [search])
  
    useEffect(() => {
      dispatch(fetchRecord());
    }, [])

    useEffect(() => {
      setRecord(payments)
    }, [payments])

    const handleChangeSetSearchValue = (e: any) => {
      const value = e.value;
      setSearch(value);
    }

    const items: MenuProps['items'] = [
      {
        label: 'Tất cả',
        key: '1',
      },
      {
        label: 'Pop',
        key: '2'
      },
      {
        label: 'EDM',
        key: '3'
      },
      {
        label: 'Ballad',
        key: '4',
      }
    ];

    const menuProps = {
      items,
    };

    const handleClickApproveSong = () => {
      setDisplayRowSelection(false);
      message.success('Đã phê duyệt')
    }
    const handleClickCancelApproveSong = () => {
      setDisplayRowSelection(false);
      message.success('Đã hủy phê duyệt')
    }

    const featureProps = displayRowSelection ? [
      {
        icon: AiOutlineCheck,
        text: 'Phê duyệt',
        event: handleClickApproveSong,
        color: '#0FBF00'
      },
      {
        icon: FaTimes,
        text: 'Từ chối',
        event: handleClickCancelApproveSong
      }
    ] :[
      {
        icon: SlNote,
        text: "Quản lí phê duyệt",
        event: () => {
          user.isAdmin ? setDisplayRowSelection(true) : message.warning('Chức năng này chỉ dành cho người quản lý')
        },
        unActive: user.isAdmin ? false : true
      }
    ]

    const dataSource: DataTypeRecord[] = record
    const columns: ColumnsType<DataTypeRecord> = [
      {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        render: (_, {}, index) => {
          return <p>{index + 1}</p>
        }
      },
      {
        title: 'Tên bản ghi',
        dataIndex: 'nameMusic',
        key: 'nameMusic'
      },
      {
        title: 'Mã IRC',
        dataIndex: 'IRCID',
        key: 'IRCID'
      },
      {
        title: 'Thời lượng',
        dataIndex: 'time',  
        key: 'time'
      },
      {
        title: 'Ca sĩ',
        dataIndex: 'singer',
        key: 'singer'
      },
      {
        title: 'Tác giả',
        dataIndex: 'author',
        key: 'author'
      },
      {
        title: 'Thể loại',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title: 'Định dạng',
        dataIndex: 'format',
        key: 'format'
      },
      {
        title: 'Thời hạn sử dụng',
        dataIndex: 'date',
        key: 'date',
        render: (_, { status }) => {
          return <>{status ? <p><RxDotFilled color="blue" />Còn thời hạn</p> : <p><RxDotFilled color="gray" />Hết thời hạn</p>}</>
        }
      },
      {
        title: '',
        dataIndex: 'status',
        key: 'status',
        render: (_, { id }) => {
          return <>
            {user.isAdmin ? <Link to={`update-information/${id}`}>Cập nhật</Link> : ''}
          </>
        }
      },
      {
        title: '',
        dataIndex: 'status2',
        key: 'status2',
        render: (_, { }) => {
          return <a>Nghe</a>
        }
      },
    ]

    const rowSelection = {
      onChange: (selectedRowKeys: number, selectedRows: any, ) => {
      }
    };

    return (
        <div className="record">
          <h3>Kho bản ghi</h3>
          <div>
            <div>
              <InputSearch
                placeholder='Tên bản ghi...'
                name='searchRecord'
                setValue=''
              />
            </div>
            <div>
              <div className="options">
                <div>
                  <p>Thể loại: </p>
                  <CustomDropdown menuProps={menuProps} orange />
                </div>
                <div>
                  <p>Định dạng: </p>
                  <CustomDropdown menuProps={menuProps} orange />
                </div>
                <div>
                  <p>Thời hạn sử dụng: </p>
                  <CustomDropdown menuProps={menuProps} orange />
                </div>
                <div>
                  <p>Trạng thái: </p>
                  <CustomDropdown menuProps={menuProps} orange />
                </div>
                <div className="switch">
                  <span className={displaySwitch === 'row' ? `active-switch` : ''}>
                    <UnorderedListOutlined />
                  </span>
                  <span className={displaySwitch === 'table' ?  `active-switch` : ''}>
                    <AppstoreOutlined />
                  </span>
                </div>
              </div>
            </div>
            <CustomTable 
                rowSelection={displayRowSelection ? rowSelection : false} 
                pagination={{pageSize: displayRowSelection ? 8 : 9}} columns={columns} 
                dataSource={dataSource} 
                heightProps={66} 
            />
        </div>
        <FeatureInPage featureProps={featureProps} />
      </div>
    )
}

export default Record