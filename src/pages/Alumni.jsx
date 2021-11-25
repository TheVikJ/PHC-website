import React from 'react'
import Card from '../components/UI/Card'
import styles from './Alumni.module.css'
import MetaDecorator from '../components/MetaDecorator'
import { alumni } from '../data/Alumni'

import ProgressiveImage from 'react-progressive-image'

const Alumni = () => (
  <div className={`container-sm ${styles.pageContainer}`}>
    <MetaDecorator
      title={'PSN Hack Club | Alumni'}
      description={
        "PSN Hack Club was founded in 2019. View all it's alumni here!"
      }
    />

    <p className={'subheader'}>Alumni</p>
    <p className={styles.description}>
      The PSN Hack Club has a growing list of experienced alumni that aim to
      grow the club and mentor new members
    </p>

    {alumni.map((year) => (
      <React.Fragment key={year.year}>
        <p className={styles.yearHeader}>{year.year}</p>
        <div className={styles.alumniContainer}>
          {year.members.map((member) => {
            const imageFile = `${member.name
              .toLowerCase()
              .replace(/ /g, '_')}.jpg`
            let image, tinyImage
            try {
              image = require(`../images/alumni/${imageFile}`).default
            } catch (e) {
              image = require('../images/common/unknown_person.jpg').default
            }

            try {
              tinyImage = require(`../images/alumni/tiny/${imageFile}`).default
            } catch {}

            return (
              <Card
                onClick={() => {
                  if (member.link) window.open(member.link, '_blank')
                }}
                className={styles.alumni}
                key={member.name}
              >
                <div className={styles.image}>
                  {tinyImage ? (
                    <ProgressiveImage src={image} placeholder={tinyImage}>
                      {(src) => <img alt={member.name} src={src} />}
                    </ProgressiveImage>
                  ) : (
                    <img alt={member.name} src={image} />
                  )}
                </div>
                <p className={styles.name}>{member.name}</p>
                <p className={styles.role}>{member.role}</p>
              </Card>
            )
          })}
        </div>
      </React.Fragment>
    ))}
  </div>
)

export default Alumni
