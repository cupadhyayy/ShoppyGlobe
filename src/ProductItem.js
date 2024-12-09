// Importing necessary modules from React and other libraries
import React, { useState, useEffect } from "react";
import './ProductList.css'; // Importing the CSS file for styling
import { Link } from "react-router-dom"; // Importing Link component for navigation
import { useDispatch } from "react-redux"; // Importing useDispatch hook to dispatch actions in Redux
import { addToCart } from './redux/cartSlice'; // Importing the addToCart action from Redux slice

// ProductItem component accepts a product prop
const ProductItem = ({ product }) => {
    // Using the dispatch hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Handler function for adding the product to the cart
    const handleAddToCart = () => {
        dispatch(addToCart(product)); // Dispatches the addToCart action with the current product as payload
    };

    return (
        // Main product card wrapper, using the product id as the key for optimization
        <div key={product.id} className="product-card">
            
            {/* Link component to navigate to product details page using the product id */}
            <Link to={`/product/${product.id}`} className="view-details-button">
                <img
                    src={product.thumbnail} // Displaying product image thumbnail
                    alt={product.title} // Alt text for image, which is the product title
                    className="product-image" // Styling for the product image
                />
                <div className="product-info">
                    {/* Displaying the product title */}
                    <h2 className="product-title">{product.title}</h2>
                    {/* Displaying the product description */}
                    <p className="product-description">{product.description}</p>
                    <div className="product-details">
                        {/* Displaying product price */}
                        <p className="product-price">Price: ${product.price}</p>
                        {/* Displaying product rating */}
                        <p className="product-rating">Rating: {product.rating} ⭐</p>
                        {/* Displaying the available stock */}
                        <p className="product-stock">Stock: {product.stock}</p>
                        {/* Displaying product availability status */}
                        <p className="product-availability">Availability: {product.availabilityStatus}</p>
                        {/* Displaying warranty information */}
                        <p className="product-warranty">Warranty: {product.warrantyInformation}</p>
                    </div>

                    {/* Reviews section */}
                    <div className="reviews-section">
                        <h3 className="reviews-title">Reviews:</h3>
                        <ul className="reviews-list">
                            {/* Mapping through the reviews array to display each review */}
                            {product.reviews.map((review, index) => (
                                <li key={index} className="review-item">
                                    {/* Displaying individual review rating */}
                                    <p className="review-rating">Rating: {review.rating} ⭐</p>
                                    {/* Displaying the comment of the review */}
                                    <p className="review-comment">{review.comment}</p>
                                    {/* Displaying the name of the reviewer */}
                                    <p className="reviewer-name">Reviewed by: {review.reviewerName}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Link>
            
            {/* Button to add product to the cart */}
            <button className="add-to-cart-button" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem; // Exporting the component for use in other parts of the app
