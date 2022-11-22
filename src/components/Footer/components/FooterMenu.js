import React, { Fragment } from 'react' 
import FooterPrint from './FooterPrint';

export default function FooterMenu({data, menuParent}) {
   const arrayHome =  menuParent.filter((item, num) => num < 3); 
   const arrayServices =  menuParent.filter((item, num) => num === 3); 
   const arrayResources =  menuParent.filter((item, num) => num === 4); 
   const arrayaboutUs =  menuParent.filter((item, num) => num === 5); 
   
  return (
    <Fragment>
        <div id="cic-main-footer-desktop-nav-container">
            <FooterPrint data={data} menuParent={arrayHome} divClass="homeFooter"/>
            <FooterPrint data={data} menuParent={arrayServices} divClass="availableServices"/>
            <FooterPrint data={data} menuParent={arrayResources} divClass="resources"/>
            <FooterPrint data={data} menuParent={arrayaboutUs} divClass="aboutUs"/>
        </div>

    </Fragment>
  )
}
