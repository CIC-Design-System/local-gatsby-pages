import React from 'react'
import { Link } from "gatsby"
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
        { 
            flag.map( (detail, index)=> {
              id_prov = searchID(detail.id); 
                return(
                     <Link to={`${id_prov[0].uri}`}  key={`${state.state}-${index}`}><li>{detail.locality}, {detail.name}</li> </Link>
                )
            })
        }
    </div>
  </div>
  )
}
