import React, { useState } from 'react'
import '../../pages/Record/Record.css'
import RecordImage from '../../assets/record_image.png'
import { Checkbox, Modal } from 'antd'
import { PlayCircleFilled } from '@ant-design/icons'
import { SlNote } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import { DataTypeRecord } from '../../redux/slice/recordSlice'
import { useAppSelector } from '../../redux/store'
import YouTube, { YouTubeProps } from 'react-youtube';

interface RecordProps {
    record: DataTypeRecord
    selectedRow: boolean
}

function Grid({ record, selectedRow = false }: RecordProps) {
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.user)
  const [ openModal, setOpenModal ] = useState(false)
  const handleEditRecord = (id: string) => {
    navigate(`update-information/${id}`)
  }

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '290',
    width: '460',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="card">
        <div className="img">
            <img src={RecordImage} alt="" onClick={() => setOpenModal(true)}/>
            <Modal className="customModal"
            open={openModal}
            onCancel={() => setOpenModal(false)}
            footer={null}
            >
                <YouTube videoId="rYjQAzZfpMw" opts={opts} onReady={onPlayerReady} />
            </Modal>
        </div>
        <div className="infoSong">
            <div className="info">
                <h4>{record.recordName}</h4>
                <div>
                    <span>
                        <h5>Ca sĩ:</h5>
                        <p>{record.singer}</p>
                    </span>
                    <span>
                        <h5>Sáng tác:</h5>
                        <p>{record.author}</p>
                    </span>
                    <span>
                        <h5>Số hợp đồng:</h5>
                        <p>{record.ISRCID}</p>
                    </span>
                </div>
                <div className="type">
                    <div>
                        <p>Thể loại</p>
                        <h5>{record.genre}</h5>
                    </div>
                    <div>
                        <p>Định dạng</p>
                        <h5>{record.format}</h5>
                    </div>
                    <div>
                        <p>Thời lượng</p>
                        <h5>{record.duration}</h5>
                    </div>
                </div>
            </div>
        </div>
        {user.isAdmin && <div className="edit">
        {selectedRow ? 
            <Checkbox /> : 
            <span onClick={() => handleEditRecord(record.id)}>
                <SlNote color='#FF7506' />
            </span>  
        }
        </div>}
    </div>
  )
}

export default Grid