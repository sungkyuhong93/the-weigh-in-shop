import React from "react";
import Img from "gatsby-image";

const CartItem = ({item}) => {
    return (
        <div className="cart-item">
            <div className="cart-item-inner">
                <div class="cart-item-col">
                    <div className="cart-item-img-div">
                        <Img fluid={item.image.fluid} />
                    </div>
                    <h5>
                        {item.productTitle}
                    </h5>
                    <p>
                        ${item.productPrice}
                    </p>
                    <a href="#">Remove Item</a>
                </div>

                <div class="cart-item-col">
                    <div class="input-group">
                        <input type="button" value="-" class="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field" />
                        <input type="button" value="+" class="button-plus" data-field="quantity" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;