import React from 'react'
import { excerptText } from '../../../selectors/getType'

export default function SingleTestimonial({testimonial}) {
  return (
    <div className="cic-testimonial-card">
        <i className="cic-testimonial-card-profile IconUserTest cic-user-size"></i>
        <div className="cardUsername">
            <p>{testimonial.user_name}</p>
            <i className="mm-icon-full-star IconFullStar usr-stars"></i><i className="mm-icon-full-star IconFullStar usr-stars"></i><i className="mm-icon-full-star IconFullStar usr-stars"></i><i className="mm-icon-full-star IconFullStar usr-stars"></i><i className="mm-icon-full-star IconFullStar usr-stars"></i>
        </div>
        <div className="cardDate">
            <p className="cic-card-date">{testimonial.last_modified}</p>
        </div>
        <div className="cardContent">
            <p> {excerptText(testimonial.review_content)}  </p>
        </div>
        <i className="cic-card-quotes IconUserQuote cic-quote-size"></i>
        <i className="mm-icon-full-star cic-card-source IconGoogle"></i>
    </div>
  )
}
