import React from 'react'
import styles from '../styles/NotFound.module.css'
import Link from 'next/link'
import MetaDecorator from '../components/MetaDecorator'

function NotFound(props) {
  return (
    <div className={styles.container}>
      <MetaDecorator
        title={'Not Found'}
        description={'The page you requested was not found.'}
      />
      <img
        alt={'A very sad panther :('}
        src={'/images/common/sad_panther.png'}
        className={styles.panther}
      />
      <h1 className={'header text-center'}>404</h1>
      <p className={'text-content text-center'}>
        The page you requested does not exist
        <br/>
        <Link href={'/'}>Home</Link>
      </p>
    </div>
  )
}

export default NotFound
