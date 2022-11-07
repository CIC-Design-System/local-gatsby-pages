import React, { useState,useEffect } from 'react'
import { filterProviders, formatPhoneNumber } from '../../../selectors/getType';
export default function SingleStore({store, index}) {
    const [map, setMap] = useState([]);
    useEffect(() => {
         const link = filterProviders(store, 'Google')
         setMap(link);
    }, [store])
     
  return (
    <div className={`store${index}`}>
        <div className="storeTitle">
            <div className="store100"><p className="cic-heading-4 textLeft">{store.location.name} {store.location.locality}</p></div> 
        </div>
        <div className="store-details">    
            <div className="rt-loan-amount">
                <div className="iconDiv">
                    <div className="cic-icon-primary spaceIcon noRepeat mm-icon-wrapper IconTarget"></div>
                    <div>
                        <p><span className="cic-paragraph--medium">{store.distance} miles away</span></p>
                    </div>
                </div>
            </div>
            <div className="rt-loan-amount heightDir">
                <div className="iconDiv">
                    <div className="cic-icon-primary spaceIcon noRepeat mm-icon-wrapper IconMapPin"></div>
                    <div className="spanDir">
                        <p><span className="cic-paragraph--medium">{store.location.address}, {store.location.locality}, {store.location.region}</span> 
                        </p>
                    </div>
                </div>
            </div>
            <div className="rt-loan-amount">
                <div className="iconDiv">
                    <div className="cic-icon-primary spaceIcon noRepeat mm-icon-wrapper IconPhone"></div>
                    <div>
                        <a href={`tel:+${store.location.phone}`}>
                            <p><span className="cic-paragraph--medium">{formatPhoneNumber(store.location.phone)}</span></p>
                        </a>
                    </div>
                </div>
            </div>
        </div>   
        <div className="spaceLoans">
            {
                ( map.length ) 
                ? <a target="_blank" rel="noopener noreferrer" href={`${map[0].url}`} className="cic-btn cic-btn-secondary--dark" aria-label={`Find a ${store.location.name} store near you`}> Get Directions </a>
                : <></>
            }
            <a href={`${store.location.website}`} rel="noopener noreferrer" className="cic-btn green-cic spaceTop">More Store Details </a>
        </div>
        <hr className="directions" />
    </div> 
  )
}
