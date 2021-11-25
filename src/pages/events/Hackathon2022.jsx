import React, { useEffect, useState } from 'react'
import styles from './Hackathon2022.module.scss'
import { useSpring, animated, config } from 'react-spring'

const Timer = ({ style }) => {
  const calculateTimeLeft = () => {
    const difference =
      new Date(Date.UTC(2022, 1, 7, 10, 0, 0)) -
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
        PSN Hackathon 2022
      </animated.p>
      <Timer style={style} />
      {/*<animated.p style={style} className={styles.subText}>*/}
      {/*  7 - 9 January*/}
      {/*</animated.p>*/}
    </div>
  )
}

const Hackathon2022 = () => {
  return (
    <div className={styles.pageContainer}>
      <Hero />
    </div>
  )
}

export default Hackathon2022
