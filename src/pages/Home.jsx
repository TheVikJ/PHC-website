import React from 'react';
import styles from '../stylesheets/Home.module.css'

function Home(props) {
	return (
		<div className={styles.main}>
			<h1 className={"header"}>
				PSN Hack Club
			</h1>
			<h3 className={"subheader"}>
				Hey
			</h3>
		</div>
	);
}

export default Home;