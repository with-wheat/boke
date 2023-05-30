import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './nav-bar'
import { DiscoverWrapper } from './style'
const Discover = () => {
  return (
    <DiscoverWrapper>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default Discover
