import React, {useContext,useEffect, useState} from 'react'
import { InfoContext } from '../../context/Context';
import { filterArray, filterSingleProv } from '../../selectors/getType';

import './styles/_aboutus.scss'


export default function AboutUs() {
    const { storeContent, data, store}   = useContext(InfoContext);
    const [map, setMap] = useState([]);
    useEffect(() => {
         const link = filterSingleProv(store, 'Google')
         setMap(link);  
    }, [store])
    const bringImg = (field) => {   
       const result = filterArray(storeContent, field); 
       if(result.length > 0 ){
          return(             
            <img  className="lazy entered lazyloaded" alt={`${result[0].settings.mfTitle}`} src={`${result[0].settings.mfSrc}`} />
          )
       }
    }
  return (
    <section id="GetStarted">
            <div className="cic-how-it-works-wrapper">
                <div className="cic-how-it-works-heading">
                    <h2 className="center">About {data.momentFeed.name} {data.momentFeed.locality}, {data.momentFeed.state_min}</h2>
                </div>
                <div className="cic-how-it-works-img">
                    {
                        ( typeof storeContent === 'object') ? ( bringImg("about-image" ) )  : <></>
                    } 
                </div>
                <div className="cic-how-it-works-content-container spaceAround">
                    <p>
                    Come into our {data.momentFeed.name} {data.momentFeed.locality} store, where we’ve helped local customers with short-term financial needs since 2005. 
                    Whether you need a Payday Loan or Installment Loan, or other emergency financial services, {data.momentFeed.name} can help. We’re located at {
                        (map.length) ? (
                            <a rel="noopener noreferrer" target="_blank" href={`${map[0].url}`}><span itemProp="mapType">{store.data.address}, {store.data.locality}, {store.data.region}, {store.data.postcode}</span></a>
                        ) : <></>
                    }.
                    </p>
                    <p>
                    You'll find working with our team to be quick, easy, and confidential. 
                    To get the quick cash you need, you'll need a bank account, your government-issued photo ID, 
                    proof of income, and your vehicle and clear title (if applicable). Stop by our {data.momentFeed.locality} {data.momentFeed.name}  today, or call  <a href={`tel:+${store.data.phone}`}>{store.data.phone}</a> for more information. You can walk out with cash in your hand! All products not available in all locations.
                    </p>
                </div>
                <div className="cic-how-it-works-btns">
                    <a href="https://apply.checkintocash.com/" rel="noopener noreferrer" target="_blank" className="cic-btn cic-btn-primary my-3" aria-label={`Click here to apply for a ${data.momentFeed.name} Payday Loan now`}> Get Started </a>
                    <a href="https://checkintocash.com/store-locator/" className="cic-btn cic-btn-secondary--dark my-3" title="Click here to find a Store near you" aria-label="Click here to find a Store near you" rel="noopener noreferrer"> Find a Store </a>
                </div>
            </div>
    </section>
  )
}
