import React from 'react'
import { connect } from "react-redux";
import { cartToggle } from "../../state/actions"
import CartItem from "./CartItem";
import closeSvg from "../../images/close.svg"

const Cart = ({ cartItems, cartOpen, cartToggle }) => {
    console.log(cartOpen)
    return (
        <div id="mySidenav" className="sidenav cart" style={cartOpen ? { display: "block" } : { display: "none" }}>
            <div className="cart-inner">
                <div onClick={() => cartToggle()} className="close-cart-btn">
                    <img src={closeSvg} alt="close" />
                </div>

                <div className="cart-items">
                    <h3>Cart</h3>
                    <div className="cart-inner">
                        {
                            cartItems.length ?
                                cartItems.map((item) => {
                                    return (
                                        <CartItem item={item} />
                                    )
                                }) : <p>Your Cart Is Empty</p>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    cartOpen: state.cart.cartToggle
})

export default connect(mapStateToProps, { cartToggle })(Cart);