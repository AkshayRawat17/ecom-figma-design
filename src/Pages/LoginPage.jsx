import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginPage() {
    return (
        <>
            <div className="container-fluid" style={{ padding: "70px 20px 140px 0" }}>
                <div className="row">
                    <div className="col-lg-7 col-sm-12 bg-light text-center">
                        <img src="/images/Side Image.svg" className='w-100' alt="" />
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <form style={{ maxWidth: "335px" }}>
                            <div className="mb-3">
                                <p className='mb-0'>Log in to Exclusive</p>
                            </div>
                            <div className="mb-4">
                                <p>Enter your details below</p>
                            </div>
                            <div className="mb-4">
                                <input type="email" name="email" placeholder='Email or Phone Number' />
                            </div>
                            <div className="mb-5">
                                <input type="password" name="password" placeholder='Password' />
                            </div>
                            <div className="mb-4 d-flex justify-content-between">
                                <button type="submit" className='' style={{ backgroundColor: "#DB4444", padding: "16px 48px", borderRadius: "4px", color: "#FAFAFA", fontWeight: "500", fontFamily: "Poppins", border: "none" }}>Login</button>
                                <p><NavLink to="/login" style={{ border: "none", fontSize: "16px", color: "#DB4444", fontFamily: "Poppins", fontWeight: "400", opacity: "100%", position: "relative", top: "15px" }}>Forget Password?</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
