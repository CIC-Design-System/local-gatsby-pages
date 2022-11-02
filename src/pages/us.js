import React, { Fragment, useEffect, useState,useCallback } from 'react'
import { Link,graphql } from "gatsby"
import { statesList } from '../selectors/getType';
import UsTemplate from '../components/usTemplate/UsTemplate';

export default function US({data}) { 
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
    console.log("running ");
    return(
      states.map( (state, index) => {
        flag = filterState(state.state)
        if(flag.length > 0 ){
          return(
            <UsTemplate key={`us-${index}`} wordpress={wordpress} flag={flag} state={state} />
          )
        }
      })
    )
  }, [states ]); 
  
 
  return (
    <Fragment>
    {
         ( states.length > 0 ) ? ( SearchState() )  : <></>
    } 
    </Fragment>
  )
}


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
}  

`