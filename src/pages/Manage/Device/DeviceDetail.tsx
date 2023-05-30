import React, { useState } from "react";
import './DeviceDetail.css'
import DeviceImage from '../../../assets/device.png';
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Option from "../../../components/option/Option";
import Input from "../../../components/input/Input";
import { Modal, Radio } from "antd";
import { SlNote } from "react-icons/sl";
import { RxLockClosed } from "react-icons/rx";
import { AiOutlineSync } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

const DeviceDetail: React.FC = () => {
    const [ value, setValue ] = useState("activated");
    const [ openModal, setOpenModal ] = useState(false)
    const breadcrumb = [
        {
          key: 1,
          path: '../manage-device',
          namePage: 'Danh sách thiết bị'
        },
        {
          key: 3,
          path: '',
          namePage: 'Chi tiết thiết bị'
        }
      ]

    const optionProps = [
        {
            icon: SlNote,
            text: "Chỉnh sửa",
            event: () => setOpenModal(true)
        },
        {
            icon: RxLockClosed,
            text: 'Khôi phục mật khẩu',
            event: ""
        },
        {
            icon: AiOutlineSync,
            text: 'Khôi phục bộ nhớ',
            event: ""
        }
    ]

    return (
        <div className="device-detail">
            <div>
                <Breadcrumbs crumbs={breadcrumb} />
            </div>
            <div>
                <h3>Thông tin thiết bị - Device 123456</h3>
            </div>
            <div className="content">
                <div>
                    <h4 style={{color: '#FF7506'}}>Thông tin thiết bị</h4>
                    <img src={DeviceImage}></img>
                    <p><RxDotFilled color="green" /> Hoạt động</p>
                    <p><b>Ghi chú</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h4 style={{color: '#FF7506'}}>Device 123456</h4>
                    <p><b>SKU/ID</b>: A123456789</p>
                    <p><b>Địa chỉ Mac</b>: 113.56.79.01</p>
                    <p><b>Tên đăng nhập</b>: User123456</p>
                    <p><b>Định dạng</b>: Displayable</p>
                    <p><b>Vị trí</b>: TP.HCM</p>
                    <p><b>Thời hạn bảo hành</b>: 22/06/2021</p>
                    <p><b>Trạng thái thiết bị</b>: Activated</p>
                </div>
                <div>
                    <h4 style={{color: '#FF7506'}}>Thông tin phiên bản</h4>
                    <p><b>Phiên bản cũ nhất</b>: 12.3 (20/02/2020)</p>
                    <div>
                        <h4 style={{color: '#FF7506'}}>Dung lượng bộ nhớ</h4>
                        <p><b>Dung lượng</b>: 512GB</p>
                        <p><b>Còn trống</b>: 123GB</p>
                    </div>
                </div>
            </div>
            <Modal className="customModal"
            style={{ height: '70vh', marginBottom: '70px'}}
            title="Chỉnh sửa thông tin thiết bị"
            open={openModal}
            okText="Lưu"
            cancelText="Hủy"
            onCancel={() => setOpenModal(false)}
            >
                <form action="">
                    <div>
                        <p>Tên thiết bị: </p>
                        <Input width={471} require type="text" name="deviceName" />
                    </div>
                    <div>
                        <p>SKU/ID:</p>
                        <Input width={471} require type="text" name="skuID" />
                    </div>
                    <div>
                        <p>Địa chỉ Mac:</p>
                        <Input width={471} require type="text" name="macAddress" />
                    </div>
                    <div>
                        <p>Tên đăng nhập:</p>
                        <Input width={471} require type="text" name="userName" />
                    </div>
                    <div>
                        <p>Vị trí:</p>
                        <Input width={471} type="text" name="location" />
                    </div>
                    <div>
                        <p>
                            Trạng thái thiết bị: <Radio.Group defaultValue={"activated"} >
                            <Radio value={"activated"}><p>Đã kích hoạt</p></Radio>
                            <Radio value={"notactivated"}><p>Ngưng kích hoạt</p></Radio>
                            </Radio.Group>
                        </p>
                    </div>
                </form>
            </Modal>
            <Option optionProps={optionProps} />
        </div>
    )
}

export default DeviceDetail