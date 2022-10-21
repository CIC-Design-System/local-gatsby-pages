import React from 'react'
import './styles/_services.scss'

export default function Services() {
  return (
    
    <section id="loansServices">
    <div className="loanAmount">
        <p className="cic-heading-3 spaceLoans spaceHeight">
            Available Loans Near Me Alexander City, AL
        </p>
        <div className="availableL">
            <p>
                <img width="24px" height="24px" alt="Payday Loan Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-prod-payday-small.svg" />
                <a target="_blank" rel="noopener noreferrer" href="https://checkintocash.com/alabama/alabama-payday-loans/"><strong>Payday Loan</strong></a> up to $500
            </p>
            <p>
                <img width="24px" height="24px" alt="Installment Loan Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-prod-installment-small.svg" /> 
                <a target="_blank" rel="noopener noreferrer" href="https://checkintocash.com/alabama/alabama-installment-loans/"><strong>Installment Loan</strong></a> up to $5,000
            </p>
            <p>
                <img width="24px" height="24px" alt="Title Pawn Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-prod-title-small.svg" /> 
                <a target="_blank" rel="noopener noreferrer" href="https://checkintocash.com/alabama/alabama-title-pawns/"><strong>Title Pawn</strong></a> up to $25,000
            </p>
            <p>Available in stores and online. <a href="https://checkintocash.com/store-locator/" rel="noopener noreferrer" target="_blank">Change Location</a></p>
        </div>
    </div>
    <div className="cicServices">
        <p className="cic-heading-3 spaceLoans spaceHeight">
            Available Services Near Me Alexander City, AL
        </p>
        <div className="availableS">
            <p>
                <img width="24px" height="24px" alt="Check Cashing Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-serv-check-cashing.svg" /> <strong>Check Cashing </strong>
            </p>
            <p>
                <img width="24px" height="24px" alt="Reloadable Debit Card Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-serv-us-money-card-default.svg" />
                <strong>Reloadable Debit Card </strong>
            </p>
            <p><img width="24px" height="24px" alt="Bill Pay Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-serv-bill-pay.svg" /> <strong>Bill Pay </strong></p>
            <p>
                <img width="24px" height="24px" alt="Western Union Money Transfer Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-serv-western-union.svg" />
                <strong>Western Union Money Transfer </strong>
            </p>
            <p>
                <img width="24px" height="24px" alt="Western Union Money Orders Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-serv-money-orders.svg" />
                <strong>Western Union Money Orders </strong>
            </p>
            <p>
                <img width="24px" height="24px" alt="Gift Card Exchange Icon" src="https://localstoresprd.wpenginepowered.com/wp-content/plugins/cic-atomic-bb-powerpack/assets/icons/cic-serv-sell-us-gift-cards.svg" />
                <strong>Gift Card Exchange </strong>
            </p>
        </div>
    </div>
</section>

  )
}
