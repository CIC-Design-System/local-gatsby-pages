import React from 'react'
import './styles/_banner.scss'

export default function Banner() {
  return (
    <section id="bannerPhone">
        <div className="banner-phone">
            <a title="Link to Apply Now  - Tomorrow can be a Payday" href="https://bit.ly/3l1cHuq" target="_blank" rel="noopener noreferrer">
                <img width="100%" height="100%" alt="banner Tomorrow can be a Payday" loading="lazy" className="lazy hideMobile" src="https://5ff239f6957b485d6945bc81.lp.prod.momentfeed.com/assets/media/TCBP_MF_1440x300_2021_V2.jpg" />
            </a>
            <a title="Link to Apply Now  - Tomorrow can be a Payday" href="https://bit.ly/3l1cHuq" target="_blank" rel="noopener noreferrer">
                <img width="100%" height="100%" alt="banner Tomorrow can be a Payday" loading="lazy" className="onlyMobile" src="https://5ff239f6957b485d6945bc81.lp.prod.momentfeed.com/assets/media/TCBP_MF_340x100_2021_V2.jpg" />
            </a>
        </div>
    </section>
  )
}
