import React from 'react'
import './Record.css'
import RecordImage from '../../assets/record2.png'
import Option from '../../components/option/Option'
import Input from '../../components/input/Input'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Avatar, Upload, Button } from 'antd'
import Swal from 'sweetalert2';
import { FaTimes } from 'react-icons/fa'
import { RxDotFilled } from 'react-icons/rx'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useAppSelector } from '../../redux/store'
import { updateDocumentConfig } from '../../hooks/updateDocument'

const UpdateRecord: React.FC = () => {
    const { id } = useParams();
    const storeRecords = useAppSelector(state => state.record.record); 

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

    const record = storeRecords.filter(item => {
        return item.id === id
    })

    const navigate = useNavigate();

    const [ updateRecord, setUpdateRecord ] = React.useState({
        key: record[0].key,
        nameMusic: record[0].nameMusic,
        IRCID: record[0].IRCID,
        time: record[0].time,
        singer: record[0].singer,
        author: record[0].author,
        type: record[0].type,
        format: record[0].format,
        status: record[0].status,
    })

    const breadcrumb = [
        {
          key: 1,
          path: '../../record',
          namePage: 'Kho bản ghi'
        },
        {
          key: 2,
          path: '',
          namePage: 'Cập nhật thông tin'
        }
      ]

    const handleClickRemoveRecord = async () => {
        try {
            await deleteDoc(doc(db, "record", `${id}`));
            navigate('../../record');
            Toast.fire({
                icon: 'success',
                title: 'Xóa thành công',
                background: '#727288',
                color: '#C8C8DB',
            })
        } catch(err) {
            Toast.fire({
                icon: 'error',
                title: 'Đăng nhập thất bại',
                background: '#727288',
                color: '#C8C8DB'
            })          
        }
    }

    const optionProps = [
        {
            icon: FaTimes,
            text: 'Xóa bản ghi',
            event: handleClickRemoveRecord
        }
    ]

    const handleChangeUpdateRecord = (e: any): void => {
        const name: string = e.name;
        const value: string = e.value;

        setUpdateRecord(prev => {
            return {
                ...updateRecord,
                [name]: value
            }
        })
    }

    const handleClickUpdateRecord = async () => {
        const params = {
            documentName: 'record',
            id: id,
            data: updateRecord
          }
          const update = await updateDocumentConfig(params);
          if(update) {
            navigate('../../record');
            Toast.fire({
                icon: 'success',
                title: 'Chỉnh sửa thành công',
                background: '#727288',
                color: '#C8C8DB',
            })
            return
          } 
          Toast.fire({
            icon: 'error',
            title: 'Chỉnh sửa thất bại',
            background: '#727288',
            color: '#C8C8DB'
        })  
    }

    const handleChangeAvatar = () => {
        
    }

    const handleClickCancelUpdate = () => {
        navigate('../../record')
    }

  return (
    <div className="update-record">
        <Breadcrumbs crumbs={breadcrumb} />
        <div>
            <h3>Bản ghi - {record[0].nameMusic}</h3>
        </div>
        <div className="container">
            <div className="info">
                <div>
                    <h4>Thông tin bản ghi</h4>
                    <Avatar src={RecordImage} style={{fontSize: 25}} size={130}>
                        <Upload 
                            onChange={handleChangeAvatar}
                            action={"http://localhost:3000/"}
                        >
                        </Upload>
                    </Avatar>
                    <div>
                        <h5>Ngày thêm:</h5>
                        <p>07/04/2021</p>
                    </div>
                    <div>
                        <h5>Người tải lên:</h5>
                        <p>Super Admin</p>
                    </div>
                    <div>
                        <h5>Người duyệt:</h5>
                        <p>Hệ thống</p>
                    </div>
                    <div>
                        <h5>Ngày phê duyệt:</h5>
                        <p>07/04/2021</p>
                    </div>
                </div>
                <div>
                    <h4>Thông tin ủy quyền</h4>
                    <div>
                        <h5>Số hợp đồng:</h5>
                        <p>{record[0].IRCID}</p>
                    </div>
                    <div>
                        <h5>Ngày nhận ủy quyền:</h5>
                        <p>{record[0].dateCreated}</p>
                    </div>
                    <div>
                        <h5>Ngày hết hạn:</h5>
                        <p>{record[0].date}</p>
                    </div>
                    <div>
                        <h5>Trạng thái:</h5>
                        {record[0].status ? <p><RxDotFilled color="blue" />Còn thời hạn</p> : <p><RxDotFilled color="gray" />Hết thời hạn</p>}
                    </div>
                </div>
            </div>
            <div className="updateInfo">
                <h4>Chỉnh sửa thông tin</h4>
                <form action="">
                    <label htmlFor="">Tên bản ghi:</label> <br />
                    <Input type='text' width={410} height={32} value={record[0].nameMusic} name="nameMusic" setValue={handleChangeUpdateRecord} /> <br />
                    <label htmlFor="">Mã ISRC:</label> <br />
                    <Input type='text' width={410} height={32} value={record[0].IRCID} name="IRCID" setValue={handleChangeUpdateRecord}/> <br />
                    <label htmlFor="">Ca sĩ:</label> <br />
                    <Input type='text' width={410} height={32} value={record[0].singer} name="singer" setValue={handleChangeUpdateRecord}/> <br />
                    <label htmlFor="">Tác giả:</label> <br />
                    <Input type='text' width={410} height={32} value={record[0].author} name="author" setValue={handleChangeUpdateRecord}/> <br />
                    <label htmlFor="">Nhà sản xuất:</label> <br />
                    <Input type='text' width={410} height={32} value={record[0].author}/> <br />
                    <label htmlFor="">Thể loại:</label> <br />
                    <Input type='text' width={410} height={32} value={record[0].type} name="type" setValue={handleChangeUpdateRecord}/> <br />
                    
                </form>
            </div>
            
        </div>
        <div className="button">
            <Button type='default' ghost style={{ border: '1px solid #FF7506', color: '#FF7506', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleClickCancelUpdate}><b>Hủy</b></Button>
            <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', width: '150px', height: '40px' }} onClick={handleClickUpdateRecord}><b>Lưu</b></Button>
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default UpdateRecord