import React,{useContext, useState, useMemo } from 'react'
import './styles/_getStarted.scss'
import { InfoContext } from '../../context/Context';  

export default function Started() {
    const { data, storeContent, store} = useContext(InfoContext); 
    const [check, setCheck] = useState(storeContent);  

    const renderCheckList = () => { 
        return(             
        check.data.data.map( (type, index) => {
            if(type.alias == "getting-started-checklist"){ 
                return( 
                    <div key={index} dangerouslySetInnerHTML={{ __html: `${type.settings.mfTagContent}` }} />
                )
            }
        })
        )
    }
  return (
    <section id="cic-check-container">
        <div id="cic-content-container">
            <div className="cic-content-title1">
                <h2 className="text-left">What will you need to get started on your {data.momentFeed.locality}, {data.momentFeed.state_min} loan application?</h2>
            </div>
            <div className="cic-content-title2">
                <p className="cic-heading-4"></p>
            </div>
            <div className="cic-content-info2">
                 {
                    ( typeof check === 'object') ? ( renderCheckList() )  : <></>
                 }
            </div>
        </div>
    </section>

  )
}
