import React, {Fragment} from 'react'
import NavDesktop from './components/NavDesktop'  
import Sidebar from './components/Sidebar'

export default function Navbar({data}) {
  return (
    <Fragment>
        <NavDesktop data={data}/> 
        <Sidebar data={data}/> 
    </Fragment>
  )
}

 