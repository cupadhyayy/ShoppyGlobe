import React, { useState, useEffect } from "react";
import './ProductList.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from './redux/cartSlice';
const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    return (
        <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}
                className="view-details-button">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                />
                <div className="product-info">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-description">{product.description}</p>
                    <div className="product-details">
                        <p className="product-price">Price: ${product.price}</p>
                        <p className="product-rating">Rating: {product.rating} ⭐</p>
                        <p className="product-stock">Stock: {product.stock}</p>
                        <p className="product-availability">Availability: {product.availabilityStatus}</p>
                        <p className="product-warranty">Warranty: {product.warrantyInformation}</p>
                    </div>
                    <div className="reviews-section">
                        <h3 className="reviews-title">Reviews:</h3>
                        <ul className="reviews-list">
                            {product.reviews.map((review, index) => (
                                <li key={index} className="review-item">
                                    <p className="review-rating">Rating: {review.rating} ⭐</p>
                                    <p className="review-comment">{review.comment}</p>
                                    <p className="reviewer-name">Reviewed by: {review.reviewerName}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Link>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
                Add to Cart
            </button>

        </div>
    );
};

export default ProductItem;
