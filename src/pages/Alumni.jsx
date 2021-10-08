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
            const imagePath = `${member.name.toLowerCase().replaceAll(' ', '_')}.jpg`;
            let tinyImage
            let image
            try {
              image = require(`../images/alumni/${imagePath}`).default
            } catch (e) {
              console.log(e)
              image =
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg'
            }

            try {
              tinyImage = require(`../images/alumni/tiny/${imagePath}`).default
            } catch {
            }

            console.log(`${member.name}:\nnormal: ${image}\ntiny: ${tinyImage}`)

            return (
              <Card className={styles.alumni} key={member.name}>
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
      </div>
    ))}
  </div>
)

export default Alumni
