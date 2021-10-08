import React from 'react';
import styles from '../stylesheets/Navbar.module.scss';
import {Link} from "react-router-dom";

const Helper = (props) => {
	return (
		<div className={styles.container}>
			<ul className={styles.navbar}>
				{
					props.children.map((child, idx)=><li key={idx}>{child}</li>)
				}
			</ul>
		</div>
	)
}

function Navbar() {
	return (
		<Helper>
			<Link to={'/'}><b>PSN Hack Club</b></Link>
			<Link to={'/about'}>About</Link>
			<Link to={'/alumni'}>Alumni</Link>
		</Helper>
	);
}

export default Navbar;
