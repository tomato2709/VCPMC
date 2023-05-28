import { useEffect } from 'react'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import CustomTab from '../../../components/tab/Tab';
import { fetchUsers } from '../../../redux/slice/listUserSlice';
import { useAppDispatch } from '../../../redux/store';
import ListUser from './ListUser';
import ListRole from './ListRole';

const UserAuthorization: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
    dispatch(fetchUsers())
    }, [])

    const tabItems = {
        buttons: [
            {
            id: 1,
            text: 'Danh sách người dùng',
            },
            {
            id: 2,
            text: 'Vai trò người dùng'
            }
            
        ],
        items: [
            {
            id: 1,
            component: ListUser,
            },
            {
            id: 2,
            component: ListRole,
            },
        ]
            
        }
    const breadcrumb = [
        {
            key: 1 ,
            path: '',
            namePage: 'Cài đặt' 
        },
        {
            key: 2,
            path: '',
            namePage: 'Phân quyền người dùng'
        },
        ]
    
  return (
    <div className="authorization">
      <div>
        <Breadcrumbs crumbs={breadcrumb} />
      </div>
      <div>
        <h3>Danh sách người dùng</h3>
      </div>
      <div>
        <CustomTab buttons={tabItems.buttons} items={tabItems.items} />
      </div>
    </div>
  )
}

export default UserAuthorization