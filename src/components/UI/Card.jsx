import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../stylesheets/Card.module.css';

function Card(props) {
	console.log("haha")
	return (
		<div className={`${styles.card} ${props.className !== undefined && props.className}`}>
			{props.children}
		</div>
	);
}

Card.propTypes = {
	className: PropTypes.string
}

Card.defaultProps = {
	className: undefined
}

export default Card;