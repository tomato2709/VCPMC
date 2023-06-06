import React, { useEffect, useState } from 'react'
import Tab from '../../../components/tab/Tab'
import AuthorizedContract from './AuthorizedContract'
import MiningContract from './MiningContract'

const ManageContract: React.FC = () => {
    const [ title ] = useState("VCPMC | Quản lý hợp đồng");

    useEffect(() => {
        document.title = title;
    }, [title]);
    
    const tabItems = {
        buttons: [
          {
            id: 1,
            text: 'Hợp đồng ủy quyền',
          },
          {
            id: 2,
            text: 'Hợp đồng khai thác'
          }
          
        ],
        items: [
          {
            id: 1,
            component: AuthorizedContract,
          },
          {
            id: 2,
            component: MiningContract,
          },
        ]
      }
    return (
        <div className="manage-contract">
            <h3>Danh sách hợp đồng</h3>
            <div>
                <Tab buttons={tabItems.buttons} items={tabItems.items} />
            </div>
        </div>
    )
}

export default ManageContract
