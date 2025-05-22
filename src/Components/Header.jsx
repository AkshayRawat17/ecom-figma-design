import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className="header-container pt-5">
        <div className="container d-flex justify-content-between">

          <div className="container-heading">
            <p>Exclusive</p>
          </div>

          <ul className="container-links d-flex">
            <li className='mx-4'><NavLink to="/">Home</NavLink></li>
            <li className='mx-4'><NavLink to="/contact">Contact</NavLink></li>
            <li className='mx-4'><NavLink to="/about">About</NavLink></li>
            <li className='mx-4'><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>

          <div className="input-group pb-3" style={{ maxWidth: "270px"}}>
            <input type="text" placeholder='What are you looking for?' className='form-control' style={{ borderRight: "none", backgroundColor: "#F5F5F5" }} />
            <span className='input-group-text bg-white border-start-0' style={{ backgroundColor: "#F5F5F5" }}>
              <span className="material-symbols-outlined">
                search
              </span>
            </span>
          </div>

        </div>
      </div>
    </>
  )
}
