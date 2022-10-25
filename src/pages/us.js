import React from 'react'
import { Link,graphql } from "gatsby"

export default function us({data}) {
  console.log(data);
  return (
    <div>US TEMPLATE <br /> here goes the full list</div>
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