import React, { Fragment } from 'react'
import { getMenu, getParentMenu } from '../../selectors/getType'
import Legal from '../Legal/Legal'
import Newsletter from '../Newsletter/Newsletter'
import FooterHours from './components/FooterHours'
import FooterMenu from './components/FooterMenu'
import FooterMeta from './components/FooterMeta'
import './style/_footer.scss'

export default function Footer({data}) {
  const menu = getMenu(data, "Footer Navigation"); 
  const menu_parent = getParentMenu(menu.menuItems.nodes, 0);
  return (
    <Fragment>
      <Newsletter />
      <div id="cic-footer-container" className="d-flex cic-light-waves-background-pattern">
        <FooterMenu data={menu.menuItems.nodes} menuParent={menu_parent}/>
        <FooterMeta />
        <FooterHours/>
      </div>
      <Legal />
    </Fragment>
  )
}
