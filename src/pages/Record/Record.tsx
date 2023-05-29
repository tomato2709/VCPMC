import React, { useState, useEffect } from 'react'
import './Record.css'
import InputSearch from '../../components/input/search/Search'
import Option from '../../components/option/Option';
import CustomTable from '../../components/table/Table';
import Grid from '../../components/grid/Grid';
import { Link } from 'react-router-dom';
import { Select, Modal } from 'antd'
import Swal from 'sweetalert2';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { SlNote } from 'react-icons/sl';
import { RxDotFilled } from 'react-icons/rx';
import { useSearch } from '../../hooks/useSearch';
import { useSnapshot } from '../../hooks/useSnapshot';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { DataTypeRecord, fetchRecord } from '../../redux/slice/recordSlice';
import YouTube, { YouTubeProps } from 'react-youtube';

const Record: React.FC = () => {
    const [ viewStyle, setViewStyle ] = useState('table')
    const [ selectedRow, setDisplayRowSelection ] = useState(false)
    const [ openModal, setOpenModal ] = useState(false)
    const [ openVideoPlayer, setOpenVideoPlayer ] = useState(false)
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.user)
    const recordStore = useAppSelector(state => state.record.record)
    const [ record, setRecord ] = useState(recordStore)
    const { snapshot } = useSnapshot('record')
    const [ search, setSearch ] = useSearch(recordStore, 'nameMusic')
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 800,
      heightAuto: false,
      customClass: 'swal-height',
      showClass: {
          popup: 'animate__animated animate__fadeIn'
      },
    })

    useEffect(() => {
      setRecord(search)
    }, [search])
  
    useEffect(() => {
      dispatch(fetchRecord());
    }, [])

    useEffect(() => {
      setRecord(snapshot)
    }, [snapshot])

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  
    const opts: YouTubeProps['opts'] = {
      height: '290',
      width: '460',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleSearch = (e: any) => {
      const value = e.value;
      setSearch(value);
    }

    const handleApproveRecord = () => {
      setDisplayRowSelection(false);
      Toast.fire({
        icon: 'success',
        title: 'Đã phê duyệt',
        background: '#727288',
        color: '#C8C8DB',
    })
    }

    const handleCancelApproveRecord = () => {
      setDisplayRowSelection(false);
      setOpenModal(false);
      Toast.fire({
        icon: 'error',
        title: 'Đã hủy phê duyệt',
        background: '#727288',
        color: '#C8C8DB'
      })
    }

    const optionProps = selectedRow ? [
      {
        icon: AiOutlineCheck,
        text: 'Phê duyệt',
        event: handleApproveRecord,
        color: '#0FBF00'
      },
      {
        icon: FaTimes,
        text: 'Từ chối',
        event: () => setOpenModal(true)
      }
    ] :[
      {
        icon: SlNote,
        text: "Quản lí phê duyệt",
        event: () => {
          user.isAdmin ? setDisplayRowSelection(true) : setDisplayRowSelection(false)
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
          return <>{status 
            ? <p><RxDotFilled color="#347AFF" />Còn thời hạn <div className="expiry-date">{record[0].date}</div></p> 
            : <p><RxDotFilled color="gray" />Hết thời hạn <div className="expiry-date">{record[0].date}</div></p>
            }
            </>
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
          return <>
          <a onClick={() => setOpenVideoPlayer(true)}>Nghe</a>
          <Modal className="customModal"
            open={openVideoPlayer}
            onCancel={() => setOpenVideoPlayer(false)}
            footer={null}
            >
                <YouTube videoId="rYjQAzZfpMw" opts={opts} onReady={onPlayerReady} />
            </Modal>
          </>
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
                setValue={handleSearch}
              />
            </div>
            <div>
              <div className="options">
                <div className="select-wrap">
                  <p>Thể loại: </p>
                  <Select
                    options={[
                      {
                        value: "all",
                        label: "Tất cả",
                      },
                      {
                        value: "pop",
                        label: "Pop",
                      },
                      {
                        value: "edm",
                        label: "EDM",
                      },
                      {
                        value: "ballad",
                        label: "Ballad",
                      },
                    ]}
                    style={{ width: 90 }}
                    defaultValue="Tất cả"
                  ></Select>
                </div>
                <div className="select-wrap">
                  <p>Định dạng: </p>
                  <Select
                    options={[
                      {
                        value: "all",
                        label: "Tất cả",
                      },
                      {
                        value: "audio",
                        label: "Âm thanh",
                      },
                      {
                        value: "video",
                        label: "Video",
                      },
                    ]}
                    style={{ width: 120 }}
                    defaultValue="Tất cả"
                  ></Select>
                </div>
                <div className="select-wrap">
                  <p>Thời hạn sử dụng: </p>
                  <Select
                    options={[
                      {
                        value: "all",
                        label: "Tất cả",
                      },
                      {
                        value: "current",
                        label: "Còn thời hạn",
                      },
                      {
                        value: "outdate",
                        label: "Hết hạn",
                      },
                    ]}
                    style={{ width: 120 }}
                    defaultValue="Tất cả"
                  ></Select>
                </div>
                <div className="select-wrap">
                  <p>Trạng thái: </p>
                  <Select
                    options={[
                      {
                        value: "all",
                        label: "Tất cả",
                      },
                      {
                        value: "by-user",
                        label: "Duyệt bởi người dùng",
                      },
                      {
                        value: "by-auto",
                        label: "Duyệt tự động",
                      },
                    ]}
                    style={{ width: 200 }}
                    defaultValue="Tất cả"
                  ></Select>
                </div>
                <div className="switch">
                  <span className={viewStyle === 'table' ? `active-switch` : ''} onClick={() => setViewStyle('table')}>
                    <UnorderedListOutlined />
                  </span>
                  <span className={viewStyle === 'grid' ?  `active-switch` : ''} onClick={() => setViewStyle('grid')}>
                    <AppstoreOutlined />
                  </span>
                </div>
              </div>
            </div>
            {viewStyle === 'table' &&
            <CustomTable 
                rowSelection={selectedRow ? rowSelection : false} 
                pagination={{pageSize: selectedRow ? 8 : 9}} columns={columns} 
                dataSource={dataSource} 
                heightProps={66} 
            />
            }
            {viewStyle === 'grid' &&
              <div className="gridViewRecord">
                {record.length 
                ? record.map(item => (<Grid selectedRow={selectedRow} record={item} />)) 
                : <p className="recordNotFound">Không tìm thấy bản ghi</p>}
              </div>
            }
        </div>
        <Modal className="customModal"
            title="Lý do từ chối phê duyệt"
            open={openModal}
            okText="Từ chối"
            cancelText="Hủy"
            onOk={handleCancelApproveRecord}
            onCancel={() => setOpenModal(false)}
            >
                <form action="">
                    <div>
                        <textarea 
                            cols={61} rows={11} 
                            placeholder='Cho chúng tôi biết lý do bạn muốn từ chối phê duyệt bản ghi này...'
                            name='content'
                            defaultValue=''
                            onChange={(e: any) => ''}
                        ></textarea>
                    </div>
                </form>
            </Modal>
        <Option optionProps={optionProps} />
      </div>
    )
}

export default Record