import React, { useState, useEffect,Fragment, useCallback } from "react";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../assets/css/source.scss';
import { graphql } from "gatsby";
import OpenStore from "../components/openStore/OpenStore";
import { ApiHooks } from "../services/api";
import { InfoContext} from '../context/Context';
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import NavDesktop from "../components/Navbar/components/NavDesktop";
import ClosedStore from "../components/closedStore/ClosedStore";
import Footer from "../components/Footer/Footer";

export default function Moment({data, pageContext: {slug}, pageContext  }) {
  //Hooks
  const { getStoreInfo, getStoreLoans} = ApiHooks();
  //States
  const [store, setStore] = useState(null); 
  const [storeContent, setStoreContent] = useState(null); 
  const [storeLocator, setStoreLocator] = useState(null); 
  const [loansInfo, setLoansInfo] = useState(null); 
  const [testimon, setTestimonials] = useState(null); 
  //Variables
  let [ status_store,  zip_code, corporate_id ] = [ data.momentFeed.status, data.momentFeed.zip, data.momentFeed.corporate_id];
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
          getStoreLoans(loans, "loans"),
          getStoreInfo(corporate_id, "testimonials"), 
        ]
        ).then((values) => {
            setStore(values[0]);
            setStoreContent(values[1]);
            setStoreLocator(values[2]);
            setLoansInfo(values[3]);
            setTestimonials(values[4]); 
    } )
    .catch(error => {
      console.log(error);
    });
  }, [ zip_code, moment_feed, loans, corporate_id ]); 

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
    if(store !== null){
      if(status_store === "open"){
        // console.log(data.allWpMenu);
        return(
          <Fragment>
            <NavDesktop data={data.allWpMenu}/>
            <Breadcrumbs />
            <InfoContext.Provider value={{pageContext, data, store, storeContent, storeLocator, loansInfo, testimon}}>
              <OpenStore/>
            </InfoContext.Provider>
            <Footer />
          </Fragment>
        )
      }
      else{
        return(
          <Fragment>
            <NavDesktop data={data.allWpMenu}/>
            <ClosedStore data={data} />
            <Footer />
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
    corporate_id
    id
    zip
    phone
  }
  allWpMenu {
    nodes {
      databaseId
      slug
      name
      menuItems {
        nodes {
          uri
          path
          label
        }
      }
    }
  }
}
`