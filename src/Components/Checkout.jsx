import React from 'react'

export default function Checkout() {
    return (
        <>
            <div className="container-fluid checkout-container p-5">

                <div className="container mb-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" className='text-decoration-none'>Account</a></li>
                            <li className="breadcrumb-item"><a href="#" className='text-decoration-none'>My Account</a></li>
                            <li className="breadcrumb-item"><a href="#" className='text-decoration-none'>Product</a></li>
                            <li className="breadcrumb-item"><a href="#" className='text-decoration-none'>View Cart</a></li>
                            <li className="breadcrumb-item active opacity-100 text-dark" aria-current="page">Checkout</li>
                        </ol>
                    </nav>
                </div>

                <div className="container">
                    <p className='billing-details'>Billing Details</p>
                </div>

                <div className="container">

                    <div className="row">

                        <form className="col-12 mb-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label className='label-name'>First Name*</label> <br />
                                <input type="text" name="name" className='input-fields border-0 p-2 w-75' />
                            </div>
                            <div className="mb-3">
                                <label className='label-name'>Company Name</label> <br />
                                <input type="text" name="company" className='input-fields border-0 p-2 w-75' />
                            </div>
                            <div className="mb-3">
                                <label className='label-name'>Street Address*</label> <br />
                                <input type="text" name="street" className='input-fields border-0 p-2 w-75' />
                            </div>
                            <div className="mb-3">
                                <label className='label-name'>Apartment, floor, etc. (Optional)</label> <br />
                                <input type="text" name="apartment" className='input-fields border-0 p-2 w-75' />
                            </div>
                            <div className="mb-3">
                                <label className='label-name'>Town/City*</label> <br />
                                <input type="text" name="city" className='input-fields border-0 p-2 w-75' />
                            </div>
                            <div className="mb-3">
                                <label className='label-name'>Phone Number*</label> <br />
                                <input type="tel" name="phone" className='input-fields border-0 p-2 w-75' />
                            </div>
                            <div className="mb-3">
                                <label className='label-name'>Email Address*</label> <br />
                                <input type="email" name="email" className='input-fields border-0 p-2 w-75' />
                            </div>

                            <div className="mb-3 d-flex">
                                <input type="checkbox" name="checkbox" className='h-25 bg-info' />
                                <p className='pt-1 paragraph-field'>Save this information for faster check-out next time</p>
                            </div>
                        </form>

                        <div className="col-12 col-md-6 col-sm-12 right-container">

                            <div className="mb-3 row">
                                <div className="col-6 col-md-6 d-flex">
                                    <img src="/images/home1.svg" alt="" style={{ height: "54px " }} className="me-5" />
                                    <p className='paragraph-field pt-3'>LCD Monitor</p>
                                </div>
                                <div className="col-6 col-md-6 d-flex pt-3 justify-content-end">
                                    <p>$650</p>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className="col-6 col-md-6 d-flex">
                                    <img src="/images/home3.svg" alt="" style={{ height: "54px " }} className="me-5" />
                                    <p className='paragraph-field pt-3'>HI Gamepad</p>
                                </div>
                                <div className="col-6 col-md-6 d-flex pt-3 justify-content-end">
                                    <p>$1100</p>
                                </div>
                            </div>

                            <div className="mb-3 row price-item border-dark border-opacity-50">
                                <div className="col-6 col-md-6 d-flex">
                                    <p className='paragraph-field pt-3'>Subtotal:</p>
                                </div>
                                <div className="col-6 col-md-6 d-flex pt-3 justify-content-end">
                                    <p>$1750</p>
                                </div>
                            </div>

                            <div className="mb-3 row price-item border-dark border-opacity-50">
                                <div className="col-6 col-md-6 d-flex">
                                    <p className='paragraph-field pt-3'>Shipping:</p>
                                </div>
                                <div className="col-6 col-md-6 d-flex pt-3 justify-content-end">
                                    <p>$Free</p>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className="col-6 col-md-6 d-flex">
                                    <p className='paragraph-field pt-3'>Total:</p>
                                </div>
                                <div className="col-6 col-md-6 d-flex pt-3 justify-content-end">
                                    <p>$1750</p>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="mb-4 col-sm-6 col-12">
                                    <input type="radio" name="payment" id="bank" />
                                    <label>Bank</label> <br /> <br />
                                    <input type="radio" name="payment" id="cod" />
                                    <label>Cash on Delivery</label>
                                </div>
                                <div className="col-sm-6 text-center col-12">
                                    <img src="/images/checkout-1.svg" alt="" className='me-3' style={{height: "18px"}}  />
                                    <img src="/images/checkout-2.svg" alt="" className='me-3' style={{height: "18px"}} />
                                    <img src="/images/checkout-3.svg" alt="" className='me-3' style={{height: "18px"}} />
                                    <img src="/images/checkout-4.svg" alt="" className='me-3' style={{height: "18px"}} />
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-6 mb-3 col-sm-12">
                                    <input type="text" name="coupon" id="couponcode" placeholder='Coupon Code' className='pe-5 ps-4 py-3 w-100 text-dark opacity-50 rounded' />
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <button className='px-3 py-3 border border-0 apply-coupon w-100 rounded'>Apply Coupon</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <button className='px-3 py-3 border border-0 apply-coupon rounded w-100'>Place Order</button>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    )
}
