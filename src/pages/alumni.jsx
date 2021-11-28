import React, {useState} from 'react'
import Card from '../components/UI/Card'
import styles from '../styles/Alumni.module.css'
import MetaDecorator from '../components/MetaDecorator'
import {alumni} from '../data/Alumni'

const AlumniCard = ({name, link, role}) => {
  const [image, setImage] = useState(`/images/alumni/${name.toLowerCase().replace(/ /g, '_')}.jpg`);

  const onImageError = () => {
    setImage('/images/common/unknown_person.jpg')
  }

  return (
    <Card
      onClick={() => {
        if (link) window.open(link, '_blank')
      }}
      className={styles.alumni}
      key={name}
    >
      <div className={styles.image}>
        <img alt={name} src={image} onError={onImageError}/>
      </div>

      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
    </Card>
  )
}

const Alumni = () => (
  <div className={`container-sm ${styles.pageContainer}`}>
    <MetaDecorator
      title={'Alumni'}
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
          {year.members.map((member) => <AlumniCard {...member} key={member.name}/>)}
        </div>
      </React.Fragment>
    ))}
  </div>
)

export default Alumni
