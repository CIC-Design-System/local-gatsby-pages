import React, {Fragment} from 'react'
import NavDesktop from './components/NavDesktop' 

export default function Navbar({data}) {
  return (
    <Fragment>
        <NavDesktop data={data}/>
    </Fragment>
  )
}

 