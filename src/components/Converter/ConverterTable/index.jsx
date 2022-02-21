import React from 'react';
import './ConverterTable.css'

const ConverterTable = ({tableData, setTableData}) => {
    return (
        <div className="InputDataWrapper">
            <textarea className="Textarea" placeholder="Copy the text from excel and paste here ..." rows="12" name="table1" value={tableData.table1} onChange={event => setTableData({
                ...tableData,
                table1: event.target.value
            })} />
            <textarea className="Textarea" placeholder="Copy the text from excel and paste here ..." rows="12" name="table2" value={tableData.table2} onChange={event => setTableData({
                ...tableData,
                table2: event.target.value
            })} />
        </div>

    )
}

export default ConverterTable