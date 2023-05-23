import React, { useEffect, useState } from 'react'
import './ProductInfo.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import FeatureInPage from '../../../components/feature/Feature'
import Input from '../../../components/input/Input'
import CustomTable from '../../../components/table/Table'
import { message, Button } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { AiOutlinePlus } from 'react-icons/ai'
import { usePaymentsCollection } from '../../../hooks/useSnapshot'
import { IUpdate, updateDocumentConfig } from '../../../hooks/updateDocument'
import { useAppSelector } from '../../../redux/store'

interface IUpdateInfoProduct {
    id?: string
    type: string
    desc: string
    key: number
}

const ProductInfo: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    const [ editingRow, setEditingRow ] = React.useState<any>('')
    const [ inforProducts, setInforProducts ] = useState<IUpdateInfoProduct[]>([])
    const [ updateValue, setUpdateValue ] = React.useState<IUpdateInfoProduct>({
        key: 0,
        type: '',
        desc: '',
        id: ''
    });
    const { payments } = usePaymentsCollection('infor-products');
  
    useEffect(() => {
        setInforProducts(payments)
    }, [payments])

    const handleChangeSetUpdateInforProduct = (e: any) => {
        const name = e.name;
        const value = e.value;

        setUpdateValue({
            ...updateValue,
            [name]: value
        })
    }

    const handleClickUpdateInforProduct = async () => {
        const params: IUpdate = {
            documentName: 'infor-products',
            id: editingRow,
            data: updateValue
        }

        const update = await updateDocumentConfig(params)
        if(update) {
            message.success('Cập nhật thành công')
            setEditingRow('')
            return 
        }
        message.error("Cập nhật thất bại")
    }

    const handleClickSetEditingRow = (items: any) => {
        if(user.isAdmin) {
            setEditingRow(items.id)
            
            setUpdateValue({
                type: items.type,
                desc: items.desc,
                key: items.key,
            })
        }
    }

    const dataSource: IUpdateInfoProduct[] = inforProducts

    const columns: ColumnsType<IUpdateInfoProduct> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, {}, index) => <p>{index + 1}</p>
        },
        {
            title: 'Tên thể loại',
            dataIndex: 'type',
            key: 'type',
            render: (_, items) => {

                if(editingRow === items.id){
                    return <form action="">
                        <Input 
                            type='text' 
                            width={123} 
                            name='type'
                            setValue={handleChangeSetUpdateInforProduct} 
                            value={items.type} 
                        />
                    </form>
                }
                else {
                    return <p onClick={() => handleClickSetEditingRow(items)}>{items.type}</p>
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
                            setValue={handleChangeSetUpdateInforProduct} 
                            value={items.desc} 
                        />
                    </form>
                }
                else {
                    return <p onClick={() => handleClickSetEditingRow(items)}>{items.desc}</p>
                }
            }
        },
        
    ]
    const featureProps = [
        {
            icon: AiOutlinePlus,
            text: 'Thêm mới',
            event: () => {
                user.isAdmin || message.warning('Chức năng này chỉ dành cho người quản lý')
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
                    <Button type='primary' style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleClickUpdateInforProduct}><b>Lưu</b></Button>
                </>: ''}
            </div>
            <FeatureInPage featureProps={featureProps} />
        </div>
    </>
  )
}

export default ProductInfo