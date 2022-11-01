import React, {useContext,useState} from 'react'
import './styles/_banner.scss'
import { InfoContext } from '../../context/Context';  

export default function Banner() {
  const { storeContent} = useContext(InfoContext); 
  const [check, setCheck] = useState(storeContent);  
  const bringImg = (field, classN) => {          
    return(             
      check.data.data.map( (type, index) => {
          if(type.alias == field){ 
              return( 
                <a key={`banner-${index}`} title="Link to Apply Now  - Tomorrow can be a Payday" href="https://apply.checkintocash.com" target="_blank" rel="noopener noreferrer">
                    <img width="100%" height="100%" alt="banner Tomorrow can be a Payday" loading="lazy" className={`lazy ${classN}`} src={`${type.settings.mfSrc}`} />
                </a>
              )
          }
      })
    )
  }
  return (
    <section id="bannerPhone">
        <div className="banner-phone">
          {
             ( typeof check === 'object') ? ( bringImg("promo-banner-(desktop)", "hideMobile") )  : <></>
          }
          {
             ( typeof check === 'object') ? ( bringImg("promo-banner-(mobile)", "onlyMobile") )  : <></>
          } 
        </div>
    </section>
  )
}
