import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link,graphql } from "gatsby"
import '../assets/css/source.scss';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
 

export default function City({data,pageContext:{id ,title ,status ,slug ,parentId  ,uri}}) {
  let cities = data.allWpPage.nodes.sort((a, b) => a.title.localeCompare(b.title))
  return (
    <Fragment>
        <Navbar data={data.allWpMenu}/>
        <Breadcrumbs/>
        <div className="fl-content-full">
          <div className="row">
            <h3> </h3>
            <div>
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
        <Footer data={data.allWpMenu} />
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
      id
      name
      slug
      menuItems {
        nodes {
              id
              description
              databaseId
              uri
              label
              parentDatabaseId
            }
      }
    }
  }
}
`