import React, { Fragment } from 'react'
import { Link,graphql } from "gatsby"
import '../assets/css/source.scss';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
 

export default function City({data,pageContext:{id ,title ,status ,slug ,parentId  ,uri}}) {
 
  let cities = data.allWpPage.nodes.sort((a, b) => a.title.localeCompare(b.title))

console.log(cities);
  return (
    <Fragment>
        <Breadcrumbs/>
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
    </Fragment>
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