import React from 'react';
import './ConverterResult.css';

const ConverterResult = ({ result }) => {
    return <textarea value={result} className="Result" rows={12} readOnly />;
};

export default ConverterResult;
