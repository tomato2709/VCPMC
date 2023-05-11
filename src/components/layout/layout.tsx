import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router';
import Menu from '../menu/menu';
import Avatar from 'antd/es/avatar';
import Typography from 'antd/es/typography';
import { Dropdown, MenuProps, message } from 'antd';
import './layout.css';
import { Link } from 'react-router-dom';
import Ava from '../../assets/avatar_test.png'

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Tiếng Việt',
      key: '1'
    },
    {
      label: 'Tiếng Anh',
      key: '2'
    },
    {
      label: 'Tiếng Nhật',
      key: '3',
    },
    {
      label: 'Tiếng Hàn',
      key: '4',
    },
  ];
  useEffect(() => {
    if(pathname === '/')
      navigate('store')
  }, [])
  

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  
  return (
    <>
      <div className="home">
        <Menu />
        <div className="homeContentMain">
          <div className="homeHeader">
            <div className="avatar">
              <Link to="dashboard">
                <Avatar src={Ava} style={{ backgroundColor: '#f56a00', marginRight: 5 }}></Avatar>
                <Typography style={{color: '#C8C8DB'}}>Tuyết Nguyễn</Typography>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout