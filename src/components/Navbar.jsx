import React from 'react';
import styles from '../stylesheets/Navbar.module.scss';
import {Link} from "react-router-dom";
import {navbarRoutes} from "../data/Routes";

const Wrapper = (props) => {
  return <li>{props.children}</li>
}

function Navbar() {
  const routes = navbarRoutes.map(route =>
    <Wrapper key={route.route}>
      <Link to={route.route}>{route.name}</Link>
    </Wrapper>
  )
	return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <React.Fragment>
          {routes}
        </React.Fragment>
      </ul>
    </div>
	);
}

export default Navbar;
