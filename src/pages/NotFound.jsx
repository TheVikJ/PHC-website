import React from "react";
import styles from "../stylesheets/NotFound.module.css";
import { Link } from "react-router-dom";
import panther from "../images/common/sad_panther.png";
import tinyPanther from "../images/common/tiny/sad_panther.png";

import ProgressiveImage from "react-progressive-image";

function NotFound(props) {
  return (
    <div className={styles.container}>
      <ProgressiveImage src={panther} placeholder={tinyPanther}>
        {(src) => (
          <img
            alt={"A very sad panther :("}
            src={src}
            className={styles.panther}
          />
        )}
      </ProgressiveImage>
      <h1 className={"header text-center"}>404</h1>
      <p className={"text-content text-center"}>
        The page you requested does not exist
        <br />
        <Link to={"/"}>Home</Link>
      </p>
    </div>
  );
}

export default NotFound;
