import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          width: '100vw',
          height: '100%',
        }}
      >
        {props.children}
      </div>
    </BrowserRouter>
  )
}

export default Layout
