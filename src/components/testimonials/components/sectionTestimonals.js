import React from 'react'
import SingleTestimonial from './singleTestimonial'

export default function SectionTestimonals({data}) {
  return (
    <section id="testimonials">
        <div className="cic-light-waves-background-pattern"> 
            <div className="cic-testimonial-wrapper">
                <div className="cic-testimonial-section-title"><p className="cic-heading-2 center">Verified Testimonials</p></div>
                <div className="cic-testimonial-section-content"><p>Check them out</p></div>
                <div className="section-rateInfo">
                    <p className="cic-rateNumber">27,595</p>
                    <p className="cic-totalRates">out of 5 • 4.5 Ratings</p>
                </div>
                <div className="section-rateStars">
                    <p>Rating:</p>
                    <div className="cic-avg-rating-stars">
                        <i className="mm-icon-full-star IconFullStar rating-stars"></i><i className="mm-icon-full-star IconFullStar rating-stars"></i><i className="mm-icon-full-star IconFullStar rating-stars"></i><i className="mm-icon-full-star IconFullStar rating-stars"></i><i className="mm-icon-full-star rating-stars IconHalfStar"></i>
                    </div>
                </div>
                <div className="bob-cash">
                    <img loading="lazy" src="https://localstoresprd.wpenginepowered.com/wp-content/uploads/2022/03/bob-cash.webp" alt="Bob Cash Illustration" />
                </div>
            </div>
            <div className="section-carousel cic-testimonial-carousel">
                {
                    data.map( (testimonial, index) =>{
                        return(
                            <SingleTestimonial testimonial={testimonial} key={`testimon-${index}`}/>
                        )
                    } )
                }
            </div>
            <div className="section-moreReviews">
                <p>
                    <a href="https://local.checkintocash.com/testimonials/" className="more-reviews-link text-white">Explore Testimonials <span className="cic-btn-tertiary reviewsCount">99+</span></a>
                </p>
            </div> 
        </div>
    </section>
  )
}
