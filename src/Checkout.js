import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./redux/cartSlice";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
   // getting the product data passed through Link
  const product = location.state?.product;

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

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    
    dispatch(removeFromCart(product.id));
    alert(`Order placed for ${product.title}!`);
    navigate("/"); 
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-item">
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
      </div>

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
