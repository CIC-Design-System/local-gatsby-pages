import React, {Fragment, useContext} from 'react'
 
import StoreSection from './components/StoreSection';

import { InfoContext } from '../../context/Context'
export default function StoreLocator() {
    const { storeLocator } = useContext(InfoContext);  

    const renderStore = () => {
        const size = storeLocator.data.length;
        if(size > 2){
            return (
                <StoreSection storeLocator={storeLocator} />
            )
        }
    }
  return (
    <Fragment>
        {
             ( typeof storeLocator === 'object') ? ( renderStore() )  : <></>
        }
    </Fragment>
  )
}
