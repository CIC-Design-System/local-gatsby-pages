import React, {Fragment, useState} from 'react'
import { filterMenu } from '../../../selectors/getType';
import ListMenu from './ListMenu';

export default function NavDesktop({data}) {
 
    const [desk_, setDesk_] = useState("");
    const handleChange = (e) =>{
        setDesk_(e.target.value)
    }
    const menu = filterMenu(data, "mega-menu-primary");
  return (
    
    <Fragment>
        <nav id="cic-header-nav-container" className="bg-secondary">
            <div className="cic-header-wrapper  d-flex flex-row justify-content-between align-items-center">
                <div id="normal-site-logo" className="site-logo cic-header-nav-logo d-flex">
                    <a href="https://checkintocash.com/" title="Home" className="d-flex">
                        <img width="160" height="114" src="https://localstoresprd.wpenginepowered.com/wp-content/uploads/2022/03/ciclogo-whitetag.webp" alt="Check Into Cash! Your One Stop Money Shop" title="Check Into Cash! Your One Stop Money Shop"  className="entered lazyloaded" />
                    </a>
                </div>
                <div id="tablet-apply-now-button">
                    <a href={`${process.env.GATSBY_APPLY}`} title="Apply Now" className="cic-btn cic-btn-primary" aria-label="">Get Started</a>
                </div>
                <div id="cic-normal-mobile-nav" className="d-flex flex-row align-items-center">
                    <div className="cic-header-nav-icon mr-3">
                        <a href="https://local.checkintocash.com/?s=" title="Search">
                            <img alt="Search" title="Search" className="cic-icon-secondary" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3C/svg%3E" width="32" height="32" />
                        </a>
                    </div>
                    <div className="cic-header-nav-icon">
                        <a id="normal-cic-controls" >					
                            <div className="IconHamburger cic-icon-hamburger cic-icon-secondary"></div>
                        </a>
                    </div>
                </div>
                <div id="cic-desktop-nav">
                    <ul className="d-flex flex-row justify-content-start align-items-center" role="menubar">
                        {
                            menu[0].menuItems.nodes.map( (detail, index)=> {
                                  return(
                                    <ListMenu key={`menu-${index}`} data={detail} />
                                  )
                            })
                        }
                    </ul>
                    <div id="cic-utilities-container" className="d-flex">
                        <div id="cic-search-container">
                            <form role="search" action="https://local.checkintocash.com/" method="get" className="searchbox" id="search">
                                <input id="cic-search-float" type="text" name="s" value={desk_} onChange={handleChange} aria-label="Enter keywords to Search the Check Into Cash site" />
                                <input type="submit" id="cic-search-icon" value={desk_} onChange={handleChange} className="cic-icon-secondary" aria-label="Click here to Search the Check Into Cash site" />
                            </form>
                        </div> 
                        <div className="d-flex align-items-center">
                            <span className="cic-vertical-line"></span>
                        </div> 
                        <div id="cic-nav-btn-container" className="d-flex align-items-center">
                            <a href={`${process.env.GATSBY_APPLY}`} title="Apply Now" className="cic-nav-btn cic-caption--medium" aria-label="Click here to Apply Now">
                                <span className="cic-caption--medium">Get Started</span>
                            </a>
                        </div> 
                        <div id="cic-nav-login" className="d-flex flex-row align-items-center">
                            <a className="cic-header-nav-login-link" title="Log In" href="https://checkintocash.com/customer-login/" aria-label="Click here to log into your account">
                                <div className="mm-icon-wrapper IconUser cic-icon-secondary"></div>
                                <p className="cic-paragraph--medium">Log In</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    </Fragment>
  )
}

