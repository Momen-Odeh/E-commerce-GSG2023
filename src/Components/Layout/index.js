
import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
        <header>this is header</header>
        <Outlet/>
        <footer>this is footer</footer>
    </div>
  )
}

export default Layout
