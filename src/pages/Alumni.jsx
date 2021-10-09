import React from 'react'
import Card from '../components/UI/Card'
import styles from '../stylesheets/Alumni.module.css'
import MetaDecorator from '../components/MetaDecorator'
import { alumni } from '../data/Alumni'

import ProgressiveImage from 'react-progressive-image'

const Alumni = () => (
  <div className={styles.container}>
    <MetaDecorator
      title={'PSN Hack Club | Alumni'}
      description={
        'PSN Hack Club was founded in 2019. View all it\'s alumni here!'
      }
    />

    {alumni.map((year) => (
      <div className={styles.yearContainer} key={year.year}>
        <p className={styles.yearHeader}>{year.year}</p>
        <div className={styles.alumniContainer}>
          {year.members.map((member) => {
            const imageFile = `${member.name.toLowerCase().replaceAll(' ', '_')}.jpg`;
            let image, tinyImage
            try {
              image = require(`../images/alumni/${imageFile}`).default
            } catch (e) {
              image = require("../images/common/unknown_person.jpg").default
            }

            try {
              tinyImage = require(`../images/alumni/tiny/${imageFile}`).default
            } catch {
              tinyImage = require(`../images/common/tiny/unknown_person.jpg`).default
            }

            return (
              <Card onClick={()=> {if(member.link) window.open(member.link, '_blank')} } className={styles.alumni} key={member.name}>
                <div className={styles.image}>
                    <ProgressiveImage src={image} placeholder={tinyImage}>
                      {(src) => <img alt={member.name} src={src} />}
                    </ProgressiveImage>
                </div>
                <p className={styles.name}>{member.name}</p>
                <p className={styles.role}>{member.role}</p>
              </Card>
            )
          })}
        </div>
      </div>
    ))}
  </div>
)

export default Alumni
