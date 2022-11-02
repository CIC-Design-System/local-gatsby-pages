import React,{useContext } from 'react'
import './styles/_getStarted.scss'
import { InfoContext } from '../../context/Context';  
import { filterArray } from '../../selectors/getType'; 
export default function Started() {
    const { data, storeContent } = useContext(InfoContext);  

    const renderCheckList = () => { 
        const result = filterArray(storeContent, "getting-started-checklist");   
        return(
            <div dangerouslySetInnerHTML={{ __html: `${result[0].settings.mfTagContent}` }} />
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
                    ( typeof storeContent === 'object') ? ( renderCheckList() )  : <></>
                 }
            </div>
        </div>
    </section>

  )
}
