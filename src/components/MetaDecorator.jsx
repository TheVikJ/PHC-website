import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const MetaDecorator = ({ title, description }) => {
  const finalTitle = `PSN Hack Club | ${title}`;

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta property="og:title" content={finalTitle} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MetaDecorator;
