
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
function Layout() {
  return (
    <div>
      <header>this is header</header>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
