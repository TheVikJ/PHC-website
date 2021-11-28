import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexGrow: 1
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Layout
