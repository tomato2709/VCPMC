import React, { useEffect, useState } from "react";
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'

const AddRecordIntoPlaylist: React.FC = () => {
    const [ title ] = useState("VCPMC | Thêm Playlist");

    useEffect(() => {
        document.title = title;
    }, [title]);
    
    const breadcrumbs = [
        {
          key: 1,
          path: '../../playlist',
          namePage: 'Playlist'
        },
        {
          key: 2,
          path: '../playlist/add-playlist',
          namePage: 'Thêm playlist mới'
        },
        {
          key: 3,
          path: '',
          namePage: 'Thêm bản ghi vào playlist'
        },
    ]
    return (
        <div>
            <div>
                <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <div>
                <h3>Thêm bản ghi</h3>
            </div>
        </div>
    )
}

export default AddRecordIntoPlaylist;