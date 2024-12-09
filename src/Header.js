import React, { useState } from 'react';  // Importing React and useState hook for managing state
import { FaShoppingCart } from 'react-icons/fa';  // Importing the shopping cart icon from react-icons
import './Header.css';  // Importing the CSS file for styling the header
import { useSelector } from 'react-redux';  // Importing useSelector to access the Redux store
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom for navigation

const Header = () => {
    // State to manage the visibility of the mobile menu (hamburger menu)
    const [menuOpen, setMenuOpen] = useState(false);  

    // Accessing cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.items);

    // Function to toggle the menu (open/close)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            {/* Logo section linking to the home page */}
            <div className="logo">
                <a href="/"> <h1>ShoppyGlobe</h1></a>
            </div>

            {/* Navbar with conditional 'active' class applied when the menu is open */}
            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Shop</a></li>
                </ul>
            </nav>

            {/* Hamburger menu icon for mobile view, toggles the menu on click */}
            <div className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Cart icon, linking to the cart page, and showing the number of items in the cart */}
            <div className="cart-icon">
                <Link to="/cart">
                    <FaShoppingCart size={30} color="green" />  {/* Shopping cart icon */}
                    <span className="cart-count">
                        {/* Displaying the number of items in the cart or 0 if it's empty */}
                        {cartItems && cartItems.length === 0 ? 0 : cartItems.length}
                    </span>
                </Link>
            </div>
        </header>
    );
};

export default Header;  // Exporting the Header component to be used in other parts of the app
