import React from "react";
import '../../components/forgotPassword/forgotPassword.css';
import { Button, Checkbox, Form, Input } from "antd";
import logo from '../../assets/logo.png';
import vi_flag from '../../assets/vi_flag.png';

const ForgotPassword: React.FC = () => {
    return (
        <div className="fp">
            <div className="fp-language">
                Tiếng Việt<img className="flag" src={vi_flag}></img>
            </div>
            <div className="fp-logo">
                <img src={logo}></img>
            </div>
            <h1>Khôi phục mật khẩu</h1>
            <div className="fp-item">
                Vui lòng nhập địa chỉ email đã đăng ký để khôi phục mật khẩu
                <Form layout="vertical" className="fp-form">
                <Form.Item
                    label={<label style={{ color: "#fff" }}>Email</label>}
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                    >
                    <Input style={{ background: '#2B2B3F', border: '1px solid #727288', color: '#fff' }} />
                </Form.Item>
                <Form.Item>
                    <Button style={{ border: '1px solid #FF7506', color: '#fff', fontSize: '16px' }} className="btn" htmlType="submit">
                    <b>Xác nhận</b>
                    </Button>
                </Form.Item>
                <a href="/" className="back-btn">Quay lại đăng nhập</a>
                </Form>
            </div>
        </div>
    );
}

export default ForgotPassword;