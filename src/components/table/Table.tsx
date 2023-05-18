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
}

function CustomTable({columns, dataSource, heightProps, rowSelection, pagination = false, widthProps = 94, loading}: ITableProps) {
  return (
    <div className="tableContainer" style={{height: `${heightProps}vh`, width: `${widthProps}%`}}>
        <Table className="customTable"
            rowSelection={rowSelection} 
            columns={columns} 
            dataSource={dataSource} 
            pagination={pagination} 
            loading={loading}
        />
    </div>
  )
}

export default CustomTable