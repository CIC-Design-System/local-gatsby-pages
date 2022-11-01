import React, { useState, useEffect,Fragment, useCallback } from "react";
import { graphql } from "gatsby";
import '../assets/css/source.scss';
import OpenStore from "../components/openStore/OpenStore";
import { ApiHooks } from "../services/api";
import { InfoContext} from '../context/Context';

export default function Moment({data, pageContext: {slug}, pageContext  }) { 
  //Hooks
  const { getStoreInfo, getStoreLoans} = ApiHooks();
  //States
  const [store, setStore] = useState(null); 
  const [storeContent, setStoreContent] = useState(null); 
  const [storeLocator, setStoreLocator] = useState(null); 
  const [loansInfo, setLoansInfo] = useState(null); 
  //Variables
  let [ status_store,  zip_code ] = [ data.momentFeed.status, data.momentFeed.zip];
  const moment_feed = data.momentFeed.momentfeed_id;

  //Data for the axios
  const loans = JSON.stringify({
    state: data.momentFeed.state,
    brand: data.momentFeed.name,
    state_min: data.momentFeed.state_min
  });
  /**/
  const runPromise = useCallback(() => {
    Promise.all([ getStoreInfo(moment_feed, "store"), 
          getStoreInfo(moment_feed, "store_content"), 
          getStoreInfo(zip_code, "store_locator"), 
          getStoreLoans(loans, "loans")]).then((values) => {
            setStore(values[0]);
            setStoreContent(values[1]);
            setStoreLocator(values[2]);
            setLoansInfo(values[3]);
    } )
    .catch(error => {
      console.log(error);
    });
  }, [ zip_code, moment_feed, loans ]); 

  useEffect(() => {
    if(status_store === "open"){
      runPromise();
    }
    else{
      setStore("");
      setStoreContent("");
      setStoreLocator("");
      setLoansInfo("");
    }
    return () => {
      setStore(null);
      setStoreContent(null);
      setStoreLocator(null);
      setLoansInfo(null);
    };
  }, [runPromise, status_store ])
  
  const verifiedInfo = () => {
    if(store !=null){
      if(status_store === "open"){
        return(
          <InfoContext.Provider value={{pageContext, data, store, storeContent, storeLocator, loansInfo}}>
            <OpenStore/>
        </InfoContext.Provider>
        )
      }
      else{
        return(
          <Fragment>
              <p>This store is closed </p>
          </Fragment>
        )
      }
    }
  }
  return (
    <Fragment>
      { 
        (store === null )  ? <></> : verifiedInfo()
      }
    </Fragment>
  )
}
export const query = graphql`
query MyQuery ($slug: String)  {
  momentFeed(post_name: {eq:  $slug}) {
    address
    status
    state_min
    state
    post_name
    name
    momentfeed_id
    locality
    id
    zip
  }
}
`