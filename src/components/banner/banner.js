import React, { useContext} from 'react'
import './styles/_banner.scss'
import { filterArray } from '../../selectors/getType';
import { InfoContext } from '../../context/Context';  

export default function Banner() {
  const { storeContent} = useContext(InfoContext);  
  const bringImg = (field, classN) => {        
    const result = filterArray(storeContent, field);   
    if(result.length > 0 ){
       return(
        <a title="Link to Apply Now  - Tomorrow can be a Payday" href="https://apply.checkintocash.com" target="_blank" rel="noopener noreferrer">
          <img width="100%" height="100%" alt="banner Tomorrow can be a Payday" loading="lazy" className={`lazy ${classN}`} src={`${result[0].settings.mfSrc}`} />
        </a> 
       )
    } 
  }
  return (
    <section id="bannerPhone">
        <div className="banner-phone">
          {
             ( typeof storeContent === 'object') ? ( bringImg("promo-banner-(desktop)", "hideMobile") )  : <></>
          }
          {
             ( typeof storeContent === 'object') ? ( bringImg("promo-banner-(mobile)", "onlyMobile") )  : <></>
          } 
        </div>
    </section>
  )
}
