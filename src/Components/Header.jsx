import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../App.css"

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 mt-3">
        <div className="container-fluid d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
          <div className="d-flex w-100 w-md-50 justify-content-between align-items-center mb-2 mb-lg-0">
            <Link className="navbar-brand text-nav" to="/">
              Exclusive
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse w-100" id="navbarNav">
            <div className="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-start align-items-lg-center" style={{ maxWidth: "805px" }}>
              <div className="d-flex flex-column flex-lg-row gap-4 mt-3 mt-lg-0">
                <NavLink
                  className="nav-item text-decoration-none nav-links"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-item text-decoration-none nav-links"
                  to="/contact"
                >
                  Contact
                </NavLink>
                <NavLink
                  className="nav-item text-decoration-none nav-links"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className="nav-item text-decoration-none nav-links"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </div>
              <div className="mt-3 mt-lg-0">
                <div className="input-search d-flex justify-content-center">
                  <input type="text" placeholder='What are you looking for?' />
                  <img src="/images/Vector.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
