import React, { useEffect, useState } from "react";
import '../Login/login.css';
import { Button, Input } from "antd";
import logo from '../../assets/logo.png';
import vi_flag from '../../assets/vi_flag.png';
import { DownOutlined } from "@ant-design/icons";

const NewPassword: React.FC = () => {
    const [ title ] = useState("VCPMC | Đặt lại mật khẩu");

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
                    <h3>Đặt lại mật khẩu</h3>
                        <form>
                        <div>
                            <p>Mật khẩu mới: </p>
                            <Input style={{ background: '#2B2B3F', border: '1px solid #727288', color: '#fff', width: '470px', height: '40px' }} type="password" name="password" />
                        </div>
                        <div>
                            <p>Nhập lại mật khẩu mới: </p>
                            <Input style={{ background: '#2B2B3F', border: '1px solid #727288', color: '#fff', width: '470px', height: '40px' }} type="password" name="password-confirm" />
                        </div>
                        </form>
                        <div className="formBtn">
                            <Button style={{ border: '1px solid #FF7506', fontSize: '16px', color: '#fff', marginTop: '15px' }} className="btn">
                            <b>Lưu mật khẩu</b>
                            </Button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default NewPassword;