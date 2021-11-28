import React, { useEffect, useState } from 'react'
import styles from './Hackathon2.module.scss'
import { useSpring, animated, config } from 'react-spring'
import MetaDecorator from '../../components/MetaDecorator'

const Timer = ({ style }) => {
  const calculateTimeLeft = () => {
    const difference =
      new Date(Date.UTC(2022, 1, 7, 11, 0, 0)) -
      new Date(Math.floor(new Date().getTime()))

    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24))
      timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60)
      timeLeft.seconds = Math.floor((difference / 1000) % 60)
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <animated.p style={style} className={styles.countdown}>
      {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M :{' '}
      {timeLeft.seconds}S
    </animated.p>
  )
}

const Hero = () => {
  const style = useSpring({
    config: config.stiff,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <div className={styles.heroContainer}>
      <animated.p style={style} className={styles.hero}>
        PSN Hackathon 2.0
      </animated.p>
      <Timer style={style} />
    </div>
  )
}

const Hackathon2 = () => {
  return (
    <React.Fragment>
      <MetaDecorator
        description={
          "PSN Hackathon 2.0 is the PSN Hack Club's 2nd ever hackathon. Pre-registrations open soon"
        }
        title={'Hackathon 2.0'}
      />
      <div className={styles.pageContainer}>
        <Hero />
      </div>
    </React.Fragment>
  )
}

export default Hackathon2
