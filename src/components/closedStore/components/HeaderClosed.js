import React from 'react'
import { formatPhoneNumber } from '../../../selectors/getType'
import '../../header/styles/_header.scss'
import './styles/_header.scss'
 
export default function HeaderClosed({data}) {
  return (
    <section id="storeContent" itemScope="" itemType="https://schema.org/Store">
        <div className="cic-rate-state-wrapper">
            <div className="rate-state-background">
                <img alt="Store Closed " itemProp="image" src="https://localstoresprd.wpenginepowered.com/wp-content/uploads/moment-feed/store.webp" />
            </div>
            <div className="rate-state-info">
                <div className="rate-state-title">
                    <h1 itemProp="name">{data.name}, {data.locality}, {data.state_min} </h1>
                </div>
                <div className="rate-state-table">
                    <h4 className="txtLeft"> {data.locality}, {data.state_min} </h4>
                    <div className="rt-loan-amount" itemScope="" itemProp="address" itemType="https://schema.org/PostalAddress">
                        <div className="iconDiv topTel">
                            <div className="cic-icon-primary spaceIcon mm-icon-wrapper noRepeat IconPhone"></div>
                            <div>
                                <a href={`tel:+${data.phone}`} title={`"Click here to Call Us at ${data.phone}`} aria-label={`Click here to Call Us at ${data.phone}`}>
                                    <p>
                                        <span itemProp="telephone">{formatPhoneNumber(data.phone)}</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div className="rt-loan-amount" itemScope="" itemProp="address" itemType="https://schema.org/PostalAddress">
                        <div className="iconDiv">
                            <div className="cic-icon-primary spaceIcon mm-icon-wrapper noRepeat IconMapPin"></div>
                            <div>
                                <p><span itemProp="streetAddress"> {data.address}, {data.locality}, {data.state_min}, {data.zip} </span></p>

                            </div>
                        </div>
                    </div>
                    <div className="rt-loan-amount">
                        <div className="iconDiv">
                            <div className=" spaceIcon mm-icon-wrapper noRepeat IconWarning"></div>
                            <div>
                                <p className="cic-paragraph--medium warning"><span> Store is Closed</span></p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="rate-about-buttons" itemScope="" itemProp="hasMap" itemType="https://schema.org/Map">
                    <a rel="noopener noreferrer" target="_blank" href={`${process.env.GATSBY_APPLY}`} className="cic-btn cic-btn-primary my-3" aria-label="Click here to apply for a Check Into Cash Payday Loan now"> Get Started </a>
                </div>
                <div className="rate-state-callus">
                    <p className="cic-paragraph--medium ml-2"><a title="Back to Stores List" rel="noopener noreferrer" aria-label="Back to Stores List" href="/">Back to Stores List</a></p>
                </div>
            </div>
        </div>
    </section>
  )
}
