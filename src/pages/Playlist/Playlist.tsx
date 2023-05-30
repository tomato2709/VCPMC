import { useState, useEffect } from 'react'
import Option from '../../components/option/Option'
import InputSearch from '../../components/input/search/Search'
import CustomTable from '../../components/table/Table'
import MultipleSelect from '../../components/select/multipleSelect/MultipleSelect'
import Grid from '../../components/grid/Grid'
import { ColumnsType } from 'antd/es/table'
import { MdPlaylistAdd } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'
import { useSnapshot } from '../../hooks/useSnapshot'
import { DataTypePlaylist, fetchPlaylist } from '../../redux/slice/playlistSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'

const Playlist: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.user)
  const { playlist } = useAppSelector(state => state.playlist);
  const [ playlistStore, setPlaylistStore ] = useState<DataTypePlaylist[]>(playlist);
  const { snapshot } = useSnapshot('playlist');
  const [ search, setSearch ] = useSearch(playlist, 'title');
  const [ viewStyle, setViewStyle ] = useState('table')
  const [ selectedRow, setDisplayRowSelection ] = useState(false)

  useEffect(() => {
    setPlaylistStore(search)
  }, [search])

  useEffect(() => {
    dispatch(fetchPlaylist())
    setPlaylistStore(snapshot)
  }, [snapshot])

  const handleChangeSetSearchValue = (e: any) => {
    const value = e.value;
    setSearch(value)
  }
  
  const handleClickAddNewPlaylist = () => {
    user.isAdmin ? navigate('add-playlist') : navigate('playlist')
  }
  
  const optionProps = [
    {
      icon: MdPlaylistAdd,
      text: 'Thêm Playlist',
      event: handleClickAddNewPlaylist,
      unActive: user.isAdmin ? false : true
    }
  ]

  const dataSource: DataTypePlaylist[] = playlistStore
  const columns: ColumnsType<DataTypePlaylist> = [
    {
      title: 'STT',
      dataIndex: 'key',
      key: 'key',
      render: (_, {}, index) => {
        return <p>{index + 1}</p>
      }
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Số bản ghi',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, {recordID}) => {
        return <p>{recordID?.length}</p>
      }
    },
    {
      title: 'Thời lượng',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: 'Chủ đề',
      dataIndex: 'topic',
      key: 'topic',
      render: (_, {genres}) => {
        return <MultipleSelect selectItems={genres} />
      }
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createAt',
      key: 'createAt'
    },
    {
      title: 'Người tạo',
      dataIndex: 'author',
      key: 'author'
    },
    {
      title: '',
      dataIndex: 'detail',
      key: 'detail',
      render: (_, {id}) => {
        return <Link to={`detail/${id}`}>Chi tiết</Link>
      }
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys: number, selectedRows: any, ) => {
    }
  };

  return (
    <div className="playlist">
        <h3>Playlist</h3>
        <div>
          <InputSearch 
              placeholder='Tìm kiếm chủ đề, người tạo...' 
              setValue={handleChangeSetSearchValue}  
          />
        </div>
        <div>
          <CustomTable pagination={{pageSize: 10}} columns={columns} dataSource={dataSource} heightProps={70} /> 
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default Playlist