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
import CheckoutPage from './Pages/CheckoutPage'
import PrivateRoute from './Pages/PrivateRoutes'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Header />
        <Routes>
          <Route path='/' element={<PrivateRoute>
            <HomePage />
          </PrivateRoute>} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contact' element={<PrivateRoute>
            <ContactPage />
          </PrivateRoute>} />
          <Route path='/about' element={<PrivateRoute><AboutPage /></PrivateRoute>} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
