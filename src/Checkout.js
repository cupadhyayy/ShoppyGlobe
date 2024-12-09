import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import hooks for location and navigation
import { useDispatch } from "react-redux"; // Import useDispatch to dispatch actions to Redux
import { removeFromCart } from "./redux/cartSlice"; // Import the action to remove an item from the cart
import "./Checkout.css"; // Import the styles for the Checkout component

const Checkout = () => {
  const location = useLocation(); // Get the current location from React Router (to retrieve passed state)
  const navigate = useNavigate(); // Hook for navigating to different routes programmatically
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

  // Retrieve the product passed through the Link's state (from CartItem)
  const product = location.state?.product;

  // If no product is passed, display a message and allow the user to go back to the cart
  if (!product) {
    return (
      <div className="checkout-container">
        <h1>Checkout</h1>
        <p>No product selected for checkout.</p>
        <button onClick={() => navigate("/cart")} className="back-to-cart-button">
          Back to Cart
        </button>
      </div>
    );
  }

  // Function to handle placing the order
  const handlePlaceOrder = (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Dispatch the removeFromCart action to remove the product from the cart after the order is placed
    dispatch(removeFromCart(product.id));

    // Alert the user that the order has been placed
    alert(`Order placed for ${product.title}!`);

    // Navigate the user back to the homepage or a success page after the order
    navigate("/"); 
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-item">
        {/* Display product information */}
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
      </div>

      {/* Checkout form for collecting billing information */}
      <form onSubmit={handlePlaceOrder} className="checkout-form">
        <h2>Billing Details</h2>
        <div>
          <label>Full Name:</label>
          <input type="text" name="name" required placeholder="Enter your name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required placeholder="Enter your email" />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" required placeholder="Enter your address" />
        </div>
        <div>
          <label>Payment Method:</label>
          <select name="paymentMethod" required>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>
        <button type="submit" className="place-order-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
