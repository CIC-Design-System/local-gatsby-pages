import * as React from "react"
import { Link,graphql } from "gatsby"
import Header from "../components/header/header";


import '../assets/css/global.scss'

export default function moment({pageContext}) {
    console.log(pageContext);
  return (
    <>
        <Header page={pageContext} />
    </>
  )
}
