import React from 'react'

export default function Categories() {
    return (
        <>
            <div className="container-fluid category-container">
                <div className="container d-flex mb-2">
                    <div className="box me-3" ></div>
                    <p>Categories</p>
                </div>

                <div className="container mb-3 d-flex justify-content-between" >
                    <div className="mb-3">
                        <p className='browse'>Browse By Category</p>
                    </div>
                    <div className="category-buttons d-flex">
                        <button className="btn-left border border-0" style={{ borderRadius: "50%", height: "50px", width: "50px", backgroundColor: "#F5F5F5" }}>
                            <img src="/images/arrow-left.svg" alt="" />
                        </button>
                        <button className="ms-3 btn-right border border-0" style={{ borderRadius: "50%", height: "50px", width: "50px", backgroundColor: "#F5F5F5" }}>
                            <img src="/images/arrow-right.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className="container mb-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-2 col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25 border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/phone.svg" alt="" className="" />
                                <p>Phones</p>
                            </div>
                        </div>
                        <div className="col-2 col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/computer.svg" alt="" className="ps-3" />
                                <p>Computers</p>
                            </div>
                        </div>
                        <div className="col-2 col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/smartwatch.svg" alt="" className="ps-3" />
                                <p>Smartwatch</p>
                            </div>
                        </div>
                        <div className="col-2 col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/camera.svg" alt="" className="" />
                                <p>Camera</p>
                            </div>
                        </div>
                        <div className="col-2 col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/headphone.svg" alt="" className="ps-3" />
                                <p>Headphones</p>
                            </div>
                        </div>
                        <div className="col-2 col-lg-3 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/gamepad.svg" alt="" className="" />
                                <p>Gaming</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
