import React, {Fragment,useState,useEffect } from 'react'
import * as bootstrap from 'bootstrap'; 
import { formatHour12 } from '../../../selectors/getType';

export default function PrintHours({week, textHtml}) {
    const [toggle, setToggle] = useState(false); 
    const { Collapse } = bootstrap; 
    useEffect(() => {
        if (typeof document !== `undefined`) {
            const myCollapse = document.getElementById('openIntervals')
            const coll = new Collapse(myCollapse, {toggle: false})
            toggle ? coll.show() : coll.hide()
        }
    }) 
  return (
    <Fragment>
        <div className="rt-loan-amount">
            <div className="iconDiv">
                <div className="spaceIcon mm-icon-wrapper IconClock"></div>
                <button data-toggle="collapse" onClick={() => setToggle(toggle => !toggle)} className="cic-store-locator-openIntervals-trigger plainBtn collapsed" aria-expanded="false">
                    <span style={{marginLeft: '-3px'}} dangerouslySetInnerHTML={{ __html: `${textHtml}` }} />
                    <div className="mm-icon-wrapper color_background_svg  IconChevronDown"></div>
                </button>
            </div>
        </div>
        <div id="openIntervals" className="store-openIntervals-container collapse">
            {week.map((day, index) => (
                <div key={`weekday-${index}`} className="rt-loan-amountH">
                    <div className="iconDiv" itemProp="openingHoursSpecification" itemScope="" itemType="https://schema.org/OpeningHoursSpecification">
                        <div className="hourdsDiv spaceHour"><link itemProp="dayOfWeek" href={`https://schema.org/${day.day}`} />{day.day}</div>
                        <div className="spaceTime">
                            <time itemProp="opens" content={`${day.open}`}>{formatHour12(day.open)}</time> - <time itemProp="closes" content={`${day.close}`}>{formatHour12(day.close)}</time>
                        </div>
                    </div>
                </div> 
            ))}
            <div className="rt-loan-amountH">
                <div className="iconDiv">
                    <div className="hourdsDiv spaceHour"><span className="">Sunday</span></div>
                    <div className="spaceTime noToday">Closed</div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
