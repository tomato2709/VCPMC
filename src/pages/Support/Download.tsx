import React, { useEffect, useState } from 'react';
import './Download.css'
import upload from '../../assets/upload.png'
import windows from '../../assets/window.png'
import android from '../../assets/android.png'
import { DownloadBackground } from '../../assets/svg/DownloadBackground';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Button } from 'antd';

const Download: React.FC = () => {
    const [ title ] = useState("VCPMC | Tải App");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const breadcrumb = [
        {
            key: 1 ,
            path: '',
            namePage: 'Hỗ trợ' 
        },
        {
            key: 2,
            path: '',
            namePage: 'Tải App'
        }
      ]
      
  return (
    <div className="download">
        <div className="download-bg"><DownloadBackground/></div>
        <div>
            <Breadcrumbs crumbs={breadcrumb} />
        </div>
        <div>
            <h3>Tải App</h3>
        </div>
        <div className='content'>
            <div className='intro'>
                <h2>ỨNG DỤNG <mark style={{color: "#FF7506", background: 'none'}}>VCPMC</mark></h2>
                <span>-----------------------------------------------</span>
                <p>Bạn vui lòng chọn <br /><b>nền tảng</b> phù hợp để trải nghiệm</p>
            </div>
            <div className='download'>
                <div>
                    <div className='image'>
                        <img src={upload} alt="Tool Upload" />
                    </div>
                    <Button className="btn" type='primary' style={{ border: '1px solid #FF7506', color: '#FFFFFF', fontSize: '16px', width: '175px', height: '45px' }}><b>Tool Upload</b></Button>
                </div>
                <div>
                    <div className='image'>
                        <img src={windows} alt="Windows" />
                    </div>
                    <Button className="btn" type='primary' style={{ border: '1px solid #FF7506', color: '#FFFFFF', fontSize: '16px', width: '175px', height: '45px' }}><b>Tải App Windows</b></Button>
                </div>
                <div>
                    <div className='image'>
                        <img src={android} alt="Android" />
                    </div>
                    <Button className="btn" type='primary' style={{ border: '1px solid #FF7506', color: '#FFFFFF', fontSize: '16px', width: '175px', height: '45px' }}><b>Tải App Android</b></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download;