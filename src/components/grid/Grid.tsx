import '../../pages/Record/Record.css'
import { Checkbox } from 'antd'
import { SlNote } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import { DataTypeRecord } from '../../redux/slice/recordSlice'
import { useAppSelector } from '../../redux/store'
const RecordImage = require('../../assets/record_image.png')

interface RecordProps {
    record: DataTypeRecord
    selectedRow: boolean
}

function Grid({ record, selectedRow = false }: RecordProps) {
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.user)
  const handleEditRecord = (id: string) => {
    navigate(`update-information/${id}`)
  }
  return (
    <div className="card">
        <div className="img">
            <img src={RecordImage} alt="" /> 
        </div>
        <div className="infoSong">
            <div className="info">
                <h4>{record.nameMusic}</h4>
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
                        <p>{record.IRCID}</p>
                    </span>
                </div>
                <div className="type">
                    <div>
                        <p>Thể loại</p>
                        <h5>{record.type}</h5>
                    </div>
                    <div>
                        <p>Định dạng</p>
                        <h5>{record.format}</h5>
                    </div>
                    <div>
                        <p>Thời lượng</p>
                        <h5>{record.time}</h5>
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