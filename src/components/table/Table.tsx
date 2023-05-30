import React from 'react'
import { Table } from 'antd'
import './Table.css'

interface ITableProps {
    columns: any[],
    dataSource: any[],
    heightProps: number,
    widthProps?: number
    pagination?: any
    rowSelection?: any
    loading?: boolean
    scroll?: any
}

function CustomTable({columns, dataSource, heightProps, rowSelection, pagination = false, widthProps = 94, loading, scroll}: ITableProps) {
  return (
    <div className="tableContainer" style={{height: `${heightProps}vh`, width: `${widthProps}%`}}>
        <Table className="customTable"
            rowSelection={rowSelection} 
            columns={columns} 
            dataSource={dataSource} 
            pagination={pagination} 
            loading={loading}
            scroll={scroll}
        />
        <div className="pagination-amount-display">
          <div className="pagination-input-amount">
            <p>Hiển thị</p><input type="number" defaultValue={9} /><p>hàng trong mỗi trang</p>
          </div>
        </div>
    </div>
  )
}

export default CustomTable