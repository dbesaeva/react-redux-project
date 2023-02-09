import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AirportPage from './pages/AirportPage'
import AuthPage from './pages/AuthPage'
import Navigation from './components/Navigation'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <>
      <Navigation/>
      <div className="container mx-auto pt-4">
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/auth'} element={<AuthPage/>}/>
          <Route path={'/airport/:id'} element={<AirportPage/>}/>
        </Routes>
      </div>
    </>
  )
}
