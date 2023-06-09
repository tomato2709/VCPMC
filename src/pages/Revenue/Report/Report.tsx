import { useEffect, useState } from 'react'
import './Report.css'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
import Option from '../../../components/option/Option'
import { Select } from 'antd'
import { Line } from '@ant-design/plots';
import { HiOutlineNewspaper } from 'react-icons/hi'
import { useAppSelector } from '../../../redux/store'
import { useNavigate } from 'react-router-dom'

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
    style: {
      height: '250px',
      background: 'rgb(47,47,65, 0.7)',
      borderRadius: '20px',
      padding: '20px'
    }
  };

  return <Line {...config} />;
};

const RevenueReport: React.FC = () => {
    const navigate = useNavigate()
    const { user } = useAppSelector(state => state.user)
    const [ title ] = useState("VCPMC | Báo cáo doanh thu");

    useEffect(() => {
        document.title = title;
    }, [title]);
    
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
              navigate('report-detail')
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
                <div className="line-chart"><DemoLine /></div>
            </div>
        </div>
        <Option optionProps={optionProps} />
    </div>
  )
}

export default RevenueReport