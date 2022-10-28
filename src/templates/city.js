import React from 'react'
import { Link,graphql } from "gatsby"


export default function City({data,pageContext:{id ,title ,status ,slug ,parentId  ,uri}}) {
 
  let cities = data.allWpPage.nodes.sort((a, b) => a.title.localeCompare(b.title))

console.log(cities);
  return (
    
    <div>
      {cities.map((node, i) => (
      <li key={node.id} >
          <Link 
            
            to={node.slug}>
            {node.title}
          </Link>
        </li>
    ))}
  </div>
  )
}

export const query = graphql`

query CityQuery ($id: ID){
  allWpPage(
    filter: {parentId: {eq: $id}}
  ) {
    nodes {
      title
      status
      slug
      parentId
      databaseId
      id
    }
  }
}
`