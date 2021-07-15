import React from 'react';
import styles from '../stylesheets/Navbar.module.css';
import {Link} from "react-router-dom";
import {discordInvite} from '../data/Constants.json';

function Navbar() {
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
				<li className={styles.navbarItem}>
					<a href={discordInvite} target={"_blank"} rel="noreferrer">
						Discord
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;