import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './Components/Banner'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignUpPage'
import Footer from './Components/Footer'
import LoginPage from './Pages/LoginPage'
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
