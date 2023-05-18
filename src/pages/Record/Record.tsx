import React, { useState } from 'react'
import './Record.css'
import InputSearch from '../../components/input/search/Search'
import { MenuProps, Dropdown } from 'antd'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

const Record: React.FC = () => {
    const [ displaySwitch, setDisplaySwitch ] = useState('row')
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <div>
              Tất cả
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div>
              Pop
            </div>
          ),
        },
        {
          key: '3',
          label: (
            <div>
              EDM
            </div>
          ),
        },
        {
            key: '4',
            label: (
              <div>
                Ballad
              </div>
            ),
          },
      ];

    return (
        <div className="store">
          <h3>Kho bản ghi</h3>
          <div>
            <div>
              <InputSearch
                placeholder='Tên bản ghi...'
                name='searchRecord'
                setValue=''
              />
            </div>
            <div>
              <div className="options">
                <div>
                  <p>Thể loại: </p>
                  <Dropdown menu={{ items }}><div></div></Dropdown>
                </div>
                <div>
                  <p>Định dạng: </p>
                  <Dropdown menu={{ items }}><div></div></Dropdown>
                </div>
                <div>
                  <p>Thời hạn sử dụng: </p>
                  <Dropdown menu={{ items }}><div></div></Dropdown>
                </div>
                <div>
                  <p>Trạng thái: </p>
                  <Dropdown menu={{ items }}><div></div></Dropdown>
                </div>
                <div className="switch">
                  <span className={displaySwitch === 'row' ? `active` : ''}>
                    <UnorderedListOutlined />
                  </span>
                  <span className={displaySwitch === 'table' ?  `active` : ''}>
                    <AppstoreOutlined />
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default Record