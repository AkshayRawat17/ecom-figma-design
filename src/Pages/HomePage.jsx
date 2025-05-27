import React from 'react'
import Todays from '../Components/Todays'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../SwipperStyle.css';


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
    </>
  )
}
