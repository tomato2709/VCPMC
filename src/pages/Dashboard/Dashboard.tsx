import React, { useState } from "react";
import './Dashboard.css'
import Ava from '../../assets/avatar_test.png'
import Input from "../../components/input/Input";
import Feature from "../../components/feature/Feature";
import CustomModal from "../../components/modal/Modal";
import { Avatar, Button, message, Modal } from "antd";
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
    const [ updatePass, setUpdatePass ] = useState({
        newPassword: '',
        confirmPassword: '',
    })
    const [ infoUser, setInfoUser ] = useState<any>({
        birthday: user.birthday,
        firstName: user.firstName,
        lastName: '',
        phone: user.phone,
    })

    const onClickLogout = async (e: string) => {
        try {
            await logOut();
            dispatch(deleteUser());
            navigate('../login')
        } catch(err) {
            message.error("error")
        }
    }

    const handleChangeUpdateInfoUser = (e: any) => {
        const name = e.name;
        const value = e.value;

        setInfoUser({
            ...infoUser,
            [name]: value
        })
    }

    const handleClickUpdateUserToFireStore = async () => {
        const params = {
            documentName: 'user',
            id: user.id,
            data: infoUser
        }
          
        const update = await updateDocumentConfig(params);
        if(update) {
            message.success("Chỉnh sửa thành công")
            setUpdateUser(false)
            return
        } 
        message.error("Chỉnh sửa thất bại")
    }

    const handleClickOnOkModal = async () => {
        if(updatePass.newPassword === updatePass.confirmPassword){
            try{
                await updatePassword(currentUser, updatePass.newPassword)
                    .then(res => {
                        setOpenModal(false)
                        message.success('Đổi mật khẩu thành công')
                    })
            } catch(err) {
                console.log(err);
                message.error("Đổi mật khẩu thất bại")
            }
            return
        }
        message.error("Đổi mật khẩu thất bại")
    }

    const handleChangeValuePassword = (e: any) => {
        const name = e.name;
        const value = e.value;
        setUpdatePass({
            ...updatePass,
            [name]: value
        })
    }

    const featureProps = [
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
                        <Avatar style={{ backgroundColor: '#f56a00', fontSize: 35}} size={170}>{user.avatar ?? user?.lastName.charAt(0).toUpperCase()}</Avatar>
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
                                setValue={handleChangeUpdateInfoUser}
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
                                setValue={handleChangeUpdateInfoUser}
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
                                setValue={handleChangeUpdateInfoUser}
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
                                setValue={handleChangeUpdateInfoUser}
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
                <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleClickUpdateUserToFireStore}><b>Lưu</b></Button>
            </div>}
            <Modal className="customModal"
            title="Thay đổi mật khẩu"
            open={openModal}
            onOk={handleClickOnOkModal}
            onCancel={() => setOpenModal(false)}
            >
                <form action="">
                    <div>
                        <p>Mật khẩu hiện tại: </p>
                        <Input width={471} type="password" name="password" value={'password'} setValue={handleChangeValuePassword} />
                    </div>
                    <div>
                        <p>Mật khẩu mới:</p>
                        <Input width={471} require type="password" name="newPassword" setValue={handleChangeValuePassword} />
                    </div>
                    <div>
                        <p>Nhập lại mật khẩu mới:</p>
                        <Input width={471} require type="password" name="confirmPassword" setValue={handleChangeValuePassword} />
                    </div>
                </form>
            </Modal>
            <Feature featureProps={featureProps} />
        </div>
      )
}

export default Dashboard;