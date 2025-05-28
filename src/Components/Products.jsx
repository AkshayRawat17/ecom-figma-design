import React from 'react'

export default function Product() {
    return (
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

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/product1.svg" className="card-img-top ps-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">Breed Dry Dog Food</p>
                                <div className="paragraph d-flex">
                                    <p className='me-2'>$100</p>
                                    <div className="star-container pt-2 d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/empty-star.svg" alt="star-image" />
                                            <img src="/images/empty-star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(35)</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/product2.svg" className="card-img-top image-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">CANON EOS DSLR Camera</p>
                                <div className="paragraph d-flex">
                                    <p className='me-2'>$360</p>

                                    <div className="star-container pt-2 d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/empty-star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(95)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/product3.svg" className="card-img-top ps-2 pt-5" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">ASUS FHD Gaming Laptop</p>
                                <div className="paragraph d-flex">
                                    <p className='me-2'>$700</p>
                                    <div className="star-container pt-2 d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(325)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/product4.svg" className="card-img-top ps-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">Curology Product Set </p>
                                <div className="paragraph d-flex">
                                    <p className='me-2'>$500</p>

                                    <div className="star-container pt-2 d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/empty-star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(145)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/product5.svg" className="card-img-top image-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />
                                <p className='text-container new'>New</p>
                            </div>
                            <div className="card-body">
                                <p className="card-title">Kids Electric Car</p>
                                <div className="paragraph d-flex">
                                    <p className='me-2'>$960</p>

                                    <div className="star-container pt-2 d-flex">
                                        <div className="star-images me-2 d-flex">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(65)</p>
                                    </div>
                                </div>
                                <div className="colour-change">
                                    <img src="/images/colour-change-1.svg" className='' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/product6.svg" className="card-img-top image-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">Jr. Zoom Soccer Cleats</p>
                                <div className="paragraph d-flex">
                                    <p className='me-2'>$1160</p>

                                    <div className="star-container pt-2 d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(35)</p>
                                    </div>
                                </div>
                                <div className="colour-change">
                                    <img src="/images/colour-change-2.svg" className='' alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/product7.svg" className="card-img-top image-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />
                                <p className='text-container new'>New</p>
                            </div>
                            <div className="card-body">
                                <p className="card-title">GP11 Shooter USB Gamepad</p>
                                <div className="paragraph d-flex">
                                    <p className='me-2'>$660</p>

                                    <div className="star-container pt-2 d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/half-star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(55)</p>
                                    </div>
                                </div>

                                <div className="colour-change">
                                    <img src="/images/colour-change-3.svg" className='' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-5 border border-0">
                            <div className="images-container" style={{ maxWidth: "100%" }}>
                                <img src="/images/product8.svg" className="card-img-top ps-2" alt="..." />
                                <img src="/images/heart.svg" className='heart' alt="" />
                                <img src="/images/eye.svg" className='eye' alt="" />

                            </div>
                            <div className="card-body">
                                <p className="card-title">Quilted Satin Jacket</p>
                                <div className="paragraph d-flex">
                                    <p className='me-2'>$660</p>

                                    <div className="star-container pt-2 d-flex">
                                        <div className="star-images d-flex me-2">
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/star.svg" alt="star-image" />
                                            <img src="/images/half-star.svg" alt="star-image" />
                                        </div>
                                        <p className='image-para'>(55)</p>
                                    </div>
                                </div>
                                <div className="colour-change">
                                    <img src="/images/colour-change-4.svg" className='' alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="row text-center d-flex justify-content-center border-bottom border-opacity-25">
                <button className='btn-product border border-0 mb-5'>View All Products</button>
            </div>
        </div>
    )
}
