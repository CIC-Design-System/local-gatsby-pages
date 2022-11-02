import React,{useContext} from 'react'
import './styles/_services.scss'
import { InfoContext } from '../../context/Context';
import AvailableServices from './components/AvailableServices';
import AvailableLoans from './components/AvailableLoans';
// AvailableLoans
// AvailableServices

export default function Services() {
    const { data, loansInfo} = useContext(InfoContext); 
  return (
    
<section id="loansServices">
    <div className="loanAmount">
        <p className="cic-heading-3 spaceLoans spaceHeight">
            Available Loans Near Me {data.momentFeed.locality}, {data.momentFeed.state_min}
        </p>
        <div className="availableL">
            {
                (loansInfo != null) 
                ? ( 
                    loansInfo.data.loans.map(function(loans, index) {
                        return(
                            <AvailableServices 
                                    icon={loans.icon} 
                                    link ={loans.link} 
                                    text={loans.name} 
                                    amount={loans.max}
                                    key={index}
                                
                                />
                        )
                     })
                )
                : <></>
            }
            <p>Available in stores and online. <a href="https://checkintocash.com/store-locator/" rel="noopener noreferrer" target="_blank">Change Location</a></p>
        </div>
    </div>
    <div className="cicServices">
        <p className="cic-heading-3 spaceLoans spaceHeight">
            Available Services Near Me {data.momentFeed.locality}, {data.momentFeed.state_min}
        </p>
        <div className="availableS"> 
        
        {
                (loansInfo != null) 
                ? ( 
                    loansInfo.data.services.map(function(loans, index) {
                        return(
                            <AvailableLoans 
                                    icon={loans.icon} 
                                    text={loans.name} 
                                    key={index}
                                
                                />
                        )
                     })
                )
                : <></>
            }
        </div>
    </div>
</section>


  )
}
