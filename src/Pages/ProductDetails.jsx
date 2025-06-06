import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

    let [product, setProduct] = useState([])
    let { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log(error))
    }, [id])

    return (
        <>
            <div className="productDetails-container">
                <p><b>Product Title :</b> {product.title}</p>
                <p><b>Product Price :</b> {product.price}</p>
                <p><b>Product Description : </b>{product.description}</p>
                <img src={product.image} alt="" height={200} />
                <p> <b>Product Rating :</b> {product.rating?.rate}</p>
            </div>
        </>
    )
}
