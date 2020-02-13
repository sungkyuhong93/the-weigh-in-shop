import React, { Component } from "react";
import { Link } from "gatsby";


export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'Home'
            },
            {
                id: 2,
                path: '/about',
                text: 'about'
            },
            {
                id: 3,
                path: '/blog',
                text: 'blog'
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
                    <ul className="navbar-nav mx-auto">
                        {
                            this.state.links.map((link) => {
                                return (
                                    <li key={link.id} className="nav-item">
                                        <Link to={link.path} className="nav-link text-capitalize">
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item ml-sm-5"><Link className="nav-link text-capitalize">Cart</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}