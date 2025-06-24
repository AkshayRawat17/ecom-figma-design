import React from 'react'
import { Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

export default function About() {
    return (
        <>
            <div className="container-fluid about-container">
                <div className="row" style={{ padding: "40px 90px" }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" style={{ opacity: "50%" }}>Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-lg-6 col-sm-12 story-section" >
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
                    <div className="col-12 col-lg-6 col-sm-12 pe-0">
                        <img src="/images/Side Image (1).svg" className='image' style={{ width: "100%" }} alt="" />
                    </div>
                </div>
                <div className="row mb-5 box-section">
                    <div className="col-3 mb-3 me-2  text-center">
                        <div className="mb-3">
                            <img src="/images/Services (1).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-para'>10.5k </p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph'>Sellers active our site</p>
                        </div>
                    </div>
                    <div className="col-3 mb-3 me-2 text-center">
                        <div className="mb-3">
                            <img src="/images/Services (9).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-para'>33k</p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph' >Monthly Product Sale</p>
                        </div>

                    </div>
                    <div className="col-3 mb-3 me-2 text-center">
                        <div className="mb-3">
                            <img src="/images/Services (5).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-para'>45.5k</p>
                        </div>
                        <div className="mb-3">
                            <p className='paragraph'>Customer active in our site</p>
                        </div>
                    </div>
                    <div className="col-3 mb-3 me-2 text-center">
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

                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,

                    }}
                    modules={[Pagination]}
                    className="mySwiper row d-flex justify-content-evenly image-slider-swipper"
                >
                    <SwiperSlide className='d-flex justify-content-around mb-5'>

                        <div className="row d-flex">
                            <div className="card d-flex col-3 col-md-3 col-lg-3 me-5" style={{ width: "24rem", padding: "0" }}>
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

                            <div className="card col-3 col-md-3 col-lg-3 me-5" style={{ width: "24rem", padding: "0" }}>
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

                            <div className="card col-3 col-md-3 col-lg-3 me-5" style={{ width: "24rem", padding: "0" }}>
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

                    </SwiperSlide>

                    <SwiperSlide className='d-flex justify-content-around mb-5'>

                        <div className="row d-flex">
                            <div className="card col-3 col-md-3 col-lg-4 me-5" style={{ width: "24rem", padding: "0" }}>
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

                            <div className="card col-3 col-md-3 col-lg-4  me-5" style={{ width: "24rem", padding: "0" }}>
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

                            <div className="card col-3 col-md-3 col-lg-4  me-5" style={{ width: "24rem", padding: "0" }}>
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

                    </SwiperSlide>

                    <SwiperSlide className='d-flex justify-content-around mb-5'>

                        <div className="row d-flex">
                            <div className="card col-3 col-md-3 col-lg-4 me-5" style={{ width: "24rem", padding: "0" }}>
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

                            <div className="card col-3 col-md-3 col-lg-4  me-5" style={{ width: "24rem", padding: "0" }}>
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

                            <div className="card col-3 col-md-3 col-lg-4 me-5" style={{ width: "24rem", padding: "0" }}>
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

                    </SwiperSlide>
                </Swiper>

                <div className="row about-main" style={{ padding: "30px 80px" }}>
                    <div className="col-12 col-sm-6 col-lg-4 col-md-4 about-page-content">
                        <div className="mb-3">
                            <img src="/images/Services (6).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-content-para'>FREE AND FAST DELIVERY</p>
                        </div>
                        <div className="mb-3">
                            <p className='about-last'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-md-4 about-page-content">
                        <div className="mb-3">
                            <img src="/images/Services (7).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-content-para'>24/7 CUSTOMER SERVICE</p>
                        </div>
                        <div className="mb-3">
                            <p className='about-last'>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-md-4 about-page-content">
                        <div className="mb-3">
                            <img src="/images/Services (8).svg" alt="" />
                        </div>
                        <div className="mb-3">
                            <p className='about-content-para'>MONEY BACK GUARANTEE</p>
                        </div>
                        <div className="mb-3">
                            <p className='about-last'>We return money within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>

        
        </>
    )
}
