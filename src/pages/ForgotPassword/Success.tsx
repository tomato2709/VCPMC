import React, { useEffect, useState } from "react";
import '../Login/login.css';
import logo from '../../assets/logo.png';
import vi_flag from '../../assets/vi_flag.png';
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

const SuccessFpw: React.FC = () => {
    const [ title ] = useState("VCPMC | Khôi phục mật khẩu");

    useEffect(() => {
        document.title = title;
    }, [title]);
    
    return (
        <div className="login">
            <div className="selectLanguage">
                Tiếng Việt<img className="flag" src={vi_flag}></img><DownOutlined />
            </div>
            <div className="resetPassword">
                <div>
                    <img className="logo" src={logo}></img>
                </div>
                <div className="content">
                    <h3>Khôi phục mật khẩu</h3>
                    <p>Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.</p>
                    <p>Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.</p>
                    <div className="backToLogin">
                        <Link to="/"><h5>Quay lại đăng nhập</h5></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuccessFpw;