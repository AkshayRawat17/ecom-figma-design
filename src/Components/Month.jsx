import React from 'react'

export default function Month() {
    return (

        <div className="container-fluid month-container mb-5">

            <div className="container d-flex mb-2">
                <div className="box me-3" ></div>
                <p>This Month</p>
            </div>

            <div className="container mb-3">
                {/* <div className="mb-3 d-flex justify-content-between"> */}
                <div className="row">
                    <div className="col-sm-12 selling col-md-6">
                        <p className='sell'>Best Selling Products</p>
                    </div>
                    <div className="col-sm-12 button col-md-6">
                        <button className='bg-danger border border-0 float-end'>View All</button>

                    </div>
                </div>
                {/* </div> */}
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/coat.svg" className="card-img-top ps-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">The North Coat</p>
                                <div className="paragraph d-flex">
                                    <p className='me-3'>$260</p>
                                    <p className='para m-0'>$360</p>
                                </div>
                                <div className="star-container d-flex">
                                    <div className="star-images d-flex me-2">
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                    </div>
                                    <p className='image-para'>(65)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/bag.svg" className="card-img-top image-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">Gucci duffle bag</p>
                                <div className="paragraph d-flex">
                                    <p className='me-3'>$960</p>
                                    <p className='para m-0'>$1160</p>
                                </div>

                                <div className="star-container d-flex">
                                    <div className="star-images d-flex me-2">
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/half-star.svg" alt="star-image" />
                                    </div>
                                    <p className='image-para'>(65)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/cpu.svg" className="card-img-top ps-2 pt-5" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">RGB liquid CPU Cooler</p>
                                <div className="paragraph d-flex">
                                    <p className='me-3'>$160</p>
                                    <p className='para m-0'>$170</p>
                                </div>
                                <div className="star-container d-flex">
                                    <div className="star-images d-flex me-2">
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/half-star.svg" alt="star-image" />
                                    </div>
                                    <p className='image-para'>(65)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/bookself.svg" className="card-img-top ps-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">Small BookSelf</p>
                                <div className="paragraph d-flex">
                                    <p className='me-3'>$360</p>
                                </div>

                                <div className="star-container d-flex">
                                    <div className="star-images d-flex me-2">
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                        <img src="/images/star.svg" alt="star-image" />
                                    </div>
                                    <p className='image-para'>(65)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container frame-container p-5">
                <div className="row">
                    <div className="col-lg-6 left">
                        <div className="mb-3">
                            <p className='category'>Categories</p>
                        </div>
                        <div className="mb-3">
                            <p className='experience'>Enhance Your Music Experience</p>
                        </div>
                        <div className="mb-4">
                            <img src="/images/frame.svg" alt="" className='frame-1' />
                        </div>
                        <div className="mb-3">
                            <button className='buy-btn'>Buy Now!</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/images/boombox.svg" alt="" className='h-100 w-100 boombox' />
                    </div>
                </div>
            </div>

        </div>
    )
}
