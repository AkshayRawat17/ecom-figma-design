import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function SignupPage() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate();

    function handleSignUpSubmit(e) {
        e.preventDefault();

        let userInfo = {
            name,
            email,
            password
        };
        
        localStorage.setItem("user", JSON.stringify(userInfo));
        alert("Account created successfully!");
        navigate("/login");
    }

    return (
        <>
            <div className="container-fluid" style={{ padding: "70px 20px 140px 0" }}>
                <div className="row">
                    <div className="col-lg-7 col-sm-12 text-center">
                        <img src="/images/Side Image.svg" className='w-100' alt="" />
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="mb-3">
                                <p className='mb-0'>Create an account</p>
                            </div>
                            <div className="mb-5">
                                <p>Enter your details below</p>
                            </div>
                            <div className="mb-4">
                                <input type="text" required placeholder='Name' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <input type="email" required placeholder='Email or Phone Number' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-5">
                                <input type="password" required placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <button type="submit" className='btn-submit'>Create Account</button>
                            </div>
                            <div className="mb-4 bg-light d-flex justify-content-center">
                                <img src="/images/Icon-Google.svg" alt="" className='me-2' />
                                <button className='signup-btn' type='button'>Sign up with Google</button>
                            </div>
                            <div className="mb-4 d-flex justify-content-center">
                                <p className='me-2'>Already have an account?</p>
                                <p><NavLink to="/login">Log in</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
