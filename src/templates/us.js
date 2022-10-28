import React from 'react'
import { Link,graphql } from "gatsby"

export default function US({data}) {
  console.log(data);
  return (
    <div>XD </div>
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
}  

`