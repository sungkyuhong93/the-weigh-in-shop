import React from 'react';
import Img from "gatsby-image"
import { Link } from "gatsby";
import { connect } from "react-redux";
import { addItem } from "../../state/actions"


const Product = ({ product, addItem }) => {
    return (
        <div className="product-item">
            <div className="product-img-div">
                <Img fluid={product.image.fluid} />
            </div>
            <div className="product-price-title">
                <Link to={`/${product.productTitle}`} >{product.productTitle}</Link>
            </div>
            <p className="product-item-price">${product.productPrice}</p>

            <button
                onClick={
                    () => addItem(product)
                }
                className="pdp-add">
                Add To Cart
          </button>
        </div>
    )
}

export default connect(null, { addItem })(Product);