import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

function Card(props) {
  return (
    <div
      onClick={() => {
        if (typeof props.onClick === 'function') props.onClick()
      }}
      className={`${styles.card} ${
        props.className !== undefined && props.className
      }`}
    >
      {props.children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
}

Card.defaultProps = {
  className: undefined,
}

export default Card
