import React from 'react'

export default function Featured() {
    return (
        <>
            <div className="container-fluid featured-container">

                <div className="container d-flex mb-4">
                    <div className="box me-3" ></div>
                    <p>Featured</p>
                </div>

                <div className="container">
                    <div className="mb-3">
                        <p className='new-arrival'>New Arrival</p>
                    </div>
                </div>

                <div className="container mb-5">
                    <div className="row p-4">
                        {/* <div className="col-6 bg-primary d-flex position-relative">
                            <div className="image-container">
                                <img src="/images/arrival-1.svg" alt="" className='w-100 img-arrival' />
                            </div>
                            <div className="contents">
                                <div className="mb-3">
                                    <p className='playstation'>PlayStation 5</p>
                                </div>
                                <div className="mb-3">
                                    <p className='ps5'>Black and White version of the PS5 coming out on sale.</p>
                                </div>
                                <div className="mb-3">
                                    <button className='shopnow border-dark border-bottom border-opacity-50'>ShopNow</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">

                        </div> */}

                        <div className="col-lg-6 mb-3 col-sm-12 position-relative d-flex" style={{background: "#000000"}}> 
                            <img src="/images/arrival-1.svg" alt="" className='h-100 w-100' />
                            <div className="arrival-1-contents position-absolute bottom-0">
                                <div className="mb-3">
                                    <p className='playstation'>PlayStation 5</p>
                                </div>
                                <div className="mb-3">
                                    <p className='ps5'>Black and White version of the PS5 coming out on sale.</p>
                                </div>
                                <div className="mb-3">
                                    <button className='shopnow'>ShopNow</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12 second-container">

                            <div className="upper mb-3 d-flex position-relative" style={{ height: "47%", background: "#000000" }}>
                                <img src="/images/arrival-2.svg" alt="" className='w-100 h-100' />
                                <div className="arrival-1-contents ps-3 position-absolute bottom-0">
                                    <div className="mb-3">
                                        <p className='playstation'>Women’s Collections</p>
                                    </div>
                                    <div className="mb-3">
                                        <p className='ps5'>Featured woman collections that give you another vibe.</p>
                                    </div>
                                    <div className="mb-3">
                                        <button className='shopnow'>ShopNow</button>
                                    </div>
                                </div>
                            </div>

                            <div className="lower d-flex position-relative" style={{ height: '48%' }}>

                                <div className="lower-left me-3 p-1 w-50" style={{background: "#000000"}}>
                                    <img src="/images/arrival-3.svg" alt="" className='w-100 h-100' />
                                     <div className="arrival-1-contents ps-1 position-absolute bottom-0">
                                    <div className="mb-3">
                                        <p className='playstation'>Speakers</p>
                                    </div>
                                    <div className="mb-3">
                                        <p className='ps5'>Amazon wireless speakers</p>
                                    </div>
                                    <div className="mb-3">
                                        <button className='shopnow'>ShopNow</button>
                                    </div>
                                </div>
                                </div>

                                 <div className="lower-right p-1 w-50" style={{background: "#000000"}}>
                                    <img src="/images/arrival-4.svg" alt="" className='w-100 h-100' />
                                     <div className="arrival-1-contents ps-1 position-absolute bottom-0">
                                    <div className="mb-3">
                                        <p className='playstation'>Perfume</p>
                                    </div>
                                    <div className="mb-3">
                                        <p className='ps5'>GUCCI INTENSE OUD EDP</p>
                                    </div>
                                    <div className="mb-3">
                                        <button className='shopnow'>ShopNow</button>
                                    </div>
                                </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}


