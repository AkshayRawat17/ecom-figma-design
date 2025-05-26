import React from 'react'

export default function About() {
    return (
        <>
            <div className="container-fluid about-container">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" style={{ opacity: "50%" }}>Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
                <div className="row mb-5">
                    <div className="col-6 col-md-12 col-lg-6" style={{ padding: "125px 135px 125px 10px" }}>
                        <div className="mb-3">
                            <p className='story-para'>Our Story</p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-12 col-lg-6" style={{ padding: "0 10px 0 55px", maxWidth: "450px" }}>
                        <img src="/images/Side Image (1).svg" alt="" />
                    </div>
                </div>
                <div className="row mb-5 d-flex justify-content-between" style={{ maxWidth: "1240px" }}>
                    <div className="col-2 col-md-6 bg-light text-center">
                        <div className="mb-3">
                            <img src="/images/Services (1).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-para'>10.5k </p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph'>Sallers active our site</p>
                        </div>
                    </div>
                    <div className="col-2 col-md-6 bg-danger text-center" style={{
                        backgroundColor: "#DB4444"
                    }}>
                        <div className="mb-3">
                            <img src="/images/Services.svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-para' style={{ color: "#FFFFFF" }}>33k</p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph' style={{ color: "#FFFFFF" }}>Monthly Produduct Sale</p>
                        </div>

                    </div>
                    <div className="col-2 col-md-6 bg-light text-center">
                        <div className="mb-3">
                            <img src="/images/Services (2).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-para'>45.5k</p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph'>Customer active in our site</p>
                        </div>
                    </div>
                    <div className="col-2 col-md-6 text-center">
                        <div className="mb-3">
                            <img src="/images/Services (3).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-para'>25k</p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph'>Annual gross sale in our site</p>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-between" style={{ maxWidth: "1240px" }}>
                    <div className="card col-3" style={{ width: "24rem", padding: "0" }}>
                        <img src="/images/image 46.svg" className="card-img-top" alt="..." style={{
                            height: "300px",
                            paddingTop: "25px",
                            backgroundColor: "#F5F5F5"
                        }} />
                        <div className="card-body">
                            <h5 className="card-title">Tom Cruise</h5>
                            <p className="card-text">Founder & Chairman</p>
                            <div className="images">
                                <img src="/images/Icon-Twitter.svg" className='me-2' alt="" />
                                <img src="/images/icon-instagram (1).svg" className='me-2' alt="" />
                                <img src="/images/Icon-Linkedin.svg" className='me-2' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card col-3" style={{ width: "24rem", padding: "0" }}>
                        <img src="/images/image 51.svg" className="card-img-top" alt="..." style={{
                            height: "300px",
                            paddingTop: "25px",
                            backgroundColor: "#F5F5F5"
                        }} />
                        <div className="card-body">
                            <h5 className="card-title">Emma Watson</h5>
                            <p className="card-text">Managing Director</p>
                            <div className="images">
                                <img src="/images/Icon-Twitter.svg" className='me-2' alt="" />
                                <img src="/images/icon-instagram (1).svg" className='me-2' alt="" />
                                <img src="/images/Icon-Linkedin.svg" className='me-2' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card col-3" style={{ width: "24rem", padding: "0" }}>
                        <img src="/images/image 47.svg" className="card-img-top" alt="..." style={{
                            height: "300px",
                            paddingTop: "25px",
                            backgroundColor: "#F5F5F5"
                        }} />
                        <div className="card-body">
                            <h5 className="card-title">Will Smith</h5>
                            <p className="card-text">Product Designer</p>
                            <div className="images">
                                <img src="/images/Icon-Twitter.svg" className='me-2' alt="" />
                                <img src="/images/icon-instagram (1).svg" className='me-2' alt="" />
                                <img src="/images/Icon-Linkedin.svg" className='me-2' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
