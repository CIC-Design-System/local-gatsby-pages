import React from 'react'

export default function FooterHours() {
  return (
    <div id="cic-footer-contact-info-container" className="d-flex">
        <div id="cic-footer-contact-info" aria-label={`Click to call Check Into Cash at ${process.env.GATSBY_NUMBER}`}>
            <div className="mm-icon-no IconPhoneFooter cic-icon-tertiary"></div>
            <p className="cic-paragraph--medium"><a className="footer-call-us" href={`tel:+${process.env.GATSBY_NUMBER}`}>Call Us {process.env.GATSBY_NUMBER}</a></p>
        </div>
        <div id="cic-footer-contact-hours" aria-label="Check Into Cash call center operates Monday through Friday from 8 o'clock am to 7 o'clock pm Eastern Time">
            <span className="d-flex">    
                <p className="cic-paragraph--medium text-white">Call Center Hours:</p>
            </span>
            <span className="d-flex">    
                <p className="cic-paragraph--medium text-white">Mon. - Fri. </p>
                <p className="cic-paragraph--medium text-white">9am - 6pm EST</p>
            </span>
            <span className="d-flex">    
                <p className="cic-paragraph--medium text-white">Sat. </p>
                <p className="cic-paragraph--medium text-white">11am - 3pm EST</p>
            </span>
            <span className="d-flex">    
                <p className="cic-paragraph--medium text-white">Sun. </p>
                <p className="cic-paragraph--medium text-white">Closed</p>
            </span>
        </div>
    </div>
  )
}
