import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

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
                    <Swiper className="row d-flex gap-3 justify-content-center" loop={true}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.btn-left',
                            nextEl: '.btn-right',
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 5 }
                        }}>
                        <SwiperSlide className="col-2 col-lg-4 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25" style={{ width: "200px !important" }} >
                            <div className="phones">
                                <img src="/images/phone.svg" alt="" className="" />
                                <p>Phones</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="col-2 col-lg-4 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/computer.svg" alt="" className="ps-3" />
                                <p>Computers</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="col-2 col-lg-4 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/smartwatch.svg" alt="" className="ps-3" />
                                <p>Smartwatch</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="col-2 col-lg-4 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/camera.svg" alt="" className="text-dark" style={{ fill: "black !important" }} />
                                <p>Camera</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="col-2 col-lg-4 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/headphone.svg" alt="" className="ps-3" />
                                <p>Headphones</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="col-2 col-lg-4 col-md-4 mb-4 d-flex justify-content-center align-items-center border border-dark border-opacity-25">
                            <div className="phones">
                                <img src="/images/gamepad.svg" alt="" className="" />
                                <p>Gaming</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

