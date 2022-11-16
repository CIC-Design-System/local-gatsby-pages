import React, {Fragment} from 'react';
import '../styles/_hours.scss';
import PrintHours from './PrintHours';
import { formatHour12 } from '../../../selectors/getType';

export default function Hours({store}) { 
    const formatHour = (element) => {
        return element.replace(/.{2}/g, '$&:').slice(0, -1);
    } 
    const splitHours = () => {
        const d = new Date(); 
        let message = "";
        const name_day =  d.toLocaleDateString('en-us', { weekday:"long"});
        let nday = (d.getDay())-1;
        const current_hour = d.toLocaleTimeString('en-US', {
            timeZone: store.data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        console.log(current_hour);
        const time_store = store.data.hours.split(';');
        const days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let tmp= [];
        let week = [];
        for (let i = 0; i < (time_store.length)-1; i++) {
            tmp[i] = time_store[i].split(',');
        }
        tmp.forEach((element, index) => {
            week.push( {
                'day'   : days_of_the_week[index],
                'open'  : formatHour(element[1]),
                'close' : formatHour(element[2]),
            })
        }); 
        const closedTime = `<p className="hourdsDiv mg60"> <span className="cic-paragraph--medium green-cic">Closed Now:</span> </p><p className="smText spaceTime" itemProp="openingHours">${formatHour12(week[0].open)} - ${formatHour12(week[0].close)}</p>`;
        switch (store.data.status) {
            case "open":
                    if(name_day === "Sunday"){
                        return(
                            <Fragment>
                                <PrintHours week={week} textHtml={closedTime}/>
                            </Fragment>
                        )
                    }
                    else{ 
                        const store_open = week[nday].open;
                        const store_close = week[nday].close;
                        if(current_hour >= store_open && current_hour<= store_close){
                            message = `<p className="hourdsDiv mg60"> <span className="cic-paragraph--medium green-cic">Open Now:</span> </p><p className="smText spaceTime" itemProp="openingHours">${formatHour12(week[nday].open)} - ${formatHour12(week[nday].close)}</p>`;
                        }
                        else{
                            message = `<p className="hourdsDiv mg60"> <span className="cic-paragraph--medium green-cic">Closed Now:</span> </p><p className="smText spaceTime" itemProp="openingHours">${formatHour12(week[nday].open)} - ${formatHour12(week[nday].close)}</p>`;
                        }
                        return(
                            <Fragment> 
                                <PrintHours week={week} textHtml={message}/>
                            </Fragment>
                        )
                    }
            default:
                return(
                    <Fragment>
                        <div className="mg60">
                            <span className="cic-paragraph--medium green-cic"> Temporarily Closed </span>
                        </div>
                        <p className="smText"></p>
                    </Fragment>
                )
        }
    } 
  return (
    
    <Fragment>
        {
            ( typeof store === 'object' && store !== null) ? ( splitHours() )  : <></>
        }
    </Fragment>
  )
}