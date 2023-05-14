import React from "react";
import '../Login/login.css';
import { Button, Input } from "antd";
import logo from '../../assets/logo.png';
import vi_flag from '../../assets/vi_flag.png';
import { Link } from "react-router-dom";

const ErrorFpw: React.FC = () => {
    return (
        <div className="login">
            <div className="selectLanguage">
                Tiếng Việt<img className="flag" src={vi_flag}></img>
            </div>
            <div className="resetPassword">
                <div>
                    <img className="logo" src={logo}></img>
                </div>
                <div className="content">
                    <h3 style={{ color: "Tomato" }}>Không thể kết nối!</h3>
                    <p>Dường như đã có chút trục trặc hoặc link này đã hết hạn. Vui lòng thử lại hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.</p>
                    <div className="formBtn">
                            <Button ghost style={{ border: '1px solid #FF7506', fontSize: '16px', color: '#fff', marginTop: '15px' }} className="btn">
                            <b>Yêu cầu gửi link lại</b>
                            </Button>
                        </div>
                    <div className="backToLogin">
                        <Link to="/"><h5>Quay lại đăng nhập</h5></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorFpw;