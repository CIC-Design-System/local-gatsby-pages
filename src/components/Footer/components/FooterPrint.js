import React, {Fragment} from 'react'
import { getParentMenu } from '../../../selectors/getType'
 
export default function FooterPrint({data, menuParent, divClass}) {
    const printChildren = (childrenMenu, idN) =>{
        return(
            <li>
                <ul id={'cic-'+idN} className="menuMobile toggleUl">
                {
                    childrenMenu.map((element, index) => { 
                        return(
                            <li key={'footer-menu-children-'+index} >
                                <a href={element.uri} target="_blank" rel="noopener noreferrer">{element.label}</a>                                    
                            </li>
                        )
                    })
                }
                </ul>
            </li>    
        )
    }
  return (
    <Fragment> 
        <div className={divClass}>
            <ul>
                {
                    menuParent.map((element, index) => { 
                        const childrenMenu = getParentMenu(data, element.databaseId); 
                        return(
                            <Fragment key={'footer-menu-'+index} >
                                <li className={'cic-footer-top-nav-item cic-heading-4 text-white d-flex justify-content-between align-items-center'} data-parent={'cic-'+element.databaseId} data-route={element.uri}>
                                    <a href={element.uri} target="_blank" rel="noopener noreferrer">{element.label}</a>                                    
                                </li>
                                {
                                    (childrenMenu.length > 0) ? printChildren(childrenMenu, element.databaseId) : <></>
                                }
                            </Fragment>
                        )
                    })
                } 
            </ul>
        </div> 
    </Fragment>
  )
}
