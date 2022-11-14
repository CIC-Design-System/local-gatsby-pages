import React, { Fragment, useState, useCallback, useEffect } from 'react'
import { ApiHooks } from '../../services/api';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import StoreSection from '../storeLocator/components/StoreSection';
import About from './components/About';
import Banner from './components/Banner';
import HeaderClosed from './components/HeaderClosed'

export default function ClosedStore({data}) {
    console.log(data.momentFeed);
    const { getStoreInfo} = ApiHooks(); 
    let [ zip_code ] = [ data.momentFeed.zip];
    const [storeLocator, setStoreLocator] = useState(null);  
    const runStoreL = useCallback(() => {
        Promise.all([  getStoreInfo(zip_code, "store_locator"), ] )
        .then((values) => {
            setStoreLocator(values[0]);  
        } )
        .catch(error => {
            console.log(error);
        });
    }, [ zip_code ]); 
    const renderStore = () => { 
        const size = storeLocator.data.length;
        if(size > 2){
            return (
                <StoreSection storeLocator={storeLocator} />
            )
        }
    }
    useEffect(() => {  
        runStoreL(); 
        return () => {
            setStoreLocator(null);
        };
    }, [runStoreL ])
    
    
  return (
    <Fragment>
        <Banner />
        <Breadcrumbs />
        <HeaderClosed data={data.momentFeed}/>
        {
            ( typeof storeLocator === 'object' && storeLocator !== null) ? ( renderStore() )  : <></>
        }
        <About data={data.momentFeed} />
    </Fragment>
  )
}
