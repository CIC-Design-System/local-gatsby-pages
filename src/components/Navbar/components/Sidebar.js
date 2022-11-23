import React from 'react'

export default function Sidebar({data}) {
  return (
    <div id="cic-sidebar" className="sidebar left" >
	
        <div id="cic-nav-drawer-heading" className="d-flex justify-content-between align-items-center">
            <div className="cic-header-nav-logo site-logo mx-4 my-2">
                <img className="cic-header-nav-img" src="https://localstoresprd.wpenginepowered.com/wp-content/uploads/2022/01/cic-logo-2.png" alt="Check Into Cash! Your One Stop Money Shop" title="Check Into Cash! Your One Stop Money Shop" width="64" height="48" />
            </div>
            <div className="cic-header-nav-icon mx-4">
                <div className="cic-close-size IconCloseMenu pointer cic-icon-primary" id="cic-control--close" tabindex="0"></div>
            </div>
        </div>
        
        <div id="cic-nav-drawer-menu" className="d-flex flex-column mx-4">
            <div className="tablet-menu-row">
                <div className="tablet-menu-column">
                    <div id="cic-header-nav-accordion" className="list-group d-flex" role="menu">
                        <a href="https://checkintocash.com/" title="Home" className="cic-header-top-nav-item cic-heading-4 d-flex justify-content-between align-items-center collapsed" role="menuitem">
                            <p className="cic-lead cic-lead--medium">Home</p>
                        </a>
                        
                        <a href="https://checkintocash.com/payday-loans/" className="cic-header-top-nav-item cic-heading-4 d-flex justify-content-between align-items-center collapsed" aria-label="" role="menuitem">
                            <p className="cic-lead cic-lead--medium">Payday Loans</p>
                        </a>
                        
                        <a href="https://checkintocash.com/title-loans/" className="cic-header-top-nav-item cic-heading-4 d-flex justify-content-between align-items-center collapsed" aria-label="" role="menuitem">
                            <p className="cic-lead cic-lead--medium">Title Loans</p>
                        </a>
                        
                        <a href="https://checkintocash.com/rates-and-terms/" className="cic-header-top-nav-item cic-heading-4 d-flex justify-content-between align-items-center collapsed" aria-label="" role="menuitem">
                            <p className="cic-lead cic-lead--medium">Rates and Terms</p>
                        </a>
                        
                        <a href="https://checkintocash.com/how-it-works/" className="cic-header-top-nav-item cic-heading-4 d-flex justify-content-between align-items-center collapsed" aria-label="" role="menuitem">
                            <p className="cic-lead cic-lead--medium">How it Works</p>
                        </a>
                    </div>			
                    <div className="cic-btn-container">
                        <p className="cic-font-secondary">Need Cash Today?</p>
                        <a href="https://apply.checkintocash.com/" title="Apply Now" className="cic-btn cic-btn-primary my-2">
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="tablet-menu-column left">
                    <div className="d-flex flex-column">
                        <hr />
                        <div>
                            <a href="https://checkintocash.com/store-locator/" title="Find A Store" className="mm-sidebar-item align-items-center">
                                <div className="mm-icon-wrapper cic-icon-primary IconMapPin"></div>
                                <p className="cic-paragraph--medium cic-font-secondary m-2">Find A Store</p>
                            </a>
                        </div>
                        <hr />
                    </div>
                    <div className="d-flex flex-row">
                        <div id="cic-nav-drawer-login-container" className="d-flex flex-column justify-content-center align-items-center mr-2">
                            <a href="https://checkintocash.com/customer-login/" title="Log In" className="tamDivLog d-flex flex-column justify-content-center align-items-center">
                                <div className="cic-nav-drawer-icon">
                                    <div className="IconPerson cic-icon-primary cic-login-size"></div>
                                </div>
                                <p className="cic-font-secondary cic-paragraph--medium mt-2">Log In</p>
                            </a>
                        </div>
                        <div className="d-flex flex-column justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div className="cic-nav-drawer-icon">
                                    <div className="mm-icon-wrapper-left cic-icon-primary IconPhone"></div>
                                </div>
                                <a href="https://checkintocash.com/contact-us/" title="Contact Us" className="cic-font-secondary cic-paragraph--medium ml-3">Contact Us</a>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <div className="cic-nav-drawer-icon">
                                    <div className="mm-icon-wrapper-left cic-icon-primary IconFraud"></div>
                                </div>
                                <a href="https://checkintocash.com/fraud-security/" title="Fraud &amp; Security" className="cic-font-secondary cic-paragraph--medium ml-3">Fraud &amp; Security</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="bottom-menu" />
        </div>
    </div>
  )
}
