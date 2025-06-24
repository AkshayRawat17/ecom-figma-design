// import React from 'react'

// let products = [
//     {
//         title: "The North Coat",
//         price: "$260",
//         originalPrice: "$360",
//         img: "/images/coat.svg",
//         rating: 5,
//     },
//     {
//         title: "Gucci duffle bag",
//         price: "$960",
//         originalPrice: "$1160",
//         img: "/images/bag.svg",
//         rating: 4.5,
//     },
//     {
//         title: "RGB liquid CPU Cooler",
//         price: "$160",
//         originalPrice: "$170",
//         img: "/images/cpu.svg",
//         rating: 4.5,
//     },
//     {
//         title: "Small BookSelf",
//         price: "$360",
//         originalPrice: "",
//         img: "/images/bookself.svg",
//         rating: 5,
//     },
// ];


// export default function Month() {
//     return (

//         <div className="container-fluid month-container mb-5">

//             <div className="container d-flex mb-2">
//                 <div className="box me-3" ></div>
//                 <p>This Month</p>
//             </div>

//             <div className="container mb-3">
//                 <div className="row">
//                     <div className="col-sm-12 selling col-md-6">
//                         <p className='sell'>Best Selling Products</p>
//                     </div>
//                     <div className="col-sm-12 button col-md-6">
//                         <button className='bg-danger border border-0 float-end'>View All</button>

//                     </div>
//                 </div>
//             </div>

//             <div className="container">


//                 <div className="row">
//                     {products.map((product, index) => (
//                         <div key={index} className="col-12 col-lg-3 col-md-6 col-sm-12">
//                             <div className="card mb-5 border border-0">
//                                 <div className="images-container" style={{ maxWidth: "100%" }}>
//                                     <img src={product.img} className="card-img-top ps-2" alt={product.title} />
//                                     <img src="/images/heart.svg" className="heart" alt="heart" />
//                                     <img src="/images/eye.svg" className="eye" alt="eye" />
//                                 </div>
//                                 <div className="card-body">
//                                     <p className="card-title">{product.title}</p>
//                                     <div className="paragraph d-flex">
//                                         <p className="me-3">{product.price}</p>
//                                         {product.originalPrice && <p className="para m-0">{product.originalPrice}</p>}
//                                     </div>
//                                     <div className="star-container d-flex">
//                                         <div className="star-images d-flex me-2">
//                                             {[...Array(Math.floor(product.rating))].map((_, i) => (
//                                                 <img key={i} src="/images/star.svg" alt="star" />
//                                             ))}
//                                             {product.rating % 1 !== 0 && (
//                                                 <img src="/images/half-star.svg" alt="half-star" />
//                                             )}
//                                         </div>
//                                         <p className="image-para">(65)</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>


//             </div>

//             <div className="container frame-container p-5">
//                 <div className="row">
//                     <div className="col-lg-6 left">
//                         <div className="mb-3">
//                             <p className='category'>Categories</p>
//                         </div>
//                         <div className="mb-3">
//                             <p className='experience'>Enhance Your Music Experience</p>
//                         </div>
//                         <div className="mb-4">
//                             <img src="/images/frame.svg" alt="" className='frame-1' />
//                         </div>
//                         <div className="mb-3">
//                             <button className='buy-btn'>Buy Now!</button>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <img src="/images/boombox.svg" alt="" className='h-100 w-100 boombox' />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import React, { useEffect, useState } from 'react';

export default function Month() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.slice(0, 4)))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container-fluid month-container mb-5">

            <div className="container d-flex mb-2">
                <div className="box me-3"></div>
                <p>This Month</p>
            </div>

            <div className="container mb-3">
                <div className="row">
                    <div className="col-sm-12 selling col-md-6">
                        <p className='sell'>Best Selling Products</p>
                    </div>
                    <div className="col-sm-12 button col-md-6">
                        <button className='bg-danger border border-0 float-end'>View All</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index} className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <div className="card mb-5 border border-0">
                                <div className="images-container" style={{ maxWidth: "100%" }}>
                                    <img src={product.image} className="card-img-top px-5 py-3" alt={product.title} />
                                    <img src="/images/heart.svg" className="heart" alt="heart" />
                                    <img src="/images/eye.svg" className="eye" alt="eye" />
                                </div>
                                <div className="card-body">
                                    <p className="card-title">{product.title}</p>
                                    <div className="paragraph d-flex">
                                        <p className="me-3">${product.price}</p>
                                        <p className="para m-0">${(product.price * 1.2).toFixed(2)}</p>
                                    </div>
                                    <div className="star-container d-flex">
                                        <div className="star-images d-flex me-2">
                                            {[...Array(Math.floor(product.rating?.rate || 0))].map((_, i) => (
                                                <img key={i} src="/images/star.svg" alt="star" />
                                            ))}
                                            {product.rating?.rate % 1 !== 0 && (
                                                <img src="/images/half-star.svg" alt="half-star" />
                                            )}
                                        </div>
                                        <p className="image-para">({product.rating?.count || 0})</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
    );
}
