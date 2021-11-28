import React from 'react'
import styles from '../styles/About.module.scss'
import Image from 'next/image'
import SocialIconWrapper from '../components/SocialIcon'
import { icons } from '../data/SocialData'
import MetaDecorator from '../components/MetaDecorator'

function About() {
  return (
    <div className={`container ${styles.container}`}>
      <MetaDecorator
        title={'About'}
        description={
          'PSN Hack Club is a club under the global Hack Club network at Pathways School Noida. Open the website to learn more'
        }
      />

      <img alt={'Logo'} src={'/images/common/psn.jpg'} className={styles.logo}/>

      <h1 className={'header text-center'}>About us</h1>
      <p className={'text-heading'}>Who are we?</p>
      <p className={'text-content'}>
        PSN Hack Club is a club under the global Hack Club network at Pathways
        School Noida. We&apos;re a welcoming community of over 50 programmers,
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
  )
}

export default About
