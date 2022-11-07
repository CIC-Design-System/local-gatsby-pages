import React, { Fragment } from 'react'
import '../assets/css/source.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link,graphql } from "gatsby"
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import NavDesktop from "../components/Navbar/components/NavDesktop";

export default function state({data,pageContext}) { 
  let cities = data.allWpPage.nodes.sort((a, b) => a.title.localeCompare(b.title))
  return (
    <Fragment>
        <NavDesktop data={data.allWpMenu}/>
        <Breadcrumbs /> 
        <div className="fl-content-full">
          <div className="row">
            <h3> </h3>
            <div className="cic-states-card-row">
                {cities.map((category, i) => (
                  <div key={`state-list-${i}`} className="cic-state-card">
                      <Link to={category.slug}>
                        {category.title}
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
      id
      databaseId
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