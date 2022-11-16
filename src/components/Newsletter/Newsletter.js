import React, {useEffect,useState,useCallback} from 'react'
import { Fragment } from 'react'
import './styles/_newsletter.scss' 

export default function Newsletter() {
    const oFocusI = useCallback( (e) => { 
        const id = e.currentTarget.id;
        const input = document.getElementById(id);
        const container = document.getElementById(id+"-container");
        const icon = document.getElementById(id+"-icon");
        const iconF = document.getElementById(id+"-icon-focus");
        input.placeholder = " "
        container.classList.add("cic-focused-border"); 
        icon.style.display = "none";
        iconF.style.display = "inline";  
        
    }, [] );
     
    const onBlurI = useCallback( (e) => { 
        const id = e.currentTarget.id; 
        const input = document.getElementById(id);
        const container = document.getElementById(id+"-container");
        const icon = document.getElementById(id+"-icon");
        const iconF = document.getElementById(id+"-icon-focus");
        container.classList.remove("cic-focused-border");
        icon.style.display = "inline";
        iconF.style.display = "none"; 
        input.placeholder = " "
        
    },[] ); 
  return (
    <Fragment>
    <div className="fl-module fl-module-cic-newsletter fl-node-fi4qb6a2gdj8 cic-light-waves-background-pattern" data-node="fi4qb6a2gdj8">
        <div className="fl-module-content fl-node-content"> 
            <div id="cic-newsletter-container"> 
                <div id="cic-newsletter-title">
                    <p className="cic-heading-2">Get giveaway alerts, special offers, and more</p>
                </div> 
                <div id="cic-newsletter-content-container"> 
                    <ul className="nav nav-tabs justify-content-center" id="newsletter-tabs">
                        <li className="nav-item" role="presentation">
                            <button className="news_btn nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="news_btn nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="newsletter-tab-container"> 
                        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="email-tab-panel">
                                <div className="cic-newsletter-input">
                                    <p>Sign up for Emails.</p> 
                                    <div className="d-flex form-group has-float-label cic-fl-input cic-left-icon" id="cic-email-container"> 
                                        <div className="mm-icon-wrapper IconEmail floatLeft" id="cic-email-icon"></div>
                                        <div className="mm-icon-wrapper IconEmailColor floatLeft" id="cic-email-icon-focus" style={{display:'none'}}></div> 
                                        <input onBlur={onBlurI} onFocus={oFocusI} className="form-control cic-general-input cic-news-input" id="cic-email" type="input" aria-label="Enter your email here." placeholder=" " />
                                        <label htmlFor="cic-email">Email Address</label>
                                    </div> 
                                    <div className="validation-messages" id="newsletter-error-message">
                                        <i className="up-arrow"></i>
                                        <p className="cic-caption--medium">Please enter a valid Email</p>
                                    </div>
                                </div> 
                                <div id="cic-newsletter-button-container">
                                    <button id="cic-newsletter-button" className="btn-cic-news cic-btn cic-btn-tertiary" aria-label="Click here to subscribe for giveaway alerts, special offers, and more." >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="text-tab-panel">
                                <div className="cic-newsletter-text-input">
                                    <p>Sign up for SMS.</p>
                                    <div className="d-flex form-group has-float-label cic-fl-input cic-left-icon" id="cic-phone-container">
                                        <div className="mm-icon-wrapper IconMobile floatLeft" id="cic-phone-icon"></div>
                                        <div className="mm-icon-wrapper IconMobileColor floatLeft" id="cic-phone-icon-focus" style={{display:'none'}}></div> 
                                        <input onBlur={onBlurI} onFocus={oFocusI} className="form-control cic-general-input cic-news-input" id="cic-phone" type="input" aria-label="Enter your phone here." placeholder=" " />
                                        <label htmlFor="cic-phone">Mobile SMS</label>
                                    </div>
                                    <div className="validation-messages" id="newsletter-phone-error-message">
                                        <i className="up-arrow"></i>
                                        <p className="cic-caption--medium">Please enter a valid Phone</p>
                                    </div>
                                </div>
                                <div id="cic-newsletter-text-button-container">
                                    <button id="cic-newsletter-text-button" className="btn-cic-news cic-btn cic-btn-tertiary" aria-label="Click here to subscribe for giveaway alerts, special offers, and more." > Subscribe </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
  )
}
