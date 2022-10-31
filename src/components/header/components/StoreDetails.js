import React from 'react'

export default function StoreDetails({topTel, icon, url, aria, text, type = "", schema = ""}) {
  return (
    <div className="rt-loan-amount" itemProp={type} itemType={schema}>
        <div className={`iconDiv ${topTel}`}>
            <div className={`cic-icon-primary spaceIcon mm-icon-wrapper noRepeat ${icon}`}></div>
            <div>
                <a href={`${url}`} title={`Click here to ${aria}`} aria-label={`Click here to ${aria}`}>
                    <h3 className="h3-third">
                        <span itemProp="telephone">
                            {text}
                        </span>
                    </h3>
                </a>
            </div>
        </div>
    </div>
  )
}
