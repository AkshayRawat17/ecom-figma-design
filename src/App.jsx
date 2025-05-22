import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './Components/Banner'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
