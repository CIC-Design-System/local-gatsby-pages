import React, {Fragment} from 'react'
import Header from '../header/header' 
import Services from '../services/services'; 
import Banner from '../banner/banner';  
import Started from '../getStarted/getStarted';
import AboutUs from '../aboutUs/aboutUs'; 
import StoreLocator from '../storeLocator/StoreLocator';


export default function OpenStore() {
  return (
    <Fragment>
        <Header/>
        <Services  />
        <Banner  />
        <Started  />
        <StoreLocator />
        <AboutUs />
    </Fragment>
  )
}
