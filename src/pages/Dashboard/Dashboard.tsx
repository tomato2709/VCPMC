import React, {useState} from "react";
import './Dashboard.css'
import Avatar from 'antd/es/avatar';
import Input from "../../components/input/Input";
import Feature from "../../components/feature/Feature";
import CustomModal from "../../components/modal/Modal";
import { Button, message, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { SlNote } from 'react-icons/sl'
import { RxLockClosed } from 'react-icons/rx'
import { MdOutlineLogout } from 'react-icons/md'
import Ava from '../../assets/avatar_test.png'

const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const [ updateUser, setUpdateUser ] = useState(false)
    const [ openModal, setOpenModal ] = useState(false)
    const [ updatePass, setUpdatePass ] = useState({
        newPassword: '',
        confirmPassword: '',
    })

    const onClickLogout = async (e: string) => {
        try {
            navigate('/')
        } catch(err) {
            message.error("error")
        }
    }

    const handleClickOnOkModal = async () => {
        if(updatePass.newPassword === updatePass.confirmPassword){
            try{
                setOpenModal(false)
                message.success('Đổi mật khẩu thành công')
            } catch(err) {
                console.log(err);
                message.error("Đổi mật khẩu thất bại")
            }
            return
        }
        message.error("Đổi mật khẩu thất bại")
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
                        <Avatar src={Ava} style={{ backgroundColor: '#f56a00', fontSize: 35}} size={170}></Avatar>
                    </div>
                    <h4>Tuyết Nguyễn</h4>
                </div>
                <form className="infoUser">
                    <div>
                        <div>
                            <p>Họ: </p>
                            <Input 
                                type='text' 
                                width={274} 
                                disabled={updateUser ? false : true} 
                                name="firstName"
                            />
                        </div>
                        <div>
                            <p>Tên: </p>
                            <Input 
                                type='text' 
                                width={274} 
                                disabled={updateUser ? false : true} 
                                name="lastName"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Ngày sinh: </p>
                            <Input 
                                type='text' 
                                width={274} 
                                disabled={updateUser ? false : true}
                                name="birthday"
                            />
                        </div>
                        <div>
                            <p>Số điện thoại: </p>
                            <Input 
                                type='text' 
                                width={274} 
                                disabled={updateUser ? false : true}
                                name="phone"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Email: </p>
                            <Input 
                                type="email" 
                                width={571} 
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
                                value="admin"
                                disabled={true}
                            />
                        </div>
                    </div>
                </form>
            </div>
            {updateUser && <div className="button">
                <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => setUpdateUser(false)}><b>Hủy</b></Button>
                <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }}><b>Lưu</b></Button>
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
                    <Input width={471} type="password" value={'password'} name="password" />
                </div>
                <div>
                    <p>Mật khẩu mới:</p>
                    <Input width={471} require type="password" name="newPassword"/>
                </div>
                <div>
                    <p>Nhập lại mật khẩu mới:</p>
                    <Input width={471} require type="password" name="confirmPassword"/>
                </div>
            </form>
        </Modal>
            <Feature featureProps={featureProps} />
        </div>
      )
}

export default Dashboard;