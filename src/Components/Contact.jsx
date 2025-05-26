import React from 'react'
import "../App.css"

export default function Contact() {
    return (
        <>
            <div className="container-fluid contact-container" style={{ padding: "40px 170px 130px 110px" }}>
                <div className="row py-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" style={{ opacity: "50%" }}>Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-3 col-sm-12 ps-4">
                        <div className="mb-4 border-bottom border-dark border-opacity-50">
                            <div className="mb-3 d-flex">
                                <img src="/images/icons-phone.svg" alt="" />
                                <p className='row-heading'>Call To Us</p>
                            </div>
                            <div className="mb-3">
                                <p className='row-paragraph'> We are available 24/7, 7 days a week.</p>
                            </div>
                            <div className="mb-3">
                                <p className='row-paragraph'> Phone: +8801611112222</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="mb-3 d-flex">
                                <img src="/images/icons-mail.svg" alt="" />
                                <p className='row-heading'>Write To US</p>
                            </div>
                            <div className="mb-3">
                                <p className='row-paragraph'>Fill out our form and we will contact you within 24 hours.</p>
                            </div>
                            <div className="mb-3">
                                <p className='row-paragraph'>Emails: customer@exclusive.com</p>
                            </div>
                            <div className="mb-3">
                                <p className='row-paragraph'>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 col-sm-12">
                        <form className="row mb-3 d-flex justify-content-around">
                            <div className="col-12 mb-3 col-sm-12 col-lg-3">
                                <input type="text" name="name" placeholder='Your Name *' className='input-contact' required />
                            </div>
                            <div className="col-12 mb-3 col-sm-12 col-lg-3">
                                <input type="email" name="email" placeholder='Your Email *' className='input-contact' required />
                            </div>
                            <div className="col-12 mb-3 col-sm-12 col-lg-3">
                                <input type="tel" name="phone" placeholder='Your Phone *' className='input-contact' required />
                            </div>
                        </form>
                        <div className="row px-4 mb-3">
                            <div className="col-12">
                                <textarea name="message" id="" rows={9} placeholder='Your Message' className='w-100' ></textarea>
                            </div>
                        </div>
                        <div className="row float-end">
                            <div className="col-12">
                                <button type='submit' className='message-btn'>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
