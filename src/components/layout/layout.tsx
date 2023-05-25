import React, { useEffect } from 'react';
import './layout.css';
import Ava from '../../assets/avatar_test.png';
import vi_flag from '../../assets/vi_flag.png';
import Menu from '../menu/menu';
import Avatar from 'antd/es/avatar';
import Typography from 'antd/es/typography';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { auth } from '../../config/firebase';
import { fetchUser } from '../../redux/slice/userSlice';
import { DownOutlined } from '@ant-design/icons';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { user } = useAppSelector(state => state.user)

  useEffect(()=> {
    const unSub = auth.onAuthStateChanged((currentUser) => {
        if(currentUser) {
          const { uid } = currentUser;
          dispatch(fetchUser({uid: uid}))
          return
        }
        navigate('login')        
    })
    return () => {
        unSub();
    }
  }, [])
  
  useEffect(() => {
    if(pathname === '/')
      navigate('/')
  }, [])
  
  return (
    <>
      {user && <div className="layout">
        <Menu />
        <div className="layoutContentMain">
          <div className="layoutHeader">
            <div className="change-language">
                Tiếng Việt<img className="flag" src={vi_flag}></img><DownOutlined />
            </div>
            <div className="avatar">
              <Link to="">
                <Avatar style={{ backgroundColor: '#f56a00', marginRight: 5 }}>{user.avatar ?? user?.lastName.charAt(0).toUpperCase()}</Avatar>
                <Typography style={{color: '#C8C8DB'}}>
                  {user?.displayName}<br /><Typography style={{color: '#FF7506'}}>{user?.isAdmin ? "Admin" : "User" }</Typography>
                </Typography>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>}
    </>
  )
}

export default Layout