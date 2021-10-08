import React from 'react';
import styles from '../stylesheets/Navbar.module.scss';
import {Link} from "react-router-dom";

const Helper = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				{
					props.children.map((child, idx)=><span key={idx}>{child}</span>)
				}
			</div>
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