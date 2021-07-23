import React from 'react';
import styles from '../../stylesheets/Card.module.css';

function Card(props) {
	console.log("haha")
	return (
		<div className={`${styles.card} ${props.className !== undefined && props.className}`}>
			{props.children}
		</div>
	);
}

export default Card;