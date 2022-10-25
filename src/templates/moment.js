import * as React from "react"
import { Link,graphql } from "gatsby"
import '../assets/css/source.scss'
import Header from "../components/header/header";
import Services from "../components/services/services";


import Banner from "../components/banner/banner";
import Started from "../components/getStarted/getStarted";

export default function moment({data, pageContext: {slug}, pageContext  }) { 
 
   console.log(pageContext); 
  console.log(slug);
  console.log(data);
  
  return (
    <React.Fragment>
      <Header  page={pageContext} data={data} />
      <Services  />
      <Banner  />
      <Started  />
    </React.Fragment>
  
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
  }
}


`