import React, { useState } from "react";
import './login.css';
import { Button, Checkbox, Input } from "antd";
import logo from '../../assets/logo.png';
import vi_flag from '../../assets/vi_flag.png';
import { Link } from "react-router-dom";

const DangNhap: React.FC = () => {
    return (
        <div className="login">
            <div className="selectLanguage">
                Tiếng Việt<img className="flag" src={vi_flag}></img>
            </div>
            <div>
                <img className="logo" src={logo}></img>
            </div>
            <h3>Đăng nhập</h3>
            <div className="login-item">
                <form>
                <div>
                    <p>Tên đăng nhập: </p>
                    <Input style={{ background: '#2B2B3F', border: '1px solid #727288', color: '#fff', width: '470px', height: '40px' }} type="text" name="email" />
                </div>
                <div>
                    <p>Password: </p>
                    <Input style={{ background: '#2B2B3F', border: '1px solid #727288', color: '#fff', width: '470px', height: '40px' }} type="password" name="password" />
                </div>
                <div>
                    <Checkbox style={{ color: '#fff' }}>Ghi nhớ đăng nhập</Checkbox>
                </div>
                <div className="formBtn">
                    <Button style={{ border: '1px solid #FF7506', color: '#fff', fontSize: '16px' }} className="btn">
                    <b>Đăng nhập</b>
                    </Button>
                </div>
                </form>
                <div className="forgotPassword">
                    <Link to="/forgot-password"><h5>Quên mật khẩu</h5></Link>
                </div>
            </div>
        </div>
    );
}

export default DangNhap;