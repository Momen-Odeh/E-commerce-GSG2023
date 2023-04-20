
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import MainHeader from '../MainHeader'

function Layout() {
  return (
    <div>
      <Header/>
      <MainHeader/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
