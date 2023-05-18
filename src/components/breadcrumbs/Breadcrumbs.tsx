import { Breadcrumb } from 'antd';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css'

interface IItems {
  key: number
  path: string
  namePage: string
}

interface IBreadcrumb {
  crumbs: IItems[]
}

function Breadcrumbs({crumbs}: IBreadcrumb) {
    return(
       <nav> 
          <Breadcrumb className="breadcrumb" separator={<IoIosArrowForward />}>
            {crumbs.map(item => {
              return <Breadcrumb.Item key={item.key}>
                <Link to={item.path}>{item.namePage}</Link>
              </Breadcrumb.Item>
            })}
          </Breadcrumb>
        </nav>
    )
}

export default Breadcrumbs