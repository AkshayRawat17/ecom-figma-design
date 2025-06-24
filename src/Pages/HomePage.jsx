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
      {/* <div className="container-fluid home-container">
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
      </div> */}

      <div className="container-fluid">
        <div className="container">

          <div className="row">

            <div className="col-12 col-sm-12 col-lg-3 col-md-12 p-3">

              <div className="sidebar">
                <div className="mb-1 d-flex position-relative">
                  <p className='pe-5 women-fashion'>Women's Fashion</p>
                  <img src="/images/DropDown (1).svg" alt="" className='home-image-1' />
                </div>

                <div className="mb-1 d-flex position-relative">
                  <p className='pe-5 women-fashion'>Men's Fashion</p>
                  <img src="/images/DropDown (1).svg" alt="" className='home-image-1' />
                </div>

                <div className="mb-3">
                  <p className='home-para'>Electronics</p>
                </div>

                <div className="mb-3">
                  <p className='home-para'>Home & Styles</p>
                </div>

                <div className="mb-3">
                  <p className='home-para'>Medicines</p>
                </div>

                <div className="mb-3">
                  <p className='home-para'>Sports & Outdoor</p>
                </div>

                <div className="mb-3">
                  <p className='home-para'>Baby's & Toys</p>
                </div>

                <div className="mb-3">
                  <p className='home-para'>Groceries & Pets</p>
                </div>

                <div className="mb-3">
                  <p className='home-para'>Health & Beauty</p>
                </div>
              </div>

              <a className="btn offcanvas-home-container" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" target='off'>

              </a>

              {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Button with data-bs-target
              </button> */}


              <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><span className="material-symbols-outlined">
                menu
              </span></button>

              <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Home Page</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <div className="mb-1 d-flex position-relative">
                    <p className='pe-5 women-fashion'>Women's Fashion</p>
                    <img src="/images/DropDown (1).svg" alt="" className='home-image-1' />
                  </div>

                  <div className="mb-1 d-flex position-relative">
                    <p className='pe-5 women-fashion'>Men's Fashion</p>
                    <img src="/images/DropDown (1).svg" alt="" className='home-image-1' />
                  </div>

                  <div className="mb-3">
                    <p className='home-para'>Electronics</p>
                  </div>

                  <div className="mb-3">
                    <p className='home-para'>Home & Styles</p>
                  </div>

                  <div className="mb-3">
                    <p className='home-para'>Medicines</p>
                  </div>

                  <div className="mb-3">
                    <p className='home-para'>Sports & Outdoor</p>
                  </div>

                  <div className="mb-3">
                    <p className='home-para'>Baby's & Toys</p>
                  </div>

                  <div className="mb-3">
                    <p className='home-para'>Groceries & Pets</p>
                  </div>

                  <div className="mb-3">
                    <p className='home-para'>Health & Beauty</p>
                  </div>
                </div>
              </div>


              {/* <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <div className="mb-1 d-flex position-relative">
                          <p className='pe-5 women-fashion'>Women's Fashion</p>
                          <img src="/images/DropDown (1).svg" alt="" className='home-image-1' />
                        </div>
                      </li>

                      <li><div className="mb-1 d-flex position-relative">
                        <p className='pe-5 women-fashion'>Men's Fashion</p>
                        <img src="/images/DropDown (1).svg" alt="" className='home-image-1' />
                      </div></li>

                      <li>
                        <div className="mb-3">
                          <p className='home-para'>Electronics</p>
                        </div>
                      </li>

                      <li><div className="mb-3">
                        <p className='home-para'>Home & Styles</p>
                      </div></li>

                      <li>
                        <div className="mb-3">
                          <p className='home-para'>Medicines</p>
                        </div>
                      </li>

                      <li><div className="mb-3">
                        <p className='home-para'>Sports & Outdoor</p>
                      </div></li>

                      <li><div className="mb-3">
                        <p className='home-para'>Baby's & Toys</p>
                      </div></li>

                      <li><div className="mb-3">
                        <p className='home-para'>Groceries & Pets</p>
                      </div></li>

                      <li><div className="mb-3">
                        <p className='home-para'>Health & Beauty</p>
                      </div></li>

                    </ul>
                  </div> */}

            </div>

            {/* <div className="col-9 p-5">

              <div className="row position-relative">
                <div className="col-6 p-5 bg-danger">
                  <div className="mb-3 d-flex">
                    <img src="/images/apple-logo.svg" alt="" className='me-3' />
                    <p className='apple-logo pt-4'>iPhone 14 Series</p>
                  </div>
                  <div className="mb-3">
                    <p className='voucher'>Up to 10% off Voucher</p>
                  </div>
                  <div className="mb-3">
                    <button className='shopnow me-3 border-bottom'>shopNow</button>
                    <img src="/images/home-arrow.svg" alt="" className='arrow-right' />
                  </div>
                </div>

                <div className="col-6 position-relative ">
                  <img src="/images/homepage-image.svg" alt="" className='w-100 h-100' />
                </div>
                
              </div>

              


            </div> */}


            <div className="col-12 col-lg-9 d-flex main-banner">
              <Swiper
                loop={true}
                pagination={true}
                modules={[Pagination]}
                className="mySwiper w-100"
              >

                <SwiperSlide>
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3">
                    <div
                      className="text-white text-center text-sm-start mb-4 mb-sm-0"
                      style={{ flex: 1, maxWidth: "500px" }}
                    >
                      <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                        <img
                          src="/images/apple-logo.svg"
                          alt="Apple Logo"
                          style={{ width: "40px", height: "49px" }}
                        />
                        <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                          iPhone 14 Series
                        </h5>
                      </div>
                      <h2 className="text-iphone">
                        Up to 10% <br />
                        off Voucher
                      </h2>
                      <div className="img-btn d-flex gap-0">
                        <button className="iphone-shop-button mt-4 text-decoration-underline pe-2">
                        Shop Now
                      </button>
                      <img src="/images/home-arrow.svg" alt="" className='pt-4 ps-0' />
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center justify-content-sm-end w-100"
                      style={{
                        flex: 1,
                        maxWidth: "400px",
                        width: "100%",
                      }}
                    >
                      <img
                        src="/images/homepage-image.svg"
                        alt="iPhone"
                        style={{
                          maxHeight: "300px",
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3 p-sm-5">
                    <div
                      className="text-white text-center text-sm-start mb-4 mb-sm-0"
                      style={{ flex: 1, maxWidth: "500px" }}
                    >
                      <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                        <img
                          src="/images/apple-logo.svg"
                          alt="Apple Logo"
                          style={{ width: "40px", height: "49px" }}
                        />
                        <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                          iPhone 14 Series
                        </h5>
                      </div>
                      <h2 className="text-iphone">
                        Up to 10% <br />
                        off Voucher
                      </h2>
                       <div className="img-btn d-flex gap-0">
                        <button className="iphone-shop-button mt-4 text-decoration-underline pe-2">
                        Shop Now
                      </button>
                      <img src="/images/home-arrow.svg" alt="" className='pt-4 ps-0' />
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center justify-content-sm-end w-100"
                      style={{
                        flex: 1,
                        maxWidth: "400px",
                        width: "100%",
                      }}
                    >
                      <img
                        src="/images/homepage-image.svg"
                        alt="iPhone"
                        style={{
                          maxHeight: "300px",
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3 p-sm-5">
                    <div
                      className="text-white text-center text-sm-start mb-4 mb-sm-0"
                      style={{ flex: 1, maxWidth: "500px" }}
                    >
                      <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                        <img
                          src="/images/apple-logo.svg"
                          alt="Apple Logo"
                          style={{ width: "40px", height: "49px" }}
                        />
                        <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                          iPhone 14 Series
                        </h5>
                      </div>
                      <h2 className="text-iphone">
                        Up to 10% <br />
                        off Voucher
                      </h2>
                       <div className="img-btn d-flex gap-0">
                        <button className="iphone-shop-button mt-4 text-decoration-underline pe-2">
                        Shop Now
                      </button>
                      <img src="/images/home-arrow.svg" alt="" className='pt-4 ps-0' />
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center justify-content-sm-end w-100"
                      style={{
                        flex: 1,
                        maxWidth: "400px",
                        width: "100%",
                      }}
                    >
                      <img
                        src="/images/homepage-image.svg"
                        alt="iPhone"
                        style={{
                          maxHeight: "300px",
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 side-banner banner-slide p-3 p-sm-5">
                    <div
                      className="text-white text-center text-sm-start mb-4 mb-sm-0"
                      style={{ flex: 1, maxWidth: "500px" }}
                    >
                      <div className="d-flex align-items-center justify-content-center justify-content-sm-start mb-3 top-text">
                        <img
                          src="/images/apple-logo.svg"
                          alt="Apple Logo"
                          style={{ width: "40px", height: "49px" }}
                        />
                        <h5 className="mb-0 text-white-50 ms-3 iphone-14">
                          iPhone 14 Series
                        </h5>
                      </div>
                      <h2 className="text-iphone">
                        Up to 10% <br />
                        off Voucher
                      </h2>
                      <div className="img-btn d-flex gap-0">
                        <button className="iphone-shop-button mt-4 text-decoration-underline pe-2">
                        Shop Now
                      </button>
                      <img src="/images/home-arrow.svg" alt="" className='pt-4 ps-0' />
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center justify-content-sm-end w-100"
                      style={{
                        flex: 1,
                        maxWidth: "400px",
                        width: "100%",
                      }}
                    >
                      <img
                        src="/images/homepage-image.svg"
                        alt="iPhone"
                        style={{
                          maxHeight: "300px",
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

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
