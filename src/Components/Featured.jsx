import React from 'react'

export default function Featured() {
    return (
        <>
            <div className="container-fluid featured-container bg-success">

                <div className="container d-flex mb-4">
                    <div className="box me-3" ></div>
                    <p>Featured</p>
                </div>

                <div className="container">
                    <div className="mb-3">
                        <p className='new-arrival'>New Arrival</p>
                    </div>
                </div>

                <div className="container mb-5">
                    <div className="row">
                        <div className="col-6 bg-primary d-flex position-relative">
                            <div className="image-container">
                                <img src="/images/arrival-1.svg" alt="" className='w-100 img-arrival' />
                            </div>
                            <div className="contents">
                                <div className="mb-3">
                                    <p className='playstation'>PlayStation 5</p>
                                </div>
                                <div className="mb-3">
                                    <p className='ps5'>Black and White version of the PS5 coming out on sale.</p>
                                </div>
                                <div className="mb-3">
                                    <button className='shopnow border-dark border-bottom border-opacity-50'>ShopNow</button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-6 d-flex flex-column gap-3"
                            style={{ height: "600px" }}
                        >
                            {/* Top - Full Width Card */}
                            <div
                                className="card text-white bg-dark border-0 rounded overflow-hidden w-100"
                                style={{ height: "48%" }}
                            >
                                <img
                                    src="/images/arrival-2.svg"
                                    className="card-img"
                                    alt="Women's Collections"
                                    style={{ objectFit: "cover", height: "100%" }}
                                />
                                <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                                    <h5 className="card-title">Women’s Collections</h5>
                                    <p className="card-text">
                                        Featured woman collections that <br />
                                        give you another vibe.
                                    </p>
                                    <button
                                        href="#"
                                        className="btn btn-sm position-absolute bottom-0 start-0"
                                    >
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            {/* Bottom Row - Two Half-Width Cards */}
                            <div
                                className="d-flex gap-3"
                                style={{ height: "48%", marginTop: "20px" }}
                            >
                                {/* Speaker Card */}
                                <div className="card text-white bg-dark border-0 rounded overflow-hidden w-50">
                                    <img
                                        src="images/arrival-3.svg"
                                        className="card-img"
                                        alt="Speakers"
                                        style={{ objectFit: "cover", height: "100%" }}
                                    />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                                        <h6 className="card-title">Speakers</h6>
                                        <p className="card-text small">Amazon wireless speakers</p>
                                        <button
                                            href="#"
                                            className="btn btn-sm position-absolute bottom-0 start-0"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                                {/* Perfume Card */}
                                <div className="card text-white bg-dark border-0 rounded overflow-hidden w-50">
                                    <img
                                        src="images/arrival-4.svg"
                                        className="card-img"
                                        alt="Perfume"
                                        style={{ objectFit: "cover", height: "100%" }}
                                    />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                                        <h6 className="card-title">Perfume</h6>
                                        <p className="card-text small">GUCCI INTENSE OUD EDP</p>
                                        <button
                                            href="#"
                                            className="btn btn-sm position-absolute bottom-0 start-0"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}


