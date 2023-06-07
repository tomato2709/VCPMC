import React, { useEffect, useState } from 'react'
import './AddUnitUser.css'
import Breadcrumbs from '../../../../components/breadcrumbs/Breadcrumbs';
import Input from '../../../../components/input/Input';
import CustomSelect from '../../../../components/select/Select';
import Swal from 'sweetalert2';
import { Button } from 'antd';
import { getDocumentFireBase } from '../../../../hooks/getDocument';
import { updateDocumentConfig } from '../../../../hooks/updateDocument';
import { DataTypeUser } from '../../../../redux/slice/unitSlice';
import { useNavigate, useParams } from 'react-router-dom'

const AddUnitUser: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ currentUnit, setCurrentUnit ] = useState<any>();
    const [ addUser, setAddUser ] = useState<DataTypeUser>({
        key:  Math.floor(Math.random() * 10000),
        userName: '',
        email: '',
        fullName: '',
        password: '',
        role: '',
        status: true,
        lastUpdated: '21/04/2021',
    });
    const [ valueSelect, setValueSelect ] = useState('Chọn vai trò')
    const [ title ] = useState("VCPMC | Thêm người dùng");
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
        document.title = title;
    }, [title]);

    useEffect(() => {
        const getData = async () => {
            const data: any = await getDocumentFireBase({id: id, name: 'unit'})
            if(data) {
                setCurrentUnit(data)
            }
           }
           getData();
    }, [])

    const handleChangeAddUser = (e: any) => {
        const name = e.name;
        const value = e.value;

        setAddUser({
            ...addUser,
            [name]: value
        })
    }

    const handleAddUser = async () => {
        const newListUser = currentUnit.listUser
        newListUser.push(addUser)
        
        const params = {
            documentName: 'unit',
            id: id,
            data: {
                listUser: newListUser
            }
        }

        const update = await updateDocumentConfig(params)
        if(update) {
            Toast.fire({
                icon: 'success',
                title: 'Thêm người dùng thành công!',
                background: '#727288',
                color: '#C8C8DB',
            })
            navigate(`../manage-unit/detail/id`)
        }
        else {
            Toast.fire({
                icon: 'error',
                title: 'Thêm người dùng thất bại!',
                background: '#727288',
                color: '#C8C8DB',
            })
        }
    }

    const breadcrumbs = [
        {
            key: 1 ,
            path: '',
            namePage: 'Quản lý' 
        },
        {
            key: 2,
            path: '../manage-unit',
            namePage: 'Đơn vị sử dụng'
        },
        {
            key: 3,
            path: `../manage-unit/detail/${id}`,
            namePage: 'Chi tiết'
        },
        {
            key: 4,
            path: '',
            namePage: 'Thêm người dùng'
        }
      ]

    const select = {
        items: ['QA', 'QC', 'Super Admin', 'Group Admin', 'Admin', 'Sub-user', 'Content Manager'],
        onChange: (value: string) => {
            setValueSelect(value)
            setAddUser({
                ...addUser,
                role: value
            })
        }
    }

  return (
    <div className="add-unit-user">
        <div>
            <Breadcrumbs crumbs={breadcrumbs} />
        </div>
        <div>
            <h3>Thêm người dùng</h3>
        </div>
        <div className='content'>
            <div>
                <span>
                    <h5>Tên người dùng<i>*</i></h5>
                    <Input 
                        type='text' 
                        width={300} 
                        name="fullName"
                        setValue={handleChangeAddUser}
                    />
                </span>
                <span>
                    <h5>Email<i>*</i></h5>
                    <Input 
                        type='email' 
                        width={300} 
                        name="email"
                        setValue={handleChangeAddUser}
                    />
                </span>
                <span>
                    <h5>Vai trò<i>*</i></h5>
                    <CustomSelect 
                        value={valueSelect}
                        items={select.items}
                        onChange={select.onChange}
                        width={160}
                    />
                </span>
            </div>
            <div>
                <span>
                    <h5>Tên đăng nhập<i>*</i></h5>
                    <Input 
                        type='text' 
                        width={300} 
                        name="userName"
                        setValue={handleChangeAddUser}
                    />
                </span>
                <span>
                    <h5>Mật khẩu<i>*</i></h5>
                    <Input 
                        type='password' 
                        width={300} 
                        name="password"
                        setValue={handleChangeAddUser}
                    />
                </span>
                <span>
                    <h5>Nhập lại mật khẩu<i>*</i></h5>
                    <Input 
                        type='password' 
                        width={300}  
                        name="password"
                        setValue={handleChangeAddUser}
                    />
                </span>
            </div>
        </div>
        <div className='button'>
            <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => navigate(`../manage-unit/detail/id`)}><b>Hủy</b></Button>
            <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleAddUser}><b>Lưu</b></Button>
        </div>
    </div>
  )
}

export default AddUnitUser