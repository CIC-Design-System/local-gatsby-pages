import React,{Fragment} from 'react'
import '../styles/_storeLocator.scss'
import SingleStore from './SingleStore';

export default function StoreSection({storeLocator}) {  
    let i = 0;
  return (
        <section id="servicesAndLoans">
            <div className="cic-dark-waves-background-color">
                <div className="containerServicesLoans">
                    <div className="titleStore spaceTop spaceBottom">
                        <h2 className="center">Other Nearby Stores</h2>
                    </div>
                    {
                        storeLocator.data.map( (store, index) => {
                            if(index > 0 && store.location.status === "open"){
                                i++;
                                return(
                                    <SingleStore store={store} index={i}  key={`store-${index}`} />
                                )
                            }
                            else{
                                return( <Fragment key={`store-${index}`} ></Fragment>  )
                            }
                        })
                    }
                </div>
            </div>
        </section>
  )
}
