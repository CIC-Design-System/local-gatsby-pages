import React,{useState} from 'react'
import './styles/_alert.scss'
export default function Alert({results, classN}) {
    const [open, setOpen] = useState(classN); 
    const closeAlert =() =>{
        setOpen("hidden")
    }
  return (
    <div className={`cic-alert-banner-container ${open}`}>
        <span className="cic-banner-exit-icon">
            <button onClick={() => closeAlert()} id="alert-close-button" className='nBorder'>
                <div className="cic-phone-white-size IconCloseMenu cic-icon-primary"></div> 
            </button>
        </span>
        <div className="cic-alert-banner-wrapper">
            <div className="alert-title">
                <h4 id="alert-title-text">{results.data.title}</h4>
            </div>
            <div className="alert-content">
                <p className="cic-paragraph--medium" id="alert-content-text">{results.data.paragraph}</p> 
            </div>        
            <div className="alert-buttonSecondary">
                <span id="alert-btn-reject">
                    <button onClick={() => closeAlert()} id="alert-buttonPrimary-text" className="btnClean cic-btn cic-btn-primary">Close</button>
                </span>
            </div>
        </div>
    </div>
  )
}
