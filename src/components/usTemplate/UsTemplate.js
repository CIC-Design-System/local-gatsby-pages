import React from 'react'
import { upperCase } from '../../selectors/getType';


export default function UsTemplate({wordpress, flag, state}) { 
    let id_prov = 0;
    const searchID =(id) => {
        const num = +id;
        return wordpress.filter(moment => moment.databaseId === num);
    }
  return (
    
    <div className="fl-content-full">
      <div className="row">
        <h3>{upperCase(state.url.replace(/\-/g, ' '))}</h3>
        <div className="cic-states-card-row">
          { 
              flag.map( (detail, index)=> {
                id_prov = searchID(detail.id);
                  return(
                      <div key={`state-list-${index}`} className="cic-state-card">
                        <a itemProp="addressLocality" href={`${id_prov[0].uri}`}  key={`${state.state}-${index}`}> {detail.locality}, {detail.name} </a>
                        <p>{detail.address}</p>
                      </div> 
                  )
              })
          }          
        </div>

    </div>
  </div>
  )
}
