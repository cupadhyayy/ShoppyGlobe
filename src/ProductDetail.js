import React, { useState, useEffect } from 'react';  // Import React and hooks (useState, useEffect)
import { useParams } from 'react-router-dom';  // Import useParams to get product ID from the URL
import './ProductDetail.css';  // Import the CSS for styling the product details page
import { useDispatch } from 'react-redux';  // Import useDispatch from Redux for dispatching actions
import { addToCart } from './redux/cartSlice';  // Import the action to add items to the cart

const ProductDetail = () => {
  // Get the product ID from the URL using useParams hook
  const { id } = useParams();
  
  // State to hold the product details
  const [product, setProduct] = useState(null);
  
  // Dispatch function to dispatch actions to Redux store
  const dispatch = useDispatch();

  // useEffect hook to fetch product details from the API when the component mounts or when the ID changes
  useEffect(() => {
    // Fetch product details from the API using the product ID from the URL
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())  // Parse the response to JSON
      .then((data) => setProduct(data))  // Set the fetched product data into state
      .catch((error) => console.error('Error fetching product details:', error));  // Log any errors
  }, [id]);  // Re-fetch product details if the ID changes

  // If product data is not yet loaded, show a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  // Handle the add to cart functionality by dispatching the addToCart action with the current product
  const handleAddToCart = () => {
    dispatch(addToCart(product));  // Dispatch the action to add the product to the Redux store (cart)
  };

  return (
    <div className="product-details">
      {/* Product image section */}
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
      </div>

      {/* Product information section */}
      <div className="product-info">
        <h2>{product.title}</h2>  {/* Display product title */}
        <p className="category">Category: {product.category}</p>  {/* Display product category */}
        <p className="description">{product.description}</p>  {/* Display product description */}
        <p className="price"><strong>Price: ${product.price}</strong></p>  {/* Display product price */}
        <p className="stock">Stock: {product.stock}</p>  {/* Display product stock availability */}
        <p className="availability">Availability: {product.availabilityStatus}</p>  {/* Display product availability status */}

        {/* Button to add product to the cart */}
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Reviews section */}
        <div className="reviews">
          <h3>Reviews</h3>
          {/* Check if there are reviews, if not, show "No reviews yet." */}
          {product.reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            // If there are reviews, map over the reviews and display each one
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index} className="review-item">
                  <p><strong>{review.reviewerName}</strong></p>  {/* Reviewer name */}
                  <p>Rating: {review.rating} / 5</p>  {/* Review rating */}
                  <p>{review.comment}</p>  {/* Review comment */}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Additional information */}
        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>  {/* Product warranty info */}
        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>  {/* Product return policy */}
      </div>
    </div>
  );
};

export default ProductDetail;  // Export the component to be used in other parts of the application
