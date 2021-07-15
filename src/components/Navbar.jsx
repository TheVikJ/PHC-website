import React from 'react';
import styles from '../stylesheets/Navbar.module.css';
import {Link} from "react-router-dom";
import ExternalNavs from "./External/ExternalNavs";

function Navbar() {
	return (
		<div className={styles.container}>
			<ul className={styles.navbar}>
				<li>
					<Link to={'/'}>
						Home
					</Link>
				</li>
				<li>
					<Link to={'/about'}>
						About
					</Link>
				</li>
				<ExternalNavs/>
			</ul>
		</div>
	);
}

export default Navbar;