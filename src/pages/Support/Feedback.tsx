import React, { useState, useEffect } from 'react'
import './Feedback.css'
import Ava from '../../assets/avatar_feedback.png'
import Inbox from '../../assets/inbox.png'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Input from '../../components/input/Input'
import CustomSelect from '../../components/select/Select'
import { Avatar, Button } from 'antd'
import Swal from 'sweetalert2'
import { db } from '../../config/firebase'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useSnapshot } from '../../hooks/useSnapshot'
import { useAppSelector } from '../../redux/store'

interface FeedbackProps {
    id?: number,
    avatar: any,
    date: string,
    userName: string,
    topic: string,
    content: string
}

let today: any = new Date();
today = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();

const Feedback: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    const [ valueSelect, setValueSelect ] = useState('Chọn vấn đề bạn cần được hỗ trợ');
    const [ openFeedbackMessage, setOpenFeedbackMessage ] = useState<any>(false);
    const [ listMessageFeedback, setListMessageFeedback ] = useState<any[]>([])
    const [ addFeedback, setAddFeedback ] = useState<FeedbackProps>({
        id: Math.floor(Math.random() * 10000),
        avatar: null,
        date: today,
        userName: user.displayName,
        topic: '',
        content: ''
    })
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
    const { snapshot } = useSnapshot('feedback');
    const [ title ] = useState("VCPMC | Feedback");

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        setListMessageFeedback(snapshot)
    }, [snapshot])

    const handleChangeSetValueFeedBack = (e: any) => {
        const name = e.name;
        const value = e.value;

        setAddFeedback({
            ...addFeedback,
            [name]: value
        })
    }

    const handleClickAddFeedback = async () => {
        if(addFeedback.content) {
            const docRef = doc(collection(db, "feedback"))
            try {
                await setDoc(docRef, addFeedback)
                .then(() => {
                    setValueSelect('Chọn vấn đề bạn cần được hỗ trợ')
                    setAddFeedback({
                        ...addFeedback,
                        topic: '',
                        content: ''
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Gửi feedback thành công!',
                        background: '#727288',
                        color: '#C8C8DB',
                    })
                })
            } catch(err) {
            }
            return
        }
        Toast.fire({
            icon: 'warning',
            title: 'Bạn chưa nhập nội dung!',
            background: '#727288',
            color: '#C8C8DB',
        })
    }

    const select = {
        items: ['Tài khoản', 'Quản lý doanh thu', 'Vấn đề bản quyền', 'Khác'],
        onChange: (value: string) => {
            setValueSelect(value)
            setAddFeedback({
                ...addFeedback,
                topic: value
            })
        }
    }
    
    const breadcrumb = [
        {
            key: 1 ,
            path: '',
            namePage: 'Hỗ trợ' 
        },
        {
            key: 2,
            path: '',
            namePage: 'Feedback'
        }
    ]
    

  return (
    <div className="feedback">
        <div>
            <Breadcrumbs crumbs={breadcrumb} />
        </div>
        <div>
            <h3>Feedback</h3>
        </div>
        {user.isAdmin ?
            <div className='content-admin'>
                <div className='message-feedback'>
                    {listMessageFeedback.map(item => (
                        <div key={item.id} onClick={() => setOpenFeedbackMessage(item)} className='message'>
                            <Avatar src={Ava} size={50} style={{ backgroundColor: '#f56a00', margin: '5px 12px 0 0' }}>{item.avatar ?? item.userName.charAt(0).toUpperCase()}</Avatar>
                            <div>
                                <h5>{item.userName}</h5>
                                <p>Chủ đề: {item.topic}</p>
                            </div>
                            <p className='date'>{item.date}</p>
                        </div>
                    ))}
                </div>
                <div className='content-message-feedback'>
                    {openFeedbackMessage ? 
                        <div className='detail-feedback'>
                            <div>
                                <Avatar src={Ava} size={50} style={{ backgroundColor: '#f56a00', margin: '0 12px 15px 0' }}>{openFeedbackMessage.avatar ?? openFeedbackMessage.userName.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                    <h5>{openFeedbackMessage?.userName}</h5>
                                </div>
                                <p className='date'>{openFeedbackMessage?.date}</p>
                            </div>
                            <p><b>Chủ đề: {openFeedbackMessage?.topic}</b></p>
                            <p>{openFeedbackMessage?.content}</p>
                        </div> : 
                        <div className='no-message'>
                            <img width={450} src={Inbox} alt="" />
                        </div>    
                    }
                </div>
            </div> :

            <div className='content'>
                <div className='form'>
                    <form action="">
                        <div>
                            <h5>Tên người dùng</h5>
                            <Input
                                type='text'
                                value={user.displayName}
                                width={450}
                                name='userName'
                                disabled={true}
                                setValue={handleChangeSetValueFeedBack}
                            />
                        </div>
                        <div>
                            <h5>Bạn muốn được hỗ trợ vấn đề gì?</h5>
                            <CustomSelect 
                                value={valueSelect}
                                items={select.items}
                                onChange={select.onChange}
                                width={450}
                            />
                        </div>
                        <div>
                            <h5>Nội dung</h5>
                            <textarea 
                                cols={58} rows={6} 
                                placeholder='Nhập nội dung'
                                name='content'
                                defaultValue={addFeedback.content && addFeedback.content}
                                onChange={(e: any) => setAddFeedback({...addFeedback, content: e.target.value})}
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className='button'>
                    <Button type='primary' style={{ border: '1px solid #FF7506', background: '#FF7506', color: '#fff', fontSize: '16px', height: "38px", width: "148px" }} onClick={handleClickAddFeedback}><b>Gửi</b></Button>
                </div>
            </div>
        }
    </div>
  )
}

export default Feedback