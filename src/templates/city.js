import React, { Fragment } from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link,graphql } from "gatsby"
import '../assets/css/source.scss';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import NavDesktop from "../components/Navbar/components/NavDesktop";
 

export default function City({data,pageContext:{id ,title ,status ,slug ,parentId  ,uri}}) {
  let cities = data.allWpPage.nodes.sort((a, b) => a.title.localeCompare(b.title))
  return (
    <Fragment>
        <NavDesktop data={data.allWpMenu}/>
        <Breadcrumbs/>
        <div className="fl-content-full">
          <div className="row">
            <h3> </h3>
            <div className="cic-states-card-row">
              {cities.map((node, i) => (
                <div key={`state-list-${i}`} className="cic-state-card">
                  <Link 
                    to={node.slug}>
                    {node.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
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
  allWpMenu {
    nodes {
      databaseId
      slug
      name
      menuItems {
        nodes {
          uri
          path
          label
        }
      }
    }
  }
}
`