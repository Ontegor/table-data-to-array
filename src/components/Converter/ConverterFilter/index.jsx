import React from 'react'
import './ConverterFilter.css'

const ConverterFilter = ({language, setLanguage}) => {
    return (
        <div className="Filter">
            {
                ['Php', 'Js'].map((lang, index) => {
                    return (
                        <div className="Filter-Item" key={index}>
                            <input id={"Filter-Item-"+index} onChange={() => setLanguage(lang)} type="radio" name="radio" value={lang} checked={language === lang ? 'checked' : ''} />
                            <label htmlFor={"Filter-Item-"+index}>{lang}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default ConverterFilter