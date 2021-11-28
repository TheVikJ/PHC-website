import React from 'react'
import styles from './Navbar.module.scss'
import {useRouter} from 'next/router';
import Link from 'next/link';
import { navbarRoutes } from '../data/Routes'

const Wrapper = (props) => {
  return <li>{props.children}</li>
}

function NavLink({to, exact, children, activeClassName, ...props}) {
  const {pathname} = useRouter();
  const isActive = exact ? pathname === to : pathname.startsWith(to);


  if (isActive) {
    props.className += ` ${activeClassName}`;
  }

  return (
    <Link href={to}>
      <a {...props}>
        {children}
      </a>
    </Link>
  );
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
