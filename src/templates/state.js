import React, { Fragment } from 'react'
import { Link,graphql } from "gatsby"
import '../assets/css/source.scss';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

export default function state({data,pageContext}) {
  
  let cities = data.allWpPage.nodes.sort((a, b) => a.title.localeCompare(b.title))
  return (
    <Fragment>
        <Breadcrumbs />  
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
      id
      databaseId
    }
  }
}
`