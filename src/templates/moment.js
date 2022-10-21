import * as React from "react"
import { Link,graphql } from "gatsby"
import Header from "../components/header/header";
import Services from "../components/services/services";


import '../assets/css/source.scss'

export default function moment({pageContext}) {
    console.log(pageContext);
  return (
    <>
        <Header page={pageContext} />
        <Services page={pageContext} />
    </>
  )
}
