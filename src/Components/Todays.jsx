import React from 'react'

export default function Todays() {
    return (
        <>
            <div className="container-fluid today-container p-5">

                <div className="container d-flex mb-4">
                    <div className="box me-3" ></div>
                    <p>Today's</p>
                </div>

                {/* <div className="container bg-dark">
                    <div className="col-6">
                        <p>Flash Sales</p>

                    </div>
                </div> */}

                <div className="container">

                    <div className="row">

                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src="/images/home1.svg" className="card-img-top ps-2" alt="..." />
                                    <img src="/images/heart.svg" className='heart' alt="" />
                                    <img src="/images/eye.svg" className='eye' alt="" />
                                    <p className='text-container'>-40%</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">HAVIT HV-G92 Gamepad</p>
                                    <div className="paragraph d-flex">
                                        <p className='me-3'>$120</p>
                                        <p className='para'>$160</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src="/images/home2.svg" className="card-img-top image-2" alt="..." />
                                    <img src="/images/heart.svg" className='heart' alt="" />
                                    <img src="/images/eye.svg" className='eye' alt="" />
                                    <p className='text-container'>-35%</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">AK-900 Wired Keyboard</p>
                                    <div className="paragraph d-flex">
                                        <p className='me-3'>$960</p>
                                        <p>$1160</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src="/images/home3.svg" className="card-img-top ps-2 pt-5" alt="..." />
                                    <img src="/images/heart.svg" className='heart' alt="" />
                                    <img src="/images/eye.svg" className='eye' alt="" />
                                    <p className='text-container'>-30%</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">IPS LCD Gaming Monitor</p>
                                    <div className="paragraph d-flex">
                                        <p className='me-3'>$370</p>
                                        <p>$400</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src="/images/home4.svg" className="card-img-top ps-2" alt="..." />
                                    <img src="/images/heart.svg" className='heart' alt="" />
                                    <img src="/images/eye.svg" className='eye' alt="" />
                                    <p className='text-container'>-25%</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">S-Series Comfort Chair </p>
                                    <div className="paragraph d-flex">
                                        <p className='me-3'>$375</p>
                                        <p>$400</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
