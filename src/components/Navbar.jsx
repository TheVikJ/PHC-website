import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { navbarRoutes } from '../data/Routes'

const Wrapper = (props) => {
  return <li>{props.children}</li>
}

function Navbar() {
  const routes = navbarRoutes.map((route) => (
    <Wrapper key={route.route}>
      <NavLink activeClassName={styles.selected} to={route.route}>
        {route.name}
      </NavLink>
    </Wrapper>
  ))
  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <React.Fragment>{routes}</React.Fragment>
      </ul>
    </div>
  )
}

export default Navbar
