import React, { useState } from "react";
import './Dashboard.css'
import Ava from '../../assets/avatar_test.png'
import Input from "../../components/input/Input";
import Option from "../../components/option/Option";
import { Avatar, Button, Modal, DatePicker } from "antd";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { SlNote } from 'react-icons/sl'
import { RxLockClosed } from 'react-icons/rx'
import { MdOutlineLogout } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getAuth, updatePassword } from 'firebase/auth'
import { deleteUser } from '../../redux/slice/userSlice'
import { updateDocumentConfig } from '../../hooks/updateDocument'
import { logOut } from '../../config/userAuthentication'

const Dashboard: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const auth = getAuth();
    const currentUser: any = auth.currentUser;
    const { user } = useAppSelector((state) => state.user);
    const [ updateUser, setUpdateUser ] = useState(false)
    const [ openModal, setOpenModal ] = useState(false)
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
    const [ updatePass, setUpdatePass ] = useState({
        newPassword: '',
        confirmPassword: '',
    })
    const [ infoUser, setInfoUser ] = useState<any>({
        birthday: user.birthday,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
    })

    const onClickLogout = async (e: string) => {
        try {
            await logOut();
            dispatch(deleteUser());
            navigate('../login')
        } catch(err) {
            Toast.fire({
                icon: 'error',
                title: 'Lỗi đăng xuất!',
                background: '#727288',
                color: '#C8C8DB'
            })
        }
    }

    const handleUpdateUserInformation = (e: any) => {
        const name = e.name;
        const value = e.value;

        setInfoUser({
            ...infoUser,
            [name]: value
        })
    }

    const handleUpdateFirestoreDatabase = async () => {
        const params = {
            documentName: 'user',
            id: user.id,
            data: infoUser
        }
          
        const update = await updateDocumentConfig(params);
        if(update) {
            Toast.fire({
                icon: 'success',
                title: 'Chỉnh sửa thành công',
                background: '#727288',
                color: '#C8C8DB',
            })
            setUpdateUser(false)
            return
        } 
        Toast.fire({
            icon: 'error',
            title: 'Chỉnh sửa thất bại',
            background: '#727288',
            color: '#C8C8DB'
        })
    }

    const handleClickOkOnModal = async () => {
        if(updatePass.newPassword === updatePass.confirmPassword){
            try{
                await updatePassword(currentUser, updatePass.newPassword)
                    .then(res => {
                        setOpenModal(false)
                        Toast.fire({
                            icon: 'success',
                            title: 'Đổi mật khẩu thành công',
                            background: '#727288',
                            color: '#C8C8DB',
                        })
                    })
            } catch(err) {
                console.log(err);
                Toast.fire({
                    icon: 'error',
                    title: 'Đổi mật khẩu thất bại',
                    background: '#727288',
                    color: '#C8C8DB'
                })
            }
            return
        }
        Toast.fire({
            icon: 'error',
            title: 'Đổi mật khẩu thất bại',
            background: '#727288',
            color: '#C8C8DB'
        })
    }

    const handleChangePassword = (e: any) => {
        const name = e.name;
        const value = e.value;
        setUpdatePass({
            ...updatePass,
            [name]: value
        })
    }

    const optionProps = [
        {
            icon: SlNote,
            text: "Sửa thông tin",
            event: () => setUpdateUser(true)
        },
        {
            icon: RxLockClosed,
            text: 'Đổi mật khẩu',
            event: () => setOpenModal(true)

        },
        {
            icon: MdOutlineLogout,
            text: 'Đăng xuất',
            event: onClickLogout
        }
    ]

    return (
        <div className="dashboard">
            <div>
                <h3>Thông tin cơ bản</h3>
            </div>
            <div className="info">
                <div className="avatar">
                    <div>
                        <Avatar src={Ava} style={{ backgroundColor: '#f56a00', fontSize: 35}} size={170}>{user.avatar ?? user?.lastName.charAt(0).toUpperCase()}</Avatar>
                    </div>
                    <h4>{user.displayName}</h4>
                </div>
                <form className="infoUser">
                    <div>
                        <div>
                            <p>Họ: </p>
                            <Input 
                                type='text' 
                                width={274}
                                value={user.lastName} 
                                disabled={updateUser ? false : true} 
                                name="lastName"
                                setValue={handleUpdateUserInformation}
                            />
                        </div>
                        <div>
                            <p>Tên: </p>
                            <Input 
                                type='text' 
                                width={274} 
                                value={user.firstName} 
                                disabled={updateUser ? false : true} 
                                name="firstName"
                                setValue={handleUpdateUserInformation}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Ngày sinh: </p>
                            <Input 
                                type='text' 
                                width={274} 
                                value={user.birthday} 
                                disabled={updateUser ? false : true}
                                name="birthday"
                                setValue={handleUpdateUserInformation}
                            />
                        </div>
                        <div>
                            <p>Số điện thoại: </p>
                            <Input 
                                type='text' 
                                width={274} 
                                value={user.phone} 
                                disabled={updateUser ? false : true}
                                name="phone"
                                setValue={handleUpdateUserInformation}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Email: </p>
                            <Input 
                                type="email" 
                                width={571} 
                                value={user.email}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Tên đăng nhập: </p>
                            <Input 
                                type="email" 
                                width={571} 
                                value={user.email}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Phân quyền: </p>
                            <Input 
                                type="text" 
                                width={274} 
                                value={user.isAdmin ? "Admin" : 'Người dùng'}
                                disabled={true}
                            />
                        </div>
                    </div>
                </form>
            </div>
            {updateUser && <div className="button">
                <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => setUpdateUser(false)}><b>Hủy</b></Button>
                <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleUpdateFirestoreDatabase}><b>Lưu</b></Button>
            </div>}
            <Modal className="customModal"
            title="Thay đổi mật khẩu"
            open={openModal}
            okText="Lưu"
            cancelText="Hủy"
            onOk={handleClickOkOnModal}
            onCancel={() => setOpenModal(false)}
            >
                <form action="">
                    <div>
                        <p>Mật khẩu hiện tại: </p>
                        <Input width={471} type="password" name="password" value={user.password} setValue={handleChangePassword} />
                    </div>
                    <div>
                        <p>Mật khẩu mới:</p>
                        <Input width={471} require type="password" name="newPassword" setValue={handleChangePassword} />
                    </div>
                    <div>
                        <p>Nhập lại mật khẩu mới:</p>
                        <Input width={471} require type="password" name="confirmPassword" setValue={handleChangePassword} />
                    </div>
                </form>
            </Modal>
            <Option optionProps={optionProps} />
        </div>
      )
}

export default Dashboard;