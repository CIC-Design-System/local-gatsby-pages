import React from 'react'
import { Link,graphql } from "gatsby"
import '../assets/css/source.scss';
 
export default function state({data,pageContext}) {
  
  let cities = data.allWpPage.nodes.sort((a, b) => a.title.localeCompare(b.title))
  return (
    
    <div>
      {cities.map((category, i) => (
      <li key={category.id} >
          <Link 
            
            to={category.slug}>
            {category.title}
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
      id
      databaseId
    }
  }
}
`