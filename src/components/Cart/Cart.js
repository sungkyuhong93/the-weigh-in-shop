import React from 'react'
import { connect } from "react-redux";
import CartItem from "./CartItem";
import closeSvg from "../../images/close.svg" 

const Cart = ({ cartItems }) => {
    console.log(cartItems)
    return (
        <div id="mySidenav" className="sidenav cart">
           <div className="cart-inner">
           <div className="close-cart-btn">
                 <img src={closeSvg} alt="close" />
            </div>

              <div className="cart-items">
                <h3>Cart</h3>
                <div className="cart-inner">
                {
                    cartItems.map((item) => {
                        return (
                            <CartItem item={item} />
                        )
                    })
                }
                </div>
              </div>
           </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(Cart);