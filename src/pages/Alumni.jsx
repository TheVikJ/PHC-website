import React from 'react';
import Card from "../components/UI/Card";
import styles from '../stylesheets/Alumni.module.css';
import MetaDecorator from "../components/MetaDecorator";

function Alumni(props) {
	return (
		<div className={styles.container}>

			<MetaDecorator
				title={"PSN Hack Club | Alumni"}
				description={"PSN Hack Club was founded in 2019. View all it's alumni here!"}
			/>
			
			<div className={styles.alumniContainer}>
				<Card className={styles.alumni}>
					<p>Alumni here</p>
				</Card>
			</div>
		</div>
	);
}

export default Alumni;