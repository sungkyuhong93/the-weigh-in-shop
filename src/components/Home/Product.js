import React from 'react';
import Img from "gatsby-image"
import { Link } from "gatsby";

export default function Product({ product }) {
    return (
        <div className="product-item">
            <div className="product-img-div">
                <Img fluid={product.image.fluid} />
            </div>
            <Link to={`/${product.productTitle}`} className="product-price-title">{product.productTitle}</Link>
            <p className="product-item-price">${product.productPrice}</p>
        </div>
    )
}
