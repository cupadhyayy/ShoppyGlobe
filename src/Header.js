import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <header className="header">
            <div className="logo">
                <a href="/" > <h1>ShoppyGlobe</h1></a>
               
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Shop</a></li>
                </ul>
            </nav>
            <div className="cart-icon">
                <Link to="/cart">
                    <FaShoppingCart size={30} color='green' />
                    <span className="cart-count">{cartItems && cartItems.length === 0 ? 0 : cartItems.length}
                    </span>
                </Link>

            </div>
        </header>
    );
};

export default Header;
