import React from 'react'

let products = [
    {
        id: 1,
        image: "/images/product1.svg",
        title: "Breed Dry Dog Food",
        price: "$100",
        stars: 3,
        totalStars: 5,
        reviews: 35,
        isNew: false,
        colorImage: "",
    },
    {
        id: 2,
        image: "/images/product2.svg",
        title: "CANON EOS DSLR Camera",
        price: "$360",
        stars: 4,
        totalStars: 5,
        reviews: 95,
        isNew: false,
        colorImage: "",
    },
    {
        id: 3,
        image: "/images/product3.svg",
        title: "CASUS FHD Gaming Laptop",
        price: "$700",
        stars: 5,
        totalStars: 5,
        reviews: 325,
        isNew: false,
        colorImage: "",
    },
    {
        id: 4,
        image: "/images/product4.svg",
        title: "Curology Product Set",
        price: "$500",
        stars: 4,
        totalStars: 5,
        reviews: 145,
        isNew: false,
        colorImage: "",
    },
    {
        id: 5,
        image: "/images/product5.svg",
        title: "Kids Electric Car",
        price: "$960",
        stars: 5,
        totalStars: 5,
        reviews: 65,
        isNew: true,
        colorImage: "/images/colour-change-1.svg",
    },
    {
        id: 6,
        image: "/images/product6.svg",
        title: "Jr. Zoom Soccer Cleats",
        price: "$1160",
        stars: 5,
        totalStars: 5,
        reviews: 35,
        isNew: false,
        colorImage: "/images/colour-change-2.svg",

    },
    {
        id: 7,
        image: "/images/product7.svg",
        title: "GP11 Shooter USB Gamepad ",
        price: "$660",
        stars: 4.5,
        totalStars: 5,
        reviews: 55,
        isNew: true,
        colorImage: "/images/colour-change-3.svg",

    },
    {
        id: 8,
        image: "/images/product8.svg",
        title: "Quilted Satin Jacket",
        price: "$660",
        stars: 4.5,
        totalStars: 5,
        reviews: 55,
        isNew: false,
        colorImage: "/images/colour-change-4.svg",

    },

];

const rating = products.rating; // e.g. 4.5
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 >= 0.5;
const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);



export default function Product() {
    return (
        <>
            <div className="container-fluid product-container">
                <div className="container d-flex mb-2">
                    <div className="box me-3" ></div>
                    <p>Our Products</p>
                </div>

                <div className="container mb-3 d-flex justify-content-between" >

                    <div className="mb-3">
                        <p className='browse'>Explore Our Products</p>
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

                <div className="container">
                    <div className="row">

                        {
                            products.map((product) => (
                                <div key={product.id} className="col-12 col-lg-3 col-md-6 col-sm-12">
                                    <div className="card mb-5 border border-0">
                                        <div className="images-container" style={{ maxWidth: "100%" }}>
                                            <img src={product.image} className="card-img-top image-2" alt={product.title} />
                                            <img src="/images/heart.svg" className='heart' alt="" />
                                            <img src="/images/eye.svg" className='eye' alt="" />
                                            {product.isNew && <p className='text-container new'>New</p>}
                                        </div>
                                        <div className="card-body">
                                            <p className="card-title">{product.title}</p>
                                            <div className="paragraph d-flex">
                                                <p className='me-2'>{product.price}</p>
                                                <div className="star-container pt-2 d-flex">
                                                    <div className="star-images d-flex me-2">
                                                        {Array.from({ length: fullStars }).map((_, i) => (
                                                            <img key={`full-${i}`} src="/images/star.svg" alt="star" />
                                                        ))}
                                                        {hasHalfStar && <img key="half" src="/images/half-star.svg" alt="half-star" />}
                                                        {Array.from({ length: emptyStars }).map((_, i) => (
                                                            <img key={`empty-${i}`} src="/images/empty-star.svg" alt="empty-star" />
                                                        ))}
                                                    </div>

                                                    <p className='image-para'>({product.reviews})</p>
                                                </div>
                                            </div>
                                            {product.colorImage && (
                                                <div className="colour-change">
                                                    <img src={product.colorImage} alt="color option" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                {/* <div className="container">
                    <div className="row">
                        {products.map((product) => (
                            <div key={product.id} className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mb-5 border border-0">
                                    <div className="images-container" style={{ maxWidth: "100%" }}>
                                        <img src={product.image} className="card-img-top image-2" alt={product.title} />
                                        <img src="/images/heart.svg" className='heart' alt="" />
                                        <img src="/images/eye.svg" className='eye' alt="" />
                                        {product.isNew && <p className='text-container new'>New</p>}
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title">{product.title}</p>
                                        <div className="paragraph d-flex">
                                            <p className='me-2'>{product.price}</p>
                                            <div className="star-container pt-2 d-flex">
                                                <div className="star-images d-flex me-2">
                                                    {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                                                        <img key={i} src="/images/star.svg" alt="star" />
                                                    ))}
                                                    {product.rating % 1 !== 0 && <img src="/images/half-star.svg" alt="half-star" />}
                                                    {Array.from({ length: 5 - Math.ceil(product.rating) }).map((_, i) => (
                                                        <img key={i} src="/images/empty-star.svg" alt="empty-star" />
                                                    ))}
                                                </div>
                                                <p className='image-para'>({product.totalReviews})</p>
                                            </div>
                                        </div>
                                        {product.colorImage && (
                                            <div className="colour-change">
                                                <img src={product.colorImage} alt="color option" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className="row text-center d-flex justify-content-center border-bottom border-opacity-25">
                    <button className='btn-product border border-0 mb-5'>View All Products</button>
                </div>
            </div>





        </>
    )
}

