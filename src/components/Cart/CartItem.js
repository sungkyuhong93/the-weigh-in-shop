import React from "react";
import Img from "gatsby-image";
import { connect } from "react-redux";
import { removeItem, addItem, minusItem } from "../../state/actions"

const CartItem = ({ item, removeItem, addItem, minusItem }) => {
    return (
        <div className="cart-item">
            <div className="cart-item-inner">
                <div className="cart-item-col">
                    <div className="cart-item-img-div">
                        <Img fluid={item.image.fluid} />
                    </div>
                    <h5>
                        {item.productTitle}
                    </h5>
                    <p>
                        ${item.productPrice}
                    </p>
                    <a href="#" onClick={() => removeItem(item)}>Remove Item</a>
                </div>

                <div className="cart-item-col">
                    <div className="input-group">
                        <input onClick={() => minusItem(item)} type="button" value="-" className="button-minus" data-field="quantity" />
                        <input type="number" step="1" max="" value={item.quantity} name="quantity" className="quantity-field" />
                        <input onClick={() => addItem(item)} type="button" value="+" class="button-plus" data-field="quantity" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(null, { removeItem, addItem, minusItem })(CartItem)