import React from 'react' 

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <ul className="nav-list">
                <Link to="/">
                    <li className="nav-list-item">Home</li>
                </Link>
                <Link to="/about">
                    <li className="nav-list-item">About</li>
                </Link>
                <Link to="/shop">
                    <li className="nav-list-item">Shop</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar