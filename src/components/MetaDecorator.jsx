import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function MetaDecorator({ title, description }) {
  return (
    <Helmet>
      <title>{`PSN Hack Club | ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default MetaDecorator
