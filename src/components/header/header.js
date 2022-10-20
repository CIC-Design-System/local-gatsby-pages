import React from 'react'

import './styles/header.scss'

export default function Header({ page}) {
  return (
    <section id="storeContent" itemScope="" itemType="https://schema.org/Store">
        <div className="cic-rate-state-wrapper">
            <div className="rate-state-background">
                <img itemProp="image"
                    src="https://localstoresprd.wpenginepowered.com/wp-content/uploads/moment-feed/al/alexander-city-6089b071e4b0d9ce545206f3.webp"
                    alt="Image of the store" />
            </div>
            <div className="rate-state-info">
                <div className="rate-state-title">
                    <h1 itemProp="name"> Check Into Cash {page.title} </h1>
                </div>
                <div className="rate-state-table">
                    <h2 className="txtLeft h2-sub"> Alexander City, AL </h2>
                    <div className="rt-loan-amount" itemScope="" itemProp="address" itemType="https://schema.org/PostalAddress">
                        <div className="iconDiv topTel">
                            <div className="cic-icon-primary spaceIcon mm-icon-wrapper noRepeat IconPhone"></div>
                            <div>
                                <a href="tel:+2563299542" title="Click here to Call Us at 2563299542"
                                    aria-label="Click here to Call Us at 2563299542">
                                    <h3 className="h3-third">
                                        <span itemProp="telephone">
                                            (256)-329-9542
                                        </span>
                                    </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rt-loan-amount" itemScope="" itemProp="address" itemType="https://schema.org/PostalAddress">
                        <div className="iconDiv">
                            <div className="cic-icon-primary spaceIcon mm-icon-wrapper noRepeat IconMapPin"></div>
                            <div>
                                <a target="_blank" rel="noopener noreferrer"
                                    title="Click here to get the Google Map directions"
                                    href="https://maps.google.com/maps?cid=8296081415232152819"
                                    aria-label="Click here to get the Google Map directions">
                                    <h3 className="h3-third">
                                        <span itemProp="streetAddress">  3706 Hwy 280, Alexander City, AL, 35010 </span>
                                    </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rt-loan-amount">
                        <div className="iconDiv">
                            <div className="cic-icon-primary spaceIcon mm-icon-wrapper IconBuilding noRepeat"></div>
                            <div>
                                <a target="_blank" rel="noopener noreferrer"
                                    title="Click here to get the Google Map directions"
                                    href="https://maps.google.com/maps?cid=8296081415232152819"
                                    aria-label="Click here to get the Google Map directions">
                                    <h3 className="h3-third"> <span itemProp="streetAddress"> Next to La Posada Mexican Grill </span> </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="rt-loan-amount">
                        <div className="iconDiv">
                            <div className="spaceIcon mm-icon-wrapper IconClock"></div>
                            <a data-toggle="collapse" href="#openIntervals" className="cic-store-locator-openIntervals-trigger collapsed" aria-expanded="false">

                                <div className="hourdsDiv mg60">
                                    <span className="cic-paragraph--medium green-cic">Open Now:</span>
                                </div>
                                <p className="smText spaceTime" itemProp="openingHours">10am - 6pm</p>
                                <div className="mm-icon-wrapper color_background_svg  IconChevronDown"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="rate-state-buttons" itemScope="" itemProp="hasMap" itemType="https://schema.org/Map">
                    <a  el="noopener noreferrer" target="_blank"
                        href="https://www.4215trk.com/rd/r.php?sid=6&amp;pub=460033&amp;lpid=17&amp;c1=mf&amp;c2=mfemc&amp;c3=gs"
                        className="cic-btn cic-btn-primary my-3"
                        aria-label="Click here to apply for a Check Into Cash Payday Loan now"> Get Started </a>
                    <a itemProp="mapType"  rel="noopener noreferrer" target="_blank"
                        href="https://maps.google.com/maps?cid=8296081415232152819"
                        className="cic-btn cic-btn-secondary--dark"
                        aria-label="Click here to get the directions from this store"> Get Directions </a>
                </div>
                <div className="rate-state-callus">
                    <p className="cic-paragraph--medium ml-2"><a title="Back to Stores List" rel="noopener noreferrer"
                            aria-label="Back to Stores List" href="https://local.checkintocash.com/us/al/">Back to Stores
                            List</a></p>
                </div>
            </div>
        </div>
    </section>
  )
}
