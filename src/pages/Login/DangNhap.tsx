import React, { useEffect, useState } from 'react'
import './login.css';
import logo from '../../assets/logo.png';
import vi_flag from '../../assets/vi_flag.png';
import Input from '../../components/input/Input';
import { Button, Checkbox, message } from "antd";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchUser } from '../../redux/slice/userSlice'
import { logIn } from '../../config/userAuthentication'

const DangNhap: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const user = useAppSelector((state) => state.user.user);
    const [ login, setLogin ] = useState({email: '', password: ''});
    const [ error, setError ] = useState(false);
  
    useEffect(() => {
      if(user) {
        navigate('/')
      }
    }, [navigate])
  
    const handleLogin = async (e: any) => {
      e.preventDefault();
      
      try {
        await logIn(login.email, login.password)
        .then(res => {
            dispatch(fetchUser({uid: res.user.uid}))
            message.success("Đăng nhập thành công")
            navigate('/');
          })
      } catch(error: any) {
        setError(true)
        message.error("Đăng nhập thất bại")
      }
    }
  
    const handleChangeValueToLogin = (e: any) => {
      const name: string = e.name;
      const value: string = e.value
  
      setLogin(prev => {
        return {
            ...login,
            [name]: value
        }
    })
    }

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
                <form action="">
                <div>
                    <p>Tên đăng nhập: </p>
                    <Input width={470} height={40} type="text" name="email" setValue={handleChangeValueToLogin} />
                </div>
                <div>
                    <p>Password: </p>
                    <Input width={470} height={40} type="password" name="password" setValue={handleChangeValueToLogin} />
                </div>
                {error && <p style={{color: '#FF4747', marginTop: 5}}>Sai tên đăng nhập hoặc mật khẩu.</p>}
                <div>
                    <Checkbox style={{ color: '#fff' }}>Ghi nhớ đăng nhập</Checkbox>
                </div>
                <div className="formBtn">
                    <Button style={{ border: '1px solid #FF7506', color: '#fff', fontSize: '16px' }} className="btn" onClick={handleLogin}>
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