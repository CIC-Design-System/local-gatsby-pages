import React from 'react'

export default function ListSidebar({data}) {
    return (
      (data.label !== "Apply Now") ? (
        <a href={data.uri} title={data.label} className="cic-header-top-nav-item cic-heading-4 d-flex justify-content-between align-items-center collapsed" role="menuitem">
            <p className="cic-lead cic-lead--medium">{data.label}</p>
        </a>
      )
      :
      (
          <></>
      )
    )
}
