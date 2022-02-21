import React, { useState } from 'react';
import ConverterFilter from './ConverterFilter';
import './Converter.css';
import ConverterTable from './ConverterTable';
import ConverterAction from './ConverterAction';
import ConverterResult from './ConverterResult';

const Converter = () => {
    const [language, setLanguage] = useState('Php');
    const [result, setResult] = useState('');
    const [tableData, setTableData] = useState({
        table1: '',
        table2: '',
    });

    const convertForms = () => {
        const keyArray = tableData.table1.trim().split(/\n/g);
        const valueArray = tableData.table2.trim().split(/\n/g);

        if (keyArray.length !== valueArray.length) {
            alert('Количество строк в колонках должно совпадать');
        }

        if (language === 'Php') {
            let result = '[\n';
            keyArray.map(
                (element, index) =>
                    (result +=
                        "    '" +
                        element.replace(/'/g, "\\'") +
                        "' => '" +
                        valueArray[index].replace(/'/g, "\\'") +
                        "',\n")
            );
            result += ']';
            setResult(result);
        } else if (language === 'Js') {
            let result = '{\n';
            keyArray.map(
                (element, index) =>
                    (result +=
                        '    ' +
                        element.replace(/'/g, "\\'") +
                        ": '" +
                        valueArray[index].replace(/'/g, "\\'") +
                        "',\n")
            );
            result += '}';
            setResult(result);
        }
    };

    return (
        <div className="Converter">
            <ConverterFilter language={language} setLanguage={setLanguage} />
            <ConverterTable tableData={tableData} setTableData={setTableData} />
            <ConverterAction tableData={tableData} convertForms={convertForms} />
            <ConverterResult result={result} />
        </div>
    );
};

export default Converter;
