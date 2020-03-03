import React, { Component } from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";
import { cartToggle } from "../../state/actions"

class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/about',
                text: 'about'
            }
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen ?
            this.setState({ navbarOpen: false, css: 'collapse navbar-collapse' })
            : this.setState({
                navbarOpen: true,
                css: 'collapse navbar-collapse show'
            })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link to="/" className="navbar-brand">The Weigh In</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="https://the-weigh-in.netlify.com/" className="nav-link">
                                Blog
                            </a>
                        </li>
                        {
                            this.state.links.map((link) => {
                                return (
                                    <li key={link.id} className="nav-item">
                                        <Link to={link.path} className="nav-link">
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <a onClick={() => this.props.cartToggle()} href="#" className="nav-link text-capitalize cart-link">Cart</a>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})


export default connect(mapStateToProps, { cartToggle })(Navbar)