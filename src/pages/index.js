import React, { Fragment, useEffect, useState,useCallback } from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../assets/css/source.scss';
import { graphql } from "gatsby"
import { statesList } from '../selectors/getType';
import UsTemplate from '../components/usTemplate/UsTemplate';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const IndexPage = ({ data, actions }) => {
  const [states, setStates] = useState([]);
  useEffect(() => {
   const arr = statesList()
   setStates(arr);  
  }, [])
 const moment = data.allMomentFeed.nodes;
 const wordpress = data.allWpPage.nodes;   
 const filterState =(state) => { 
   return moment.filter(moment_state => moment_state.state_min === state);
 }

 /**/
 
  const SearchState = useCallback(() => {
   let flag = "";  
   return(
     states.map( (state, index) => {
       flag = filterState(state.state)
       if(flag.length > 0 ){
         return(
           <UsTemplate key={`us-${index}`} wordpress={wordpress} flag={flag} state={state} />
         )
       }
       else{
        return(
         <Fragment key={`us-${index}`}></Fragment>
        )
       }
     })
   )
 }, [states, wordpress ]); 
 

 return (
   <Fragment>
     <Navbar data={data.allWpMenu}/>
     <Breadcrumbs />
   {
        ( states.length > 0 ) ? ( SearchState() )  : <></>
   } 
   <Footer data={data.allWpMenu} />
   </Fragment>
 )
}

export default IndexPage

export const query = graphql`

query USQuery {
  allWpPage {
    nodes {
      id
      title
      status
      slug
      parentId
      databaseId
      template {
        templateName
      }
      uri
    }
  }
  allMomentFeed {
    nodes {
      address
      id
      locality
      momentfeed_id
      name
      post_name
      state
      state_min
      status
      zip
    }
  }
  
  allWpMenu {
    nodes {
      id
      name
      slug
      menuItems {
        nodes {
              id
              description
              databaseId
              uri
              label
              parentDatabaseId
            }
      }
    }
  }
}  
`

export const Head = () => <title>US</title>
