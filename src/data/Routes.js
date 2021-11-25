import About from '../pages/About'
import Alumni from '../pages/Alumni'
import Home from '../pages/Home'
import React from 'react'
import Hackathon2022 from '../pages/events/Hackathon2022'

const commonRoutes = [
  {
    name: 'About',
    route: '/about',
    component: About,
  },
  {
    name: 'Alumni',
    route: '/alumni',
    component: Alumni,
  },
]

export const navbarRoutes = [
  {
    name: <b>PSN Hack Club</b>,
    route: '/',
  },
  ...commonRoutes,
]

export const homeRoutes = [
  ...commonRoutes,
  {
    route: '/',
    component: Home,
  },
  {
    route: '/events/hackathon2022',
    component: Hackathon2022,
  },
]
