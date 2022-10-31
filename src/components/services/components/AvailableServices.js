import React, { Fragment } from 'react'

export default function AvailableServices({icon, link, text, amount}) {
  return (
    <Fragment>
      <p><img width="24px" height="24px" alt={`${text} Icon`} src={`https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/${icon}.svg`} /> <a target="_blank" rel="noopener noreferrer" href={`${link}`}><strong>{text}</strong></a> up to ${amount}</p>
    </Fragment>
  )
}
