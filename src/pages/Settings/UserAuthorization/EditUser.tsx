import React, { useState, useEffect } from 'react'
import './EditUser.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Option from '../../../components/option/Option'
import Input from '../../../components/input/Input'
import Swal from 'sweetalert2'
import { Button, Typography, Radio } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { updateDocumentConfig } from '../../../hooks/updateDocument'
import { FiKey, FiUserX } from 'react-icons/fi'

const EditUser: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ detailUserInfo, setDetailUserInfo ] = useState<any>(false);
    const [ updateUserInfo, setUpdateUserInfo ] = useState<any>()

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
        const getData = async () => {
            const docRef = doc(db, "user", `${id}`);
            try {
                await getDoc(docRef)            
                .then((res) => {
                    setDetailUserInfo(res.data())
                    setUpdateUserInfo(res.data())
                })
            } catch(err) {
                console.log(err);
            }
        }
        getData()
    }, [])

    const handleUpdateUserToFirebase = async () => {
        const params = {
            documentName: 'user',
            id: id,
            data: updateUserInfo
        }
        
        const update = await updateDocumentConfig(params)

        if(update) {
            navigate(`../user-authorization`);
            Toast.fire({
                icon: 'success',
                title: 'Cập nhật thông tin thành công!',
                background: '#727288',
                color: '#C8C8DB',
            })
        }
        else {
            Toast.fire({
                icon: 'error',
                title: 'Cập nhật thông tin thất bại!',
                background: '#727288',
                color: '#C8C8DB',
            })
        }
    }

    const handleChangeInput = (e: any) => {
        const name = e.name;
        const value = e.value;

        setUpdateUserInfo({
            ...updateUserInfo,
            [name]: value
        })
    }

    const onChangeRadio = (e: any) => {

    }
    
    const breadcrumbs = [
        {
          key: 1,
          path: '',
          namePage: 'Cài đặt'
        },
        {
          key: 2,
          path: '../user-authorization',
          namePage: 'Phân quyền người dùng'
        },
        {
          key: 3,
          path: '',
          namePage: 'Chỉnh sửa'
        }
      ]

      const optionProps = [
        {
            icon: FiUserX,
            text: "Xóa người dùng"
        },
        {
            icon: FiKey,
            text: 'Khôi phục mật khẩu'
        }
    ]

  return (
    <>
        {detailUserInfo && <div className="edit-user-info">
            <div>
                <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <div>
                <h3>Chỉnh sửa thông tin nguời dùng</h3>
            </div>
            <div className='content'>
                <div>
                    <span>
                        <h5>Tên người dùng: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={300} 
                            value={detailUserInfo.displayName}  
                            name="displayName"
                            setValue={handleChangeInput}
                        />
                    </span>
                    <span>
                        <h5>Số điện thoại: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={300} 
                            value={detailUserInfo.phone}  
                            name="phone"
                            setValue={handleChangeInput}
                        />
                    </span>
                    <span>
                        <h5>Ngày hết hạn: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={200} 
                            value="" 
                            name="expiryDate"
                            setValue={handleChangeInput}
                        />
                    </span>
                    <span>
                        <h5>Vai trò: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input type='text' width={300} value="Group Admin" />
                    </span>
                    <span>
                        <Typography style={{color: '#C8C8DB'}}><b style={{color: '#FF0000'}}>*</b> là những trường thông tin bắt buộc</Typography>
                    </span>
                </div>
                <div>
                    <span>
                        <h5>Email: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text'
                            width={300} 
                            value={detailUserInfo.email}
                            name="email"
                            setValue={handleChangeInput}
                        />
                    </span>
                    <span>
                        <h5>Tên đăng nhập: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text'
                            width={300} 
                            value={`${detailUserInfo.userName}`} 
                            name="userName"
                            setValue={handleChangeInput}
                        />
                    </span> 
                    <span>
                        <h5>Mật khẩu: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='password' 
                            width={300} 
                            value={'abc123'}
                        />
                    </span>
                    <span>
                        <h5>Trạng thái: <i style={{color: '#FF0000'}}>*</i></h5>
                        <div>
                            <form action="">
                                <input 
                                    type="radio" 
                                    value="person" 
                                    name="authorizedPerson" 
                                    id='person'
                                    onChange={onChangeRadio}
                                    checked={detailUserInfo.status ? true : false}
                                />
                                <label htmlFor="person">Đang hoạt động</label>
                                <input 
                                    type="radio" 
                                    value="organization" 
                                    name="authorizedPerson" 
                                    id='organization'
                                    onChange={onChangeRadio}
                                    checked={detailUserInfo.status ? false : true}
                                /> 
                                <label htmlFor="organization">Ngừng hoạt động</label>
                            </form>
                        </div>
                    </span>
                </div>
            </div>
            <div className='button'>
                <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => navigate('../../user-authorization')}><b>Hủy</b></Button>
                <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleUpdateUserToFirebase}><b>Lưu</b></Button>
            </div>
            <Option optionProps={optionProps} />
        </div>}
    </>
  )
}

export default EditUser