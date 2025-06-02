// import React from 'react';

// let products = [
//     {
//         id: 1,
//         image: '/images/home1.svg',
//         title: 'HAVIT HV-G92 Gamepad',
//         price: '$120',
//         originalPrice: '$160',
//         discount: '-40%',
//         rating: 5,
//         reviews: 88,
//     },
//     {
//         id: 2,
//         image: '/images/home2.svg',
//         title: 'AK-900 Wired Keyboard',
//         price: '$960',
//         originalPrice: '$1160',
//         discount: '-35%',
//         rating: 4,
//         reviews: 77,
//     },
//     {
//         id: 3,
//         image: '/images/home3.svg',
//         title: 'IPS LCD Gaming Monitor',
//         price: '$370',
//         originalPrice: '$400',
//         discount: '-30%',
//         rating: 5,
//         reviews: 99,
//     },
//     {
//         id: 4,
//         image: '/images/home4.svg',
//         title: 'S-Series Comfort Chair',
//         price: '$375',
//         originalPrice: '$400',
//         discount: '-25%',
//         rating: 4.5,
//         reviews: 99,
//     },
// ];

// let renderStars = (rating) => {
//     let stars = [];
//     let fullStars = Math.floor(rating);
//     let hasHalf = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//         stars.push(<img key={i} src="/images/star.svg" alt="star" />);
//     }

//     if (hasHalf) {
//         stars.push(<img key="half" src="/images/half-star.svg" alt="half-star" />);
//     }

//     while (stars.length < 5) {
//         stars.push(<img key={`empty-${stars.length}`} src="/images/empty-star.svg" alt="empty-star" />);
//     }

//     return stars;
// };

// export default function Todays() {
//     return (
//         <div className="container-fluid today-container p-5 mb-5">
//             <div className="container d-flex mb-4">
//                 <div className="box me-3"></div>
//                 <p>Today's</p>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-6 col-sm-12 col-lg-6">
//                         <div className="mb-3 d-flex justify-content-between">
//                             <p className="flash-sales">Flash Sales</p>
//                             <img src="/images/timer.svg" alt="timer" className="img-flash" />
//                         </div>
//                     </div>
//                     <div className="col-6 col-sm-12 col-lg-6">
//                         <div className="category-buttons float-end">
//                             <button className="btn-left border-0" style={{ borderRadius: '50%', height: '50px', width: '50px', backgroundColor: '#F5F5F5' }}>
//                                 <img src="/images/arrow-left.svg" alt="left" />
//                             </button>
//                             <button className="ms-3 btn-right border-0" style={{ borderRadius: '50%', height: '50px', width: '50px', backgroundColor: '#F5F5F5' }}>
//                                 <img src="/images/arrow-right.svg" alt="right" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     {products.map((product) => (
//                         <div key={product.id} className="col-12 col-lg-3 col-md-6 col-sm-12">
//                             <div className="card mb-5 border-0">
//                                 <div className="images-container" style={{ maxWidth: '100%' }}>
//                                     <img src={product.image} className="card-img-top ps-2" alt={product.title} />
//                                     <img src="/images/heart.svg" className="heart" alt="heart" />
//                                     <img src="/images/eye.svg" className="eye" alt="eye" />
//                                     <p className="text-container">{product.discount}</p>
//                                 </div>
//                                 <div className="card-body">
//                                     <p className="card-title">{product.title}</p>
//                                     <div className="paragraph d-flex">
//                                         <p className="me-2">{product.price}</p>
//                                         <p className="para m-0">{product.originalPrice}</p>
//                                     </div>
//                                     <div className="star-container d-flex">
//                                         <div className="star-images d-flex me-2">
//                                             {renderStars(product.rating)}
//                                         </div>
//                                         <p className="image-para">({product.reviews})</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="row text-center d-flex justify-content-center border-bottom border-opacity-25">
//                     <button className="btn-product border-0 mb-5">View All Products</button>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/Reducer/productSlice';

import 'swiper/css';
import 'swiper/css/navigation';

const renderStars = (rating) => {
    let stars = [];
    let fullStars = Math.floor(rating);
    let hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<img key={i} src="/images/star.svg" alt="star" />);
    }

    if (hasHalf) {
        stars.push(<img key="half" src="/images/half-star.svg" alt="half" />);
    }

    while (stars.length < 5) {
        stars.push(<img key={`empty-${stars.length}`} src="/images/empty-star.svg" alt="empty" />);
    }

    return stars;
};

export default function Todays() {
    const dispatch = useDispatch();
    const { items: products, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="container-fluid today-container p-5 mb-5">
            <div className="container d-flex mb-4">
                <div className="box me-3"></div>
                <p>Today's</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-12 col-lg-6">
                        <div className="mb-3 d-flex justify-content-between">
                            <p className="flash-sales">Flash Sales</p>
                            <img src="/images/timer.svg" alt="timer" className="img-flash" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-12 col-lg-6">
                        <div className="category-buttons float-end">
                            <button id="custom-prev" className="btn-left border-0" style={{ borderRadius: '50%', height: '50px', width: '50px', backgroundColor: '#F5F5F5' }}>
                                <img src="/images/arrow-left.svg" alt="left" />
                            </button>
                            <button id="custom-next" className="ms-3 btn-right border-0" style={{ borderRadius: '50%', height: '50px', width: '50px', backgroundColor: '#F5F5F5' }}>
                                <img src="/images/arrow-right.svg" alt="right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                {loading ? (
                    <p>Loading products...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <Swiper
                        className='row'
                        loop={true}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '#custom-prev',
                            nextEl: '#custom-next',
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }}
                    >
                        {products.map(product => {
                            let discount = Math.floor(Math.random() * 50);
                            let originalPrice = (product.price + (product.price * discount) / 100).toFixed(2);

                            return (
                                <SwiperSlide className="col-12 col-lg-3 col-md-6 col-sm-12" key={product.id}>
                                    <div className="card mb-5 border-0">
                                        <div className="images-container" style={{ maxWidth: '100%' }}>
                                            <img src={product.image} className="card-img-top p-5" alt={product.title} style={{ height: '180px', objectFit: 'contain' }} />
                                            <img src="/images/heart.svg" className="heart" alt="heart" />
                                            <img src="/images/eye.svg" className="eye" alt="eye" />
                                            <p className="text-container">-{discount}%</p>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-title text-start">{product.title.slice(0, 20)}</p>
                                            <div className="paragraph d-flex">
                                                <p className="me-2">${product.price.toFixed(2)}</p>
                                                <p className="para m-0">${originalPrice}</p>
                                            </div>
                                            <div className="star-container d-flex">
                                                <div className="star-images d-flex me-2">
                                                    {renderStars(product.rating.rate)}
                                                </div>
                                                <p className="image-para">({product.rating.count})</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}

                <div className="row text-center d-flex justify-content-center border-bottom border-opacity-25">
                    <button className="btn-product border-0 mb-5">View All Products</button>
                </div>
            </div>
        </div>
    );
}
