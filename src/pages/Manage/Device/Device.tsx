import React, { useEffect, useState } from 'react'
import './Device.css'
import CustomTable from '../../../components/table/Table';
import Option from '../../../components/option/Option';
import InputSearch from '../../../components/input/search/Search';
import { Select } from 'antd';
import Swal from 'sweetalert2';
import { ColumnsType } from 'antd/es/table';
import { MdAdd } from 'react-icons/md';
import { FiPower } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { RiDeleteBinFill } from 'react-icons/ri';
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate, Link } from 'react-router-dom';
import { useSearch } from '../../../hooks/useSearch';
import { useSnapshot } from '../../../hooks/useSnapshot';
import { DataTypeDevice, fetchDevice } from '../../../redux/slice/deviceSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const ManageDevice: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { user } = useAppSelector(state => state.user)
  const { snapshot } = useSnapshot('device');
  const { devices } = useAppSelector(state => state.device)
  const [ listDevice, setListDevice ] = useState<DataTypeDevice[]>(devices)
  const [ removeDevice, setRemoveDevice ] = useState<DataTypeDevice[]>([]);
  const [ search, setSearch ] = useSearch(snapshot, 'nameDevice');
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
  const [ title ] = useState("VCPMC | Quản lý thiết bị");

    useEffect(() => {
        document.title = title;
    }, [title]);

  useEffect(() => {
    setListDevice(search)
  }, [search])

  useEffect(() => {
    dispatch(fetchDevice())
    setListDevice(snapshot)
  }, [snapshot])

  const handleSearch = (e: any) => {
    const value = e.value;
    setSearch(value)
  }

  const handleRemoveDevice = () => {
   if(removeDevice.length) {
    removeDevice.forEach(async (item)   => {
      const docRef = doc(db, 'device', `${item.id}`)
      await deleteDoc(docRef)
    })
    return 
   }
   Toast.fire({
    icon: 'warning',
    title: 'Chưa chọn thiết bị',
    background: '#727288',
    color: '#C8C8DB',
  })
  }

  const optionProps = [
    {
      icon: MdAdd,
      text: 'Thêm thiết bị',
      event: () => {
        navigate('add-device')
      },
      unActive: user.isAdmin ? false : true
    },
    {
      icon: FiPower,
      text: 'Kích hoạt thiết bị',
      unActive: user.isAdmin ? false : true
    },
    {
      icon: FiLock,
      text: 'Khóa thiết bị',
      unActive: user.isAdmin ? false : true
    },
    {
      icon: RiDeleteBinFill,
      text: 'Xóa thiết bị',
      event: () => {
        handleRemoveDevice()
      },
      unActive: user.isAdmin ? removeDevice.length ? false : true : true
    }
  ]

  const dataSource: DataTypeDevice[] = listDevice
  const columnsTable: ColumnsType<DataTypeDevice> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, {}, index) => (
        <p>{index + 1}</p>
      ),
      fixed: 'left'
    },
    {
      title: 'Tên thiết bị',
      dataIndex: 'deviceName',
      key: 'deviceName',
      fixed: 'left',
      render: (_, {deviceName}) => {
        return <>
            {user.isAdmin ? <Link to={`device-detail`}>{deviceName}</Link> : ''}
          </>
      }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (_, {status}) => (
        <>{status ? 
          <p><RxDotFilled color="lime" />Đang kích hoạt | Đang hoạt động</p> : 
          <p><RxDotFilled color="red" />Ngừng kích hoạt</p>}</>
      ),
      fixed: 'left'
    },
    {
        title: 'Hạn hợp đồng',
        dataIndex: 'contractExpiryDate',
        key: 'contractExpiryDate'
    },
    {
        title: 'Tên đăng nhập',
        dataIndex: 'userName',
        key: 'userName'
    },
    {
      title: 'Địa điểm',
      dataIndex: 'address',
      key: 'address'
    },
    {
        title: 'Memory',
        dataIndex: 'memory',
        key: 'memory',
        render: (_, {memory}) => (
          <p>{memory}GB/32GB</p>
        )
    },
    {
        title: 'MAC Address',
        dataIndex: 'macAddress',
        key: 'macAddress'
    },
    {
        title: 'SKU/ID',
        dataIndex: 'skuID',
        key: 'skuID'
    },
    {
        title: 'Hạn bảo hành',
        dataIndex: 'warrantyPeriod',
        key: 'warrantyPeriod'
      },
  ]
  
  const rowSelection = {
    onChange: (selectedRowKeys: number, selectedRows: any, ) => {
      setRemoveDevice(selectedRows)
    }
  };

  const scroll = {
    x: 1000
  }

  return (
    <div className="manage-device">
        <h3>Danh sách thiết bị</h3>
        <div className="dropdown-search-area">
            <div className="select-wrap">
            <Select
                options={[
                    {
                    value: "all",
                    label: "Tất cả",
                    },
                    {
                    value: "bachhoaxanh",
                    label: "Công ty TMCP Bách Hóa Xanh",
                    },
                    {
                    value: "xyz",
                    label: "Công ty TNHH XYZ",
                    },
                    {
                    value: "adora",
                    label: "Công ty TMCP Adora",
                    },
                ]}
                style={{ width: 280 }}
                defaultValue="Chọn nhóm tài khoản"
            ></Select>
            <Select
                options={[
                    {
                    value: "mac",
                    label: "MAC Address",
                    },
                    {
                    value: "memory",
                    label: "Memory",
                    },
                    {
                    value: "skuid",
                    label: "SKU/ID",
                    },
                    {
                    value: "hanbaohanh",
                    label: "Hạn bảo hành",
                    },
                    {
                    value: "tendangnhap",
                    label: "Tên đăng nhập",
                    },
                    {
                    value: "trangthai",
                    label: "Trạng thái",
                    },
                    {
                    value: "diadiem",
                    label: "Địa điểm",
                    },
                    {
                    value: "hanhopdong",
                    label: "Hạn hợp đồng",
                    },
                ]}
                style={{ width: 220 }}
                defaultValue="Ẩn hiện cột"
            ></Select>
            </div>
            <div>
                <InputSearch 
                placeholder='Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac' 
                setValue={handleSearch}  
                />
            </div>
        </div>
        <div>
            <CustomTable 
                pagination={true} 
                rowSelection={rowSelection} 
                columns={columnsTable} 
                dataSource={dataSource}
                widthProps={94}
                heightProps={70}
                scroll={scroll} 
            />
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default ManageDevice