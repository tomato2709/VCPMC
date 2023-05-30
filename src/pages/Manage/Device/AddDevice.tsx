import React, { useState } from 'react'
import './AddDevice.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Input from '../../../components/input/Input'
import { Typography, Button } from 'antd'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { DataTypeDevice } from '../../../redux/slice/deviceSlice'
import { useAppSelector } from '../../../redux/store'

let today: any = new Date();
today = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();

const AddDevice: React.FC = () => {
    const navigate = useNavigate()
    const { devices } = useAppSelector(state => state.device)
    const [ newDevice, setNewDevice ] = useState<DataTypeDevice>({
        key: Math.floor(Math.random() * 10000),
        macAddress: '',
        address: '',
        capacity: 0,
        duration: '',
        memory: '',
        deviceName: '',
        password: '',
        skuID: '',
        status: 'active',
        userName: '',
        time: today,
        desc: '',
        warrantyPeriod: '',
        label: '',
        information: '',
        note: '',
        location: '',
        contractExpiryDate: ''
    })

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

    const breadcrumb = [
        {
          key: 1,
          path: '../manage-device',
          namePage: 'Danh sách thiết bị'
        },
        {
          key: 3,
          path: '',
          namePage: 'Thêm thiết bị mới'
        }
      ]
    const handleChangeSetNewDevice = (e: any) => {
        const name = e.name;
        const value = e.value;

        setNewDevice({
            ...newDevice,
            [name]: value
        })
    }

    const handleAddNewDeviceToFirebase = async () => {
        const docRef = doc(collection(db, "device"))
        try{
            await setDoc(docRef, newDevice)
                .then((res) => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Thêm thiết bị thành công!',
                        background: '#727288',
                        color: '#C8C8DB',
                    })
                    navigate('../manage-device')
                })
        } catch(err) {
            console.log(newDevice);
            Toast.fire({
                icon: 'error',
                title: 'Thêm thiết bị thất bại!',
                background: '#727288',
                color: '#C8C8DB'
            })
        }
    }
    
  return (
    <div className="add-device">
        <div>
            <Breadcrumbs crumbs={breadcrumb} />
        </div>
        <div>
            <h3>Thêm thiết bị mới</h3>
        </div>
        <div className="content">
            <div>
                <span>
                    <h5>Tên thiết bị:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={280} height={35} type="text" name='deviceName' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>SKU/ID:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={280} height={35} type="text" name='skuID' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Địa chỉ Mac:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={280} type="text" name='macAddress' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Thời hạn bảo hành:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={200} height={35} type="date" name='duration' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Label:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={200} height={35} type="text" name='label' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Thông tin:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={200} height={35} type="text" name='information' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Ghi chú: </h5>
                    <textarea name="" id="" cols={34} rows={4} onChange={(e) => setNewDevice({...newDevice, desc: e.target.value})}></textarea>
                </span>
                <span>
                    <Typography style={{color: '#C8C8DB'}}><b style={{color: '#FF0000'}}>*</b> là những trường thông tin bắt buộc</Typography>
                </span>
            </div>
            <div>
                <span>
                    <h5>Memory:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={280} type="text" name='memory' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Dung lượng:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={280} type="text" name='capacity' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Tên đăng nhập:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={280} height={35} type="text" name='userName' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Mật khẩu:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={280} height={35} type="password" name='password' setValue={handleChangeSetNewDevice} />
                </span>
                <span>
                    <h5>Vị trí:<b style={{color: '#FF0000'}}> *</b></h5>
                    <Input width={280} height={35} type="text" name='location' setValue={handleChangeSetNewDevice} />
                </span>
            </div>
        </div>
        <div className='button'>
            <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => navigate("../manage-device")}><b>Hủy</b></Button>
            <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleAddNewDeviceToFirebase}><b>Lưu</b></Button>
        </div>
    </div>
  )
}

export default AddDevice