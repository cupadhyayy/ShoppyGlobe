import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';

const ProductDetail = () => {
  // Get productId from URL
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    /// Fetch product details from API using the product ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-details">
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="category">Category: {product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price"><strong>Price: ${product.price}</strong></p>
        <p className="stock">Stock: {product.stock}</p>
        <p className="availability">Availability: {product.availabilityStatus}</p>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <div className="reviews">
          <h3>Reviews</h3>
          {product.reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index} className="review-item">
                  <p><strong>{review.reviewerName}</strong></p>
                  <p>Rating: {review.rating} / 5</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
