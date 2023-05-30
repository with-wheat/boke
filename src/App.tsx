import React, { Suspense } from 'react'
import route from '@/router'
import { useRoutes } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="">
        <div className="count">{useRoutes(route)}</div>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
