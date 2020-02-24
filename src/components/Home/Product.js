import React from 'react';
import Img from "gatsby-image"
import { Link } from "gatsby";

export default function Product({ product }) {
    return (
        <div className="product-item">
            <div className="product-img-div">
                <Img fluid={product.image.fluid} />
            </div>
            <div className="product-price-title">
                <Link to={`/${product.productTitle}`} >{product.productTitle}</Link>
            </div>
            <p className="product-item-price">${product.productPrice}</p>
        </div>
    )
}
