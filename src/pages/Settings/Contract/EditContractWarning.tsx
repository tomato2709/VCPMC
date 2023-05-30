import React from 'react'
import './Contract.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Input from '../../../components/input/Input'
import { Button } from 'antd'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

const EditContractWarning: React.FC = () => {
    const navigate = useNavigate()
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

    const breadcrumbs = [
        {
            key: 1 ,
            path: '',
            namePage: 'Cài đặt' 
        },
        {
            key: 2,
            path: '',
            namePage: 'Quản lý loại hợp đồng'
        },
    ]
    return (
        <div className="managerContract">
            <div>
                <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <h3>Loại hợp đồng</h3>
            <div className="containerContent">
                <div>
                <h4>Cảnh báo hết hạn khai thác tác phẩm</h4>
                <p>Hợp đồng được cảnh báo trước thời gian hết hạn: <Input 
                    type='text' 
                    width={75}
                    value={"365"} 
                    name="contract-warning"
                    setValue={"365"}
                /></p>
                </div>
            </div>
            <div className="button">
                <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => navigate('../manager-contract')}><b>Hủy</b></Button>
                <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => {
                    navigate('../manager-contract')
                    Toast.fire({
                        icon: 'success',
                        title: 'Lưu thành công!',
                        background: '#727288',
                        color: '#C8C8DB',
                    })
                    }}><b>Lưu</b></Button>
            </div>
        </div>
    )
}

export default EditContractWarning