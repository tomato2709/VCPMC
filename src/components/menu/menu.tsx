import React, {useState} from 'react'
import './menu.css';
import logo from '../../assets/logo.png';
import { FaWindowRestore } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";
import { TbReportMoney } from "react-icons/tb";
import { MdPlaylistPlay } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { MdContactSupport } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false)

    const handleClickToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div className={toggleMenu ? "sidebar active" : "sidebar"}>
          <div className="logo">
            <img className='svg' src={logo} />
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to=""><FaWindowRestore /><p>Kho bản ghi</p></NavLink>
              </li>
              <li>
                <NavLink to=''><MdPlaylistPlay /><p>Playlist</p></NavLink>
              </li>
              <li>
                <NavLink to=''><FaRegCalendarAlt /><p>Lập lịch phát</p></NavLink>
              </li>
              <li>
                <div>
                  <NavLink to=""><SiGoogletagmanager /><p>Quản lý</p></NavLink>
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
                <TbReportMoney /><p>Doanh thu</p>
                </div>
                <div className="dot">
                <BiDotsVerticalRounded />
                </div>
                <div className="navigateChild">
                  <Link to="">Báo cáo doanh thu</Link>
                  <Link to="">Phân phối doanh thu</Link>
                  <Link to="">Lịch sử đối soát</Link>
                </div>
              </li>
              <li>
                <div>
                <SlSettings /><p>Cài đặt</p>
                </div>
                <div className="dot">
                <BiDotsVerticalRounded />
                </div>
                <div className="navigateChild">
                  <Link to="">Phân quyền người dùng</Link>
                  <Link to="">Cấu hình</Link>
                  <Link to="">Quản lí hợp đồng</Link>
                  <Link to="">Thông tin tác phẩm</Link>
                  <Link to="">Chu kì đối soát</Link>
                </div>
              </li>
              <li>
                <div>
                <MdContactSupport /><p>Hỗ trợ</p>
                </div>
                <div className="dot">
                <BiDotsVerticalRounded />
                </div>
                <div className="navigateChild">
                  <Link to="">Hướng dẫn sử dụng</Link>
                  <Link to="">Tải app</Link>
                  <Link to="">Feedback</Link> 
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