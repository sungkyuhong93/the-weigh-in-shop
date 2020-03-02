import React from 'react';
import Img from "gatsby-image"
import { Link } from "gatsby";
import { connect } from "react-redux";
import { addItem, cartToggle } from "../../state/actions"


const Product = ({ product, addItem, cartToggle }) => {


    const addOpenCart = () => {
        addItem(product);
        cartToggle();
    };


    return (
        <div className="product-item">
            <Link to={`/${product.productTitle}`} className="product-img-div">
                <Img fluid={product.image.fluid} />
            </Link>
            <div className="product-price-title">
                <Link to={`/${product.productTitle}`} >{product.productTitle}</Link>
            </div>
            <p className="product-item-price">${product.productPrice}</p>

            <button
                onClick={
                    addOpenCart
                }
                className="pdp-add">
                Add To Cart
          </button>
        </div>
    )
}

export default connect(null, { addItem, cartToggle })(Product);