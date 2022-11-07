import React, {useContext } from 'react'

import './styles/_header.scss';
import { InfoContext } from '../../context/Context';
import StoreDetails from './components/StoreDetails';
import Buttons from './components/Buttons';
import { formatPhoneNumber } from '../../selectors/getType';
 


export default function Header() {
    const { data, store} = useContext(InfoContext);
    const result = store.data.customFields.filter(custom => custom.name === 'Store Image');
    let phone_number = formatPhoneNumber(store.data.phone);
  return (
    <section id="storeContent" itemScope="" itemType="https://schema.org/Store">
        <div className="cic-rate-state-wrapper">
            <div className="rate-state-background">
                <img itemProp="image" src={result[0].data} alt={`Store in  ${data.momentFeed.name} ${data.momentFeed.locality}, ${data.momentFeed.state_min}`} />
            </div>
            <div className="rate-state-info">
                <div className="rate-state-title">
                    <h1 itemProp="name"> {data.momentFeed.name} {data.momentFeed.locality}, {data.momentFeed.state_min} </h1>
                </div>
                <div className="rate-state-table">
                    <h2 className="txtLeft h2-sub"> {data.momentFeed.locality}, {data.momentFeed.state_min} </h2>
                    <StoreDetails 
                        topTel="topTel" 
                        icon="IconPhone" 
                        url={`tel:+${store.data.phone}`} 
                        aria={`Call Us at ${phone_number}`} 
                        text={phone_number} 
                        type="address" 
                        schema="https://schema.org/PostalAddress" 
                    />

                    <StoreDetails 
                        topTel="" 
                        icon="IconMapPin" 
                        url={`tel:+${store.data.phone}`} 
                        aria={`get the Google Map directions`} 
                        text={`${store.data.address}, ${store.data.locality}, ${store.data.region}, ${store.data.postcode} `} 
                        type="address" 
                        schema="https://schema.org/PostalAddress" 
                    />
                    {
                        (store.data.sublocality === "") 
                        ? <></> 
                        : (
                            <StoreDetails 
                                topTel="" 
                                icon="IconBuilding" 
                                url={`${store.data.website}`} 
                                aria={`get the Google Map directions`} 
                                text={`${store.data.sublocality} `} 
                            />
                        )
                    }
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
                    <Buttons link="" btn="cic-btn-primary" aria={`Click here to apply for a ${data.momentFeed.name} Payday Loan now`} text={`Get Started`} /> 
                    <Buttons link="" btn="cic-btn-secondary--dark" aria="Click here to get the directions from this store" text={`Get Directions`} item="mapType"  /> 
                </div>
                <div className="rate-state-callus">
                    <p className="cic-paragraph--medium ml-2">
                        <a title="Back to Stores List" rel="noopener noreferrer" aria-label="Back to Stores List" href="https://local.checkintocash.com/us/al/">Back to Stores List</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
