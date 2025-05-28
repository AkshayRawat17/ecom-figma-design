import React from 'react'

export default function Todays() {
    return (
        <>
            <div className="container-fluid today-container p-5 mb-5">

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
                            <div className="card mb-5 border border-0">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src="/images/home1.svg" className="card-img-top ps-2" alt="..." />
                                    <img src="/images/heart.svg" className='heart' alt="" />
                                    <img src="/images/eye.svg" className='eye' alt="" />
                                    <p className='text-container'>-40%</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">HAVIT HV-G92 Gamepad</p>
                                    <div className="paragraph d-flex">
                                        <p className='me-2'>$120</p>
                                        <p className='para m-0'>$160</p>
                                    </div>
                                    <div className="star-container d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(88)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-5 border border-0">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src="/images/home2.svg" className="card-img-top image-2" alt="..." />
                                    <img src="/images/heart.svg" className='heart' alt="" />
                                    <img src="/images/eye.svg" className='eye' alt="" />
                                    <p className='text-container'>-35%</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">AK-900 Wired Keyboard</p>
                                    <div className="paragraph d-flex">
                                        <p className='me-2'>$960</p>
                                        <p className='para m-0'>$1160</p>
                                    </div>

                                    <div className="star-container d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/empty-star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(77)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-5 border border-0">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src="/images/home3.svg" className="card-img-top ps-2 pt-5" alt="..." />
                                    <img src="/images/heart.svg" className='heart' alt="" />
                                    <img src="/images/eye.svg" className='eye' alt="" />
                                    <p className='text-container'>-30%</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">IPS LCD Gaming Monitor</p>
                                    <div className="paragraph d-flex">
                                        <p className='me-2'>$370</p>
                                        <p className='para m-0'>$400</p>
                                    </div>
                                    <div className="star-container d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(99)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-5 border border-0">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src="/images/home4.svg" className="card-img-top ps-2" alt="..." />
                                    <img src="/images/heart.svg" className='heart' alt="" />
                                    <img src="/images/eye.svg" className='eye' alt="" />
                                    <p className='text-container'>-25%</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-title">S-Series Comfort Chair </p>
                                    <div className="paragraph d-flex">
                                        <p className='me-2'>$375</p>
                                        <p className='para m-0'>$400</p>
                                    </div>

                                    <div className="star-container d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/half-star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(99)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row text-center d-flex justify-content-center border-bottom border-opacity-25">
                        <button className='btn-product border border-0 mb-5'>View All Products</button>
                    </div>

                </div>
            </div>
        </>
    )
}
