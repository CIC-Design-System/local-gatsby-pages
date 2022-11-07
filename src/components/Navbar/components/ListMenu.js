import React from 'react'

export default function ListMenu({data}) {
  return (
    (data.label !== "Apply Now") ? (
        <li className="cic-nav-item cic-paragraph--medium" role="none">
            <a href={`${data.uri}`} title={`${data.label}`} aria-label="" role="menuitem">{data.label}</a>
        </li>
    )
    :
    (
        <></>
    )
  )
}
