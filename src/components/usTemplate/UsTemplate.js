import React from 'react'
import { Link } from "gatsby"

export default function UsTemplate({wordpress, flag, state}) { 
    let id_prov = 0;
    const searchID =(id) => {
        const num = +id;
        return wordpress.filter(moment => moment.databaseId === num);
    }
  return (
    <section style={{width: "20%" }}>
        <h3>{state.state}</h3>
        { 
            flag.map( (detail, index)=> {
              id_prov = searchID(detail.id); 
                return(
                     <Link to={`${id_prov[0].uri}`}  key={`${state.state}-${index}`}><li>{detail.locality}, {detail.name}</li> </Link>
                )
            })
        }
    </section>
  )
}
