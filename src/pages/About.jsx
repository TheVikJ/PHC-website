import React from "react";
import styles from "../stylesheets/About.module.css";
import ProgressiveImage from "react-progressive-image";
import logo from "../images/common/psn.jpg";
import tinyLogo from "../images/common/tiny/psn.jpg";
import SocialIconWrapper from "../components/SocialIcon";
import { icons } from "../data/SocialData";
import MetaDecorator from "../components/MetaDecorator";

function About(props) {
  return (
    <div className={`container ${styles.container}`}>
      
      <MetaDecorator
        title={"PSN Hack Club | About"}
        description={"PSN Hack Club is a club under the global Hack Club network at Pathways School Noida. Open the website to learn more"}
      />
      
      <ProgressiveImage src={logo} placeholder={tinyLogo}>
        {(src) => <img alt={"Logo"} src={src} className={styles.logo} />}
      </ProgressiveImage>
      <h1 className={"header text-center"}>About us</h1>
      <p className={"text-heading"}>Who are we?</p>
      <p className={"text-content"}>
        PSN Hack Club is a club under the global Hack Club network at Pathways
        School Noida. We're a welcoming community of over 50 programmers,
        developers and tech enthusiasts supporting each other on our own
        journeys deeper into our respective fields.
      </p>
      <ul className={styles.iconList}>
        {icons.map((icon) => (
          <li className={styles.icon} key={icon.url}>
            <SocialIconWrapper data={icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
