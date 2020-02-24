import React from "react";
import { Link } from "gatsby";

export default function Foooter() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-list">
                    <ul className="footer-ul">
                        <li><Link>SHOP</Link></li>
                        <li><Link>ABOUT US</Link></li>
                        <li><Link>BLOG</Link></li>
                    </ul>
                </div>

                <p className="large">all rights reserved &copy; {new Date().getFullYear().toString()}</p>
            </div>
        </footer>
    )
}