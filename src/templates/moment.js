import * as React from "react"
import { Link,graphql } from "gatsby"
import '../assets/css/source.scss'
import Header from "../components/header/header";
import Services from "../components/services/services";


import Banner from "../components/banner/banner";
import Started from "../components/getStarted/getStarted";

export default function moment({data, pageContext}) { 
  return (
    <React.Fragment>
      <Header page={pageContext} />
      <Services page={pageContext} />
      <Banner page={pageContext} />
      <Started page={pageContext} />
    </React.Fragment>
  
  )
}


export const query = graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 247957}) {
      id
      authorDatabaseId
      title
      template {
        templateName
      }
      link
      status
      databaseId
      contentTypeName
      isPostsPage
      parentId
      parentDatabaseId
      slug
    }
  }
`