import React, {useContext, Fragment} from 'react'
import SectionTestimonals from './components/sectionTestimonals'
import { InfoContext } from '../../context/Context'

export default function Testimonials() {
  const { testimon } = useContext(InfoContext);  
  const renderTestimonials = () => { 
    if(testimon !== null && testimon.data.length > 0 ){
      return(
        <SectionTestimonals data={testimon.data} />
      )
    }
  }
  return (
    <Fragment>
        {
             ( typeof testimon === 'object') ? ( renderTestimonials() )  : <></>
        }
    </Fragment>
    
  )
}
