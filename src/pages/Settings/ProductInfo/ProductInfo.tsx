import React, { useEffect, useState } from 'react'
import './ProductInfo.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Option from '../../../components/option/Option'
import Input from '../../../components/input/Input'
import CustomTable from '../../../components/table/Table'
import { Button } from 'antd'
import Swal from 'sweetalert2'
import { ColumnsType } from 'antd/es/table'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSnapshot } from '../../../hooks/useSnapshot'
import { updateDocumentProps, updateDocumentConfig } from '../../../hooks/updateDocument'
import { useAppSelector } from '../../../redux/store'

interface GenreProps {
    id?: string
    genreName: string
    desc: string
    key: number
}

const ProductInfo: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    const [ editingRow, setEditingRow ] = React.useState<any>('')
    const [ genre, setGenre ] = useState<GenreProps[]>([])
    const [ updateValue, setUpdateValue ] = React.useState<GenreProps>({
        key: 0,
        genreName: '',
        desc: '',
        id: ''
    });
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
    const { snapshot } = useSnapshot('genres');
  
    useEffect(() => {
        setGenre(snapshot)
    }, [snapshot])

    const handleSetUpdateGenre = (e: any) => {
        const name = e.name;
        const value = e.value;

        setUpdateValue({
            ...updateValue,
            [name]: value
        })
    }

    const handleUpdateGenre = async () => {
        const params: updateDocumentProps = {
            documentName: 'genres',
            id: editingRow,
            data: updateValue
        }

        const update = await updateDocumentConfig(params)
        if(update) {
            Toast.fire({
                icon: 'success',
                title: 'Cập nhật thành công',
                background: '#727288',
                color: '#C8C8DB',
            })
            setEditingRow('')
            return 
        }
        Toast.fire({
            icon: 'error',
            title: 'Cập nhật thất bại',
            background: '#727288',
            color: '#C8C8DB'
        })
    }

    const handleSetEditingRow = (items: any) => {
        if(user.isAdmin) {
            setEditingRow(items.id)
            
            setUpdateValue({
                genreName: items.genreName,
                desc: items.desc,
                key: items.key,
            })
        }
    }

    const dataSource: GenreProps[] = genre

    const columns: ColumnsType<GenreProps> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, {}, index) => <p>{index + 1}</p>
        },
        {
            title: 'Tên thể loại',
            dataIndex: 'genreName',
            key: 'genreName',
            render: (_, items) => {

                if(editingRow === items.id){
                    return <form action="">
                        <Input 
                            type='text' 
                            width={123} 
                            name='genreName'
                            setValue={handleSetUpdateGenre} 
                            value={items.genreName} 
                        />
                    </form>
                }
                else {
                    return <p onClick={() => handleSetEditingRow(items)}>{items.genreName}</p>
                }
            }
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            render: (_, items) => {
                if(editingRow === items.id){
                    return <form action="">
                        <Input 
                            type='text' 
                            width={700} 
                            name='desc'
                            setValue={handleSetUpdateGenre} 
                            value={items.desc} 
                        />
                    </form>
                }
                else {
                    return <p onClick={() => handleSetEditingRow(items)}>{items.desc}</p>
                }
            }
        },
        
    ]
    const optionProps = [
        {
            icon: AiOutlinePlus,
            text: 'Thêm mới',
            event: () => {

            },
            unActive:  user.isAdmin ? false : true
        }
    ]

    const breadcrumb = [
        {
          key: 1,
          path: '',
          namePage: 'Cài đặt'
        },
        {
          key: 2,
          path: '',
          namePage: 'Thông tin tác phẩm'
        }
      ]
  return (
    <>
        <div className="editInformation">
            <div>
                <Breadcrumbs crumbs={breadcrumb} />
            </div>
            <h3>Thông tin tác phẩm</h3>
            <div>
                <h4>Thể loại tác phẩm</h4>
                <CustomTable dataSource={dataSource} columns={columns} heightProps={65} />
            </div>
            <div className="buttons">
                {editingRow ? 
                <>
                    <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={() => setEditingRow('')}><b>Hủy</b></Button>
                    <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#FFFFFF', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleUpdateGenre}><b>Lưu</b></Button>
                </>: ''}
            </div>
            <Option optionProps={optionProps} />
        </div>
    </>
  )
}

export default ProductInfo