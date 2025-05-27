import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-around" style={{ backgroundColor: "black", padding: "70px 75px 50px 65px", borderBottom: "1px solid white", color: "#FAFAFA" }}>
        <div className="row" style={{ width: "1330px" }}>
          <div className="col-12 col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="mb-3">
              <h3 className='text-light'>Exclusive</h3>
            </div>
            <div className="mb-3">
              <p className='main-heading'>Subscribe</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>Get 10% off your first order</p>
            </div>
            <div className="mb-3 d-flex" style={{ maxWidth: "212px", borderRadius: "2px", border: "1.5px solid white" }}>
              <input type="email" name="email" placeholder='Enter your email' className='border border-0 text-light' />
              <img src="/images/Vector (2).svg" alt="" style={{ backgroundColor: "black" }} />
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-sm-6 mb-4">
            <div className="mb-3">
              <p className='main-heading'>Support</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>exclusive@gmail.com</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>+88015-88888-9999</p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-2 col-sm-6 mb-4">
            <div className="mb-3">
              <p className='main-heading'>Account</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>My Account</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>Login / Register</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>Cart</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>Wishlist</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>Shop</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 col-sm-6 mb-4">
            <div className="mb-3">
              <p className='main-heading'>Quick Link</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>Privacy Policy</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>Terms Of Use</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>FAQ</p>
            </div>
            <div className="mb-3">
              <p className='main-para'>Contact</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 col-sm-6 mb-4">
            <div className="mb-3">
              <p className='main-heading'>Download App</p>
            </div>
            <div className="mb-3">
              <p className='new-user'>Save $3 with App New User Only</p>
            </div>
            <div className="mb-3 d-flex">
              <div className="left me-2">
                <img src="/images/Qrcode 1.svg" alt="" style={{ borderRadius: "2.5px" }} />
              </div>
              <div className="right">
                <div className="upper mb-2" style={{ borderRadius: "0.6px" }}>
                  <img src="/images/googleplaystore.svg" alt="" />
                </div>
                <div className="lower" style={{ borderRadius: "0.6px" }}>
                  <img src="/images/appstore.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-around" style={{ width: "175px" }}>
              <div className="icon">
                <img src="/images/Vector (3).svg" alt="" />
              </div>
              <div className="icon">
                <img src="/images/Vector (4).svg" alt="" />
              </div>
              <div className="icon">
                <img src="/images/icon-instagram.svg" alt="" />
              </div>
              <div className="icon">
                <img src="/images/Vector (5).svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ backgroundColor: "black", color: "#FFFFFF", padding: "12px 3px" }}>
        <img src="/images/icon-copyright.svg" className='copyright-section' alt="" />
        <p className='mb-0 ms-1 copyright-section'>Copyright Rimel 2022. All right reserved</p>
      </div>
    </>
  )
}
