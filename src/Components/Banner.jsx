import React from 'react'
import "../App.css"

export default function Banner() {
    return (
        <>
            <div className="container-fluid banner-container" style={{ padding: "10px 25px 0", backgroundColor: "#000000" }}>
                <div className="row">
                    <div className="col-lg-9 col-sm-6 col-6 text-center">
                        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            <span className='ps-2'>ShopNow</span></p>
                    </div>
                    <div className="col-lg-3 image-container d-flex justify-content-center col-sm-6 col-6" style={{ maxWidth: "352px" }}>
                        <select name="language" id="language">
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
