import { useEffect } from 'react'

// react-router components
import { Routes, Route, useLocation } from 'react-router-dom'

// pages
import { Home, NotFound404 } from '../pages/index'

//global css
import './App.css'

export default function App() {
  const { pathname } = useLocation()

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document!.scrollingElement!.scrollTop = 0
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}
