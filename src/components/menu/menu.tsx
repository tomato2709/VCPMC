import React, {useState} from 'react'
import './menu.css';
import logo from '../../assets/logo.png';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { RecordIcon } from '../../assets/svg/RecordIcon';
import { PlaylistIcon } from '../../assets/svg/PlaylistIcon';
import { CreateCalendarIcon } from '../../assets/svg/CreateCalendarIcon';
import { ManageIcon } from '../../assets/svg/ManageIcon';
import { RevenueIcon } from '../../assets/svg/RevenueIcon';
import { SettingIcon } from '../../assets/svg/SettingIcon';
import { SupportIcon } from '../../assets/svg/SupportIcon';

const Menu: React.FC = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false)

    const handleClickToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div className={toggleMenu ? `sidebar active` : `sidebar`}>
          <div className="logo">
            <img className='svg' src={logo} />
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="./record"><RecordIcon /><p>Kho bản ghi</p></NavLink>
              </li>
              <li>
                <NavLink to=''><PlaylistIcon /><p>Playlist</p></NavLink>
              </li>
              <li>
                <NavLink to=''><CreateCalendarIcon /><p>Lập lịch phát</p></NavLink>
              </li>
              <li>
                <div>
                  <NavLink to=""><ManageIcon /><p>Quản lý</p></NavLink>
                </div>
                <div className="dot">
                <BiDotsVerticalRounded />
                </div>
                <div className="navigateChild">
                  <Link to="">Quản lí hợp đồng</Link>
                  <Link to="">Quản lí thiết bị</Link>
                  <Link to="">Đối tác uỷ quyền</Link>
                  <Link to="">Đơn vị sử dụng</Link>
                </div>
              </li>
              <li>
                <div>
                <RevenueIcon /><p>Doanh thu</p>
                </div>
                <div className="dot">
                <BiDotsVerticalRounded />
                </div>
                <div className="navigateChild">
                  <Link to="./revenue-report">Báo cáo doanh thu</Link>
                  <Link to="./revenue-history">Lịch sử đối soát</Link>
                  <Link to="./revenue-distribution">Phân phối doanh thu</Link>
                </div>
              </li>
              <li>
                <div>
                <SettingIcon /><p>Cài đặt</p>
                </div>
                <div className="dot">
                <BiDotsVerticalRounded />
                </div>
                <div className="navigateChild">
                  <Link to="./user-authorization">Phân quyền người dùng</Link>
                  <Link to="./configuration">Cấu hình</Link>
                  <Link to="./manager-contract">Quản lí hợp đồng</Link>
                  <Link to="./product-information">Thông tin tác phẩm</Link>
                  <Link to="./cycle">Chu kì đối soát</Link>
                </div>
              </li>
              <li>
                <div>
                <SupportIcon /><p>Hỗ trợ</p>
                </div>
                <div className="dot">
                <BiDotsVerticalRounded />
                </div>
                <div className="navigateChild">
                  <Link to="./manual">Hướng dẫn sử dụng</Link>
                  <Link to="./download">Tải app</Link>
                  <Link to="./feedback">Feedback</Link> 
                </div>
              </li>
            </ul>
          </div>
          <div className="btnClickToggleSidebar" onClick={handleClickToggleMenu}>
            {toggleMenu ? <IoIosArrowForward size={15} /> : <IoIosArrowBack size={15}/>}
            
          </div>
        </div>
      )
}

export default Menu;