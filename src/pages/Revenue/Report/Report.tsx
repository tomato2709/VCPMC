import './Report.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Option from '../../../components/option/Option'
import { Select, message } from 'antd'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { useAppSelector } from '../../../redux/store'

const RevenueReport: React.FC = () => {
    const { user } = useAppSelector(state => state.user)
    const breadcrumb = [
        {
            key: 1 ,
            path: '',
            namePage: 'Doanh thu' 
        },
        {
            key: 2,
            path: '',
            namePage: 'Báo cáo doanh thu'
        }
    ]
    
    const optionProps = [
        {
            icon: HiOutlineNewspaper,
            text: 'Báo cáo chi tiết',
            event: () => {

            },
            unActive: user.isAdmin ? false : true
        }
    ]

  return (
    <div className="revenue-report">
        <Breadcrumbs crumbs={breadcrumb} />
        <div>
            <h3>Báo cáo doanh thu</h3>
        </div>
        <div className='content'>
            <div className="select-wrap">
                <h5>Theo tháng:</h5>
                <span >
                <Select
                    options={[
                      {
                        value: "month",
                        label: "Theo tháng",
                      },
                      {
                        value: "quarter",
                        label: "Theo quý",
                      },
                    ]}
                    style={{ width: 160 }}
                    defaultValue="Theo tháng"
                ></Select>
                </span>
                <span>
                <Select
                    options={[
                      {
                        value: "january",
                        label: "Tháng 1",
                      },
                      {
                        value: "february",
                        label: "Tháng 2",
                      },
                      {
                        value: "march",
                        label: "Tháng 3",
                      },
                      {
                        value: "april",
                        label: "Tháng 4",
                      },
                      {
                        value: "may",
                        label: "Tháng 5",
                      },
                      {
                        value: "june",
                        label: "Tháng 6",
                      },
                      {
                        value: "july",
                        label: "Tháng 7",
                      },
                      {
                        value: "august",
                        label: "Tháng 8",
                      },
                      {
                        value: "september",
                        label: "Tháng 9",
                      },
                      {
                        value: "october",
                        label: "Tháng 10",
                      },
                      {
                        value: "november",
                        label: "Tháng 11",
                      },
                      {
                        value: "december",
                        label: "Tháng 12",
                      },
                    ]}
                    style={{ width: 160 }}
                    defaultValue="Tháng 1"
                ></Select>
                </span>
            </div>
            <div className='total'>
                <div>
                    <p>Tổng số bài hát</p>
                    <h5>100</h5>
                </div>
                <div>
                    <p>Tổng số lượt phát</p>
                    <h5>32.000.000</h5>
                </div>
                <div>
                    <p>Doanh thu trên lượt phát</p>
                    <h5>1.564.745.000đ</h5>
                </div>
                <div>
                    <p>Doanh thu chưa phân phối</p>
                    <h5>164.745.000đ</h5>
                </div>
                <div>
                    <p>Hành chính phí</p>
                    <h5>3.253.000đ</h5>
                </div>
            </div>
            <div className='chart'>
                <h4>Biểu đồ theo dõi lượt phát - 29/06/2021</h4>
            </div>
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default RevenueReport