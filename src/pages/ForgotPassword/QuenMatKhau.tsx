import React, { useState, useEffect } from "react";
import '../Login/login.css';
import { Button, Input } from "antd";
import logo from '../../assets/logo.png';
import vi_flag from '../../assets/vi_flag.png';
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

const QuenMatKhau: React.FC = () => {
    const [ title ] = useState("VCPMC | Quên mật khẩu");

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
                    <p>Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu</p>
                        <form>
                            <div>
                                <p>Tên đăng nhập: </p>
                                <Input type="email" name="email" style={{ background: '#2B2B3F', border: '1px solid #727288', color: '#fff', width: '498px', height: '40px' }} />
                            </div>
                        </form>
                        <div className="formBtn">
                            <Link to="./success">
                                <Button style={{ border: '1px solid #FF7506', fontSize: '16px', color: '#fff', marginTop: '15px' }} className="btn"><b>Xác nhận</b></Button>
                            </Link>
                        </div>
                        <div className="backToLogin">
                            <Link to="../login"><h5>Quay lại đăng nhập</h5></Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default QuenMatKhau;