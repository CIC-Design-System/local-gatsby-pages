import React, { useState, useEffect,Fragment } from "react";
import { graphql } from "gatsby";
import '../assets/css/source.scss';
import Header from "../components/header/header";
import Services from "../components/services/services";
import Banner from "../components/banner/banner";
import Started from "../components/getStarted/getStarted";


import { ApiHooks } from "../services/api";
import { InfoContext} from '../context/Context';

export default function Moment({data, pageContext: {slug}, pageContext  }) { 
  //Hooks
  const { getStoreInfo} = ApiHooks();

  //States
  const [store, setStore] = useState(null); 
  const [storeContent, setStoreContent] = useState(null); 
  const [storeLocator, setStoreLocator] = useState(null); 
  
  //Variables
  let [store_info,store_content, status_store, store_locator, zip_code] = [null, null, data.momentFeed.status, null, data.momentFeed.zip];
  const moment_feed = data.momentFeed.momentfeed_id;
  
  //First Call for the Store
  useEffect(() => {
    if(status_store === "open"){
      store_info = getStoreInfo(moment_feed, "store");
      store_info.then((response) => {
        console.log("Moment Feed XD ");
        console.log(response);
        setStore(response);
      })
    }
    else{
      setStore("");
    }
    return () => {
      setStore(null);
    };
  }, [])

  useEffect(() => {
    if(status_store === "open"){
      store_content = getStoreInfo(moment_feed, "store_content");
      store_content.then((response) => {
        console.log("Moment Feed Content XD ");
        console.log(response);
        setStoreContent(response);
      })
    }
    else{
      setStoreContent("");
    }
    return () => {
      setStoreContent(null);
    };
  }, [])

  
  useEffect(() => {
    if(status_store === "open"){
      store_locator = getStoreInfo(zip_code, "store_locator");
      store_locator.then((response) => {
        console.log("Moment Feed Locator XD ");
        console.log(response);
        setStoreLocator(response);
      })
    }
    else{
        setStoreLocator("");
    }
    return () => {
        setStoreLocator(null);
    };
  }, [])

  const verifiedInfo = () => {
    if(store !=null){
      if(status_store === "open"){
        return(
          <InfoContext.Provider value={{pageContext, data, store, storeContent, storeLocator}}>
            <Header/>
            <Services  />
            <Banner  />
            <Started  />
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