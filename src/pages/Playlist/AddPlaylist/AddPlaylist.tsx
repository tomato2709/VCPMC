import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Option from '../../../components/option/Option'
import { MdAdd } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const AddPlaylist: React.FC = () => {
    const navigate = useNavigate()
    const [ title ] = useState("VCPMC | Thêm Playlist");

    useEffect(() => {
        document.title = title;
    }, [title]);

    const optionProps = [
        {
            icon: MdAdd,
            text: 'Thêm bản ghi',
            event: () => navigate('add-record-to-playlist')
        }
    ]
    const breadcrumbs = [
        {
          key: 1,
          path: '../playlist',
          namePage: 'Playlist'
        },
        {
          key: 2,
          path: '',
          namePage: 'Thêm playlist mới'
        }
    ]
    return (
        <div>
            <div>
                <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <div>
                <h3>Thêm Playlist</h3>
            </div>
            <Option optionProps={optionProps} />
        </div>
    )
}

export default AddPlaylist