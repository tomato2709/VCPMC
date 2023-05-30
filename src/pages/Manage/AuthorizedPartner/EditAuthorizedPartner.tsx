import React, { useState, useEffect } from 'react'
import './EditAuthorizedPartner.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Input from '../../../components/input/Input'
import Swal from 'sweetalert2'
import { Button, Typography, Radio } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { updateDocumentConfig } from '../../../hooks/updateDocument'

const EditAuthorizedPartner: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ detailAuthorizedPartner, setDetailAuthorizedPartner ] = useState<any>(false);
    const [ updateAuthorizedPartner, setUpdateAuthorizedPartner ] = useState<any>()

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
            const docRef = doc(db, "authorized-partner", `${id}`);
            try {
                await getDoc(docRef)            
                .then((res) => {
                    setDetailAuthorizedPartner(res.data())
                    setUpdateAuthorizedPartner(res.data())
                })
            } catch(err) {
                console.log(err);
            }
        }
        getData()
    }, [])

    const handleUpdateAuthorizedPartnerToFirebase = async () => {
        const params = {
            documentName: 'authorized-partner',
            id: id,
            data: updateAuthorizedPartner
        }
        
        const update = await updateDocumentConfig(params)

        if(update) {
            navigate(`../manage-authorized-partner`);
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

        setUpdateAuthorizedPartner({
            ...updateAuthorizedPartner,
            [name]: value
        })
    }

    const onChangeRadio = (e: any) => {

    }
    
    const breadcrumbs = [
        {
          key: 1,
          path: '',
          namePage: 'Quản lý'
        },
        {
          key: 2,
          path: '../manage-authorized-partner',
          namePage: 'Đối tác uỷ quyền'
        },
        {
          key: 3,
          path: '',
          namePage: 'Cập nhật thông tin người dùng'
        }
      ]

  return (
    <>
        {detailAuthorizedPartner && <div className="edit-auth-partner">
            <div>
                <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <div>
                <h3>Cập nhật thông tin</h3>
            </div>
            <div className='content'>
                <div>
                    <span>
                        <h5>Tên người dùng: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={300} 
                            value={detailAuthorizedPartner.fullName}  
                            name="fullName"
                            setValue={handleChangeInput}
                        />
                    </span>
                    <span>
                        <h5>Email: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={300} 
                            value={detailAuthorizedPartner.email}  
                            name="email"
                            setValue={handleChangeInput}
                        />
                    </span>
                    <span>
                        <h5>Số điện thoại: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text' 
                            width={200} 
                            value={detailAuthorizedPartner.phone} 
                            name="phone"
                            setValue={handleChangeInput}
                        />
                    </span>
                    <span>
                        <h5>Vai trò: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input type='text' width={300} value="QA" />
                    </span>
                    <span>
                        <Typography style={{color: '#C8C8DB'}}><b style={{color: '#FF0000'}}>*</b> là những trường thông tin bắt buộc</Typography>
                    </span>
                </div>
                <div>
                    <span>
                        <h5>Tên đăng nhập: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='text'
                            width={300} 
                            value={`${detailAuthorizedPartner.userName}`} 
                            name="userName"
                            setValue={handleChangeInput}
                        />
                    </span> 
                    <span>
                        <h5>Mật khẩu: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input 
                            type='password' 
                            width={300} 
                            value={'12345678'}
                        />
                    </span>
                    <span>
                        <h5>Nhập lại mật khẩu: <i style={{color: '#FF0000'}}>*</i></h5>
                        <Input type='password' width={300} value={'12345678'} />
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
                                    checked={detailAuthorizedPartner.status ? true : false}
                                />
                                <label htmlFor="person">Đã kích hoạt</label>
                                <input 
                                    type="radio" 
                                    value="organization" 
                                    name="authorizedPerson" 
                                    id='organization'
                                    onChange={onChangeRadio}
                                    checked={detailAuthorizedPartner.status ? false : true}
                                /> 
                                <label htmlFor="organization">Ngưng kích hoạt</label>
                            </form>
                        </div>
                    </span>
                </div>
            </div>
            <div className='button'>
                <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => navigate('../../manage-authorized-partner')}><b>Hủy</b></Button>
                <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleUpdateAuthorizedPartnerToFirebase}><b>Lưu</b></Button>
            </div>
        </div>}
    </>
  )
}

export default EditAuthorizedPartner