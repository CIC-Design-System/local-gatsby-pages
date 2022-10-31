import React, { Fragment } from 'react'

export default function Buttons({link, btn, aria, text, item = ""}) {
  return (
    <Fragment>
        <a itemProp={`${item}`} rel="noopener noreferrer" target="_blank" href={`${link}`} className={`cic-btn ${btn} my-3`} aria-label={`${aria}`}> {text}</a>
    </Fragment>
  )
}
