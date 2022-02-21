import React from 'react';
import './ConverterAction.css';

const ConverterAction = ({ tableData, convertForms }) => {
    return (
        <button
            className="Button"
            disabled={!tableData.table1 || !tableData.table2}
            onClick={() => convertForms()}
        >
            Start
        </button>
    );
};

export default ConverterAction;
