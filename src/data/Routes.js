import About from "../pages/About";
import Alumni from "../pages/Alumni";
import Home from "../pages/Home";
import React from "react";

const commonRoutes = [
  {
    name: "About",
    route: "/about",
    component: About
  },
  {
    name: "Alumni",
    route: "/alumni",
    component: Alumni
  },
]

export const navbarRoutes = [
  {
    name: <b>PSN Hack Club</b>,
    route: '/'
  },
  ...commonRoutes,
]

export const homeRoutes = [
  ...commonRoutes,
  {
    route: "/",
    component: Home
  }
]
