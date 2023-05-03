import React from "react";
import '../../components/login/login.css';
import { Button, Checkbox, Form, Input } from "antd";
import logo from '../../assets/logo.png';
import vi_flag from '../../assets/vi_flag.png';

const Login: React.FC = () => {
    return (
        <div className="login">
            <div className="login-language">
                Tiếng Việt<img className="flag" src={vi_flag}></img>
            </div>
            <div className="login-logo">
                <img src={logo}></img>
            </div>
            <h1>Đăng nhập</h1>
            <div className="login-item">
                <Form layout="vertical" className="login-form">
                <Form.Item
                    label={<label style={{ color: "#fff" }}>Tên đăng nhập</label>}
                    name="username"
                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                    >
                    <Input style={{ background: '#2B2B3F', border: '1px solid #727288', color: '#fff' }} />
                </Form.Item>
                <Form.Item
                    label={<label style={{ color: "#fff" }}>Mật khẩu</label>}
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                    <Input style={{ background: '#2B2B3F', border: '1px solid #727288', color: '#fff' }} />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 10 }}>
                    <Checkbox style={{ color: '#fff' }}>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button style={{ border: '1px solid #FF7506', color: '#fff' }} className="btn" htmlType="submit">
                    Đăng nhập
                    </Button>
                </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;