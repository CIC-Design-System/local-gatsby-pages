import React, { Fragment } from 'react'
import Legal from '../Legal/Legal'
import FooterHours from './components/FooterHours'
import FooterMeta from './components/FooterMeta'

export default function Footer({}) {
  return (
    <Fragment>
      <div id="cic-footer-container" className="d-flex cic-light-waves-background-pattern">
        <FooterMeta />
        <FooterHours/>
      </div>
      <Legal />
    </Fragment>
  )
}
