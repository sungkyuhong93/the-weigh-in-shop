import React from 'react'
import Layout from "../components/layout"
import { connect } from "react-redux";

const Cart = ({ cartItems }) => {
    console.log(cartItems)
    return (
        <Layout>
            <div>
                <h3>hello from cart</h3>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart
})

export default connect(mapStateToProps)(Cart);