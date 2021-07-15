import React from 'react';
import styles from '../stylesheets/Home.module.css'
import {lines} from '../data/Home.json';

function Home() {
	
	const heroLine = lines[Math.floor(Math.random()*lines.length)];
	
	return (
		<div className={styles.main}>
			<h1 className={"header"}>
				PSN Hack Club
			</h1>
			<h3 className={"subheader"}>
				{heroLine}
			</h3>
		</div>
	);
}

export default Home;