import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data, actions }) => {
  return (

    <pre>{JSON.stringify(data, null, 4)}</pre>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allWpPage {
      nodes {
        id
        databaseId
        slug
        parentId
        parentDatabaseId
        title
        template {
          templateName
        }
        status
      }
    }
  }
`

export const Head = () => <title>Home Page</title>
