import React from 'react'
import './styles/_about.scss'

export default function About({data}) {
  return (
    <section id="GetStarted">
        <div className="cic-about-it-wrapper">
            <div className="cic-about-it-heading">
                <h2 className="center my-3">About {data.name} {data.locality}</h2>
            </div>
            <div className="cic-about-it-img my-3">
                <p>
                    Come into our {data.name} {data.locality} store, where we’ve helped local customers with short-term financial needs since 1993. Whether you need a Payday Loan or Installment Loan, or other emergency financial services, {data.name} can help.
                </p>
            </div>
            <div className="cic-about-it-content-container my-3">
                <p>
                You'll find working with our team to be quick, easy, and confidential. To get the quick cash you need, you'll need a bank account, your government-issued photo ID, proof of income, and your vehicle and clear title (if applicable). Stop by our {data.locality} {data.name} today, or call <a aria-label={`Call us ${process.env.GATSBY_NUMBER}`} href={`tel:+${process.env.GATSBY_NUMBER}`}>{process.env.GATSBY_NUMBER}</a> for more information. You can walk out with cash in your hand! All products not available in all locations.

                </p>
            </div>
            <div className="cic-about-it-btns">
                <a href={`${process.env.GATSBY_STORE_LOCATOR}`} className="cic-btn cic-btn-secondary--dark my-3" title="Click here to find a Store near you" aria-label="Click here to find a Store near you" rel="noopener noreferrer"> Find a Store </a>
                <a href={`${process.env.GATSBY_APPLY}`} className="cic-btn cic-btn-primary my-3" title={`Click here to apply for a ${data.name} Payday Loan now`} aria-label={`Click here to apply for a ${data.name} Payday Loan now`} rel="noopener noreferrer"> Get Started </a>
                
            </div>
        </div>
    </section>
  )
}
