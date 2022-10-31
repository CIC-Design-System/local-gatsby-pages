import React, { Fragment } from 'react'


export default function AvailableLoans({text, icon}) {
  return (
    <Fragment>
      <p><img width="24px" height="24px" alt={`${text} Icon`} src={`https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/${icon}.svg`} /> <strong>{text}</strong></p>
    </Fragment>
  )
}
