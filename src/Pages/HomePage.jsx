import React from 'react'
import Todays from '../Components/Todays'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../SwipperStyle.css';
import Categories from '../Components/Categories';
import Month from '../Components/Month';
import Product from '../Components/Products';
import Featured from '../Components/Featured';


export default function HomePage() {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row">
          <div className="col-3 col-lg-3 border-end">
            <div className="mb-2 d-flex justify-content-between">
              <p className='home-para'>Woman’s Fashion</p>
              <img src="/images/DropDown (1).svg" alt="" className='image-1' />
            </div>
            <div className="mb-2 d-flex justify-content-between">
              <p className='home-para'>Men’s Fashion</p>
              <img src="/images/DropDown (1).svg" alt="" className='image-2' />
            </div>
            <div className="mb-2">
              <p className='home-para'>Electronics</p>
            </div>
            <div className="mb-2">
              <p className='home-para'>Home & Lifestyle</p>
            </div>
            <div className="mb-2">
              <p className='home-para'>Medicine</p>
            </div>
            <div className="mb-2">
              <p className='home-para'>Sports & Outdoor</p>
            </div>
            <div className="mb-2">
              <p className='home-para'>Baby’s & Toys</p>
            </div>
            <div className="mb-2">
              <p className='home-para'>Groceries & Pets</p>
            </div>
            <div className="mb-2">
              <p className='home-para'>Health & Beauty</p>
            </div>
          </div>
          <div className="col-9 col-lg-9 d-flex">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper bg-danger position-relative">
              <SwiperSlide>
                <img src="/images/image-home-2.jpg" className='position-absolute' alt="" />
                <p className='text-dark'>Slide 1</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/image-home-2.jpg" className='position-absolute' alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/image-home-2.jpg" className='position-absolute' alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/image-home-2.jpg" className='position-absolute' alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/image-home-2.jpg" className='position-absolute' alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <Todays />
      <Categories />
      <Month />
      <Product />
      <Featured />

      <div className="row home-main about-main" style={{ padding: "30px 80px" }}>
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

    </>
  )
}
