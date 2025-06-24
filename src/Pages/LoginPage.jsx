import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const authenticateUsers = [
    { email: "akshay123@gmail.com", password: "akshay123" },
    { email: "ansh111@gmail.com", password: "ansh111" },
    { email: "akshit12@gmail.com", password: "akshit12" },
];

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault();

        let userValid = authenticateUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (!userValid) {
            const localUser = JSON.parse(localStorage.getItem("user"));
            if (
                localUser &&
                localUser.email === email &&
                localUser.password === password
            ) {
                userValid = localUser;
            }
        }

        if (userValid) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            setLoginError("");
            navigate("/");
        } else {
            setLoginError("Invalid Email or Password");
        }
    }

    return (
        <div className="container-fluid" style={{ padding: "70px 20px 140px 0" }}>
            <div className="row">
                <div className="col-lg-7 col-sm-12 bg-light text-center">
                    <img src="/images/Side Image.svg" className="w-100" alt="" />
                </div>
                <div className="col-lg-5 col-sm-12">
                    <form style={{ maxWidth: "335px" }} onSubmit={submitForm}>
                        <div className="mb-3">
                            <p className="mb-0">Log in to Exclusive</p>
                        </div>
                        <div className="mb-4">
                            <p>Enter your details below</p>
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                required
                                placeholder="Email or Phone Number"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {loginError && (
                            <p style={{ color: "red", fontSize: "14px" }}>{loginError}</p>
                        )}
                        <div className="mb-4 d-flex justify-content-between">
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: "#DB4444",
                                    padding: "16px 48px",
                                    borderRadius: "4px",
                                    color: "#FAFAFA",
                                    fontWeight: "500",
                                    fontFamily: "Poppins",
                                    border: "none",
                                }}
                            >
                                Login
                            </button>
                            <p>
                                <NavLink
                                    to="/login"
                                    style={{
                                        border: "none",
                                        fontSize: "16px",
                                        color: "#DB4444",
                                        fontFamily: "Poppins",
                                        fontWeight: "400",
                                        opacity: "100%",
                                        position: "relative",
                                        top: "15px",
                                    }}
                                >
                                    Forget Password?
                                </NavLink>

                            </p>
                        </div>
                        <div className="mb-4 d-flex justify-content-center">
                            <p className='me-2'>Create a new Account?</p>
                            <p><NavLink to="/signup">Sign Up</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
