import React from 'react';
import styles from '../stylesheets/Navbar.module.css';
import {Link} from "react-router-dom";

function Navbar(props) {
	return (
		<div className={styles.container}>
			<ul className={styles.navbar}>
				<li className={styles.navbarItem}>
					<Link to={'/'}>
						Home
					</Link>
				</li>
				<li className={styles.navbarItem}>
					<Link to={'/about'}>
						About
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;