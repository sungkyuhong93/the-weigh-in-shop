import React from 'react'
import { connect } from "react-redux";
import { cartToggle } from "../../state/actions"
import CartItem from "./CartItem";
import closeSvg from "../../images/close.svg"
import { Link } from 'gatsby';
import StripeCheckoutButton from "../Stripe/stripe-button"

const Cart = ({ cartItems, cartOpen, cartToggle }) => {
    console.log(cartOpen)

    const reduceItems = (cartItems) => {
        return (
            cartItems.reduce((sum, i) => (
                sum += i.quantity * i.productPrice
            ), 0)
        )
    }

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
                                }) : <h4>Your Cart Is Empty</h4>
                        }
                    </div>

                    <div className="subtotal-div">
                        <h3>Subtotal:</h3>
                        <h3>
                            ${reduceItems(cartItems)}
                        </h3>
                    </div>

                </div>


                <div className="checkout-continue">
                    <StripeCheckoutButton price={reduceItems(cartItems)} />

                    <Link to="/"
                        className="continue"
                    >
                        Continue Shopping
                    </Link>
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