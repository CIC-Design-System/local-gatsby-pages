import React from 'react'
import { getCurrentYear } from '../../../selectors/getType'

export default function FooterMeta() {
  return (
    <div id="cic-footer-contact-meta-container">
        <hr id="cic-footer-hr--desktop" className="cic-footer-hr" />
        <div id="cic-footer-contact-meta">
            <div id="cic-footer-left-container">
                <div className="cic-footer-logos-container">
                    <a href="https://www.infinalliance.org/" title="INFIN Financial Services Alliance Member Seal" aria-label="Click to go to the INFIN Financial Services Alliance website">
                        <img width="64" height="58" alt="INFIN Financial Services Alliance Member Seal" title="INFIN Financial Services Alliance Member Seal" className="infin-logo entered lazyloaded" src="https://localstoresprd.wpenginepowered.com/wp-content/themes/bb-theme-child/assets/img/INFiN-Decal.webp" />
                    </a>
                    <img width="137" height="138" alt="Network Solutions Identity Verified Seal" title="Network Solutions Identity Verified Seal" className="network-logo entered lazyloaded" src="https://localstoresprd.wpenginepowered.com/wp-content/themes/bb-theme-child/assets/img/network-solutions-logo.webp"  />
                </div>
                <div id="cic-footer-social-media-container">
                    <div className="d-flex justify-content-start">
                        <p className="cic-lead--medium text-white" >Follow Us</p>
                    </div>
                    <div className="d-flex flex-row"> 
                        <div className="cic-footer-social-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/checkn2cash" title={`${process.env.GATSBY_BRAND} on Youtube`} aria-label={`Click here to watch ${process.env.GATSBY_BRAND} on Youtube`}>
                                <div className="mm-icon-wrapper IconYT cic-icon-footer"></div>
                            </a>
                        </div>
                        <div className="cic-footer-social-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/checkintocash" title={`${process.env.GATSBY_BRAND} on Facebook`} aria-label={`Click here to like ${process.env.GATSBY_BRAND} on Facebook`}>
                                <div className="mm-icon-wrapper IconFacebook cic-icon-footer"></div>
                            </a>
                        </div>
                        <div className="cic-footer-social-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/check-into-cash" title={`${process.env.GATSBY_BRAND} on LinkedIn`} aria-label={`Click here to network with ${process.env.GATSBY_BRAND} on LinkedIn`}>
                                <div className="mm-icon-wrapper IconLinkedin cic-icon-footer"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cic-footer-copyright">
                <hr id="cic-footer-hr--mobile" className="cic-footer-hr" />
                <div id="cic-footer-copyright-img-container" className="my-3">
                    <a href="https://www.infinalliance.org/" title="INFIN Financial Services Alliance Member Seal" aria-label="Click to go to the INFIN Financial Services Alliance website">
                        <img width="64" height="58" alt="INFIN Financial Services Alliance Member Seal" title="INFIN Financial Services Alliance Member Seal" className="cic-mobile-only infin-logo" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2058'%3E%3C/svg%3E" />
                    </a>
                    <img width="137" height="138" alt="Network Solutions Identity Verified Seal" title="Network Solutions Identity Verified Seal" className="cic-mobile-only network-logo" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20137%20138'%3E%3C/svg%3E"  />
                    <img width="160" height="114" alt={`${process.env.GATSBY_BRAND}! Your One Stop Money Shop`} title={`${process.env.GATSBY_BRAND}! Your One Stop Money Shop`} className="cic-logo entered lazyloaded" src="https://localstoresprd.wpenginepowered.com/wp-content/uploads/2022/03/ciclogo-whitetag.webp"  />
                </div>
                <p className="cic-caption text-white d-flex mb-2">© { getCurrentYear() } {process.env.GATSBY_BRAND}. All Rights Reserved.</p>
            </div>
        </div>
    </div>  
  )
}
