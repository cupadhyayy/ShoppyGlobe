import React from 'react';
import "./Cart.css"; // Import the styles for the CartItem component
import { Link } from 'react-router-dom'; // Import Link to allow navigation to the checkout page
import { removeFromCart, increaseQuantity, decreaseQuantity } from './redux/cartSlice'; // Import actions for cart management
import { useDispatch } from 'react-redux'; // Import the useDispatch hook to dispatch actions to the store

const CartItem = ({ item }) => {
    const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

    // Function to handle removing an item from the cart
    const handleRemove = (id) => {
        dispatch(removeFromCart(id)); // Dispatch the removeFromCart action with the product id
    };

    // Function to handle increasing the quantity of an item in the cart
    const handleIncrease = () => {
        dispatch(increaseQuantity(item.id)); // Dispatch the increaseQuantity action with the product id
    };

    // Function to handle decreasing the quantity of an item in the cart
    const handleDecrease = () => {
        dispatch(decreaseQuantity(item.id)); // Dispatch the decreaseQuantity action with the product id
    };

    return (
        <li key={item.id} className="cart-item">
            <div className="item-details">
                {/* Display the product title */}
                <h4 className="item-title">{item.title}</h4>
                {/* Display the product price */}
                <p className="item-price">
                    Price: <strong>${item.price.toFixed(2)}</strong>
                </p>
                <div className="item-quantity">
                    {/* Button to decrease quantity; disabled if quantity is 1 */}
                    <button
                        onClick={() => handleDecrease(item.id)}
                        className="quantity-button"
                        disabled={item.quantity <= 1} // Disable if quantity is 1
                    >
                        -
                    </button>
                    {/* Display the current quantity of the item */}
                    <span className="quantity-text">{item.quantity}</span>
                    {/* Button to increase quantity */}
                    <button
                        onClick={() => handleIncrease(item.id)}
                        className="quantity-button"
                    >
                        +
                    </button>
                </div>
            </div>
            {/* Button to remove the item from the cart */}
            <button onClick={() => handleRemove(item.id)} className="remove-button">
                Remove
            </button>
            {/* Link to the checkout page, passing the item as state */}
            <Link to="/checkout" state={{ product: item }} className="checkout-button">
                Proceed to Checkout
            </Link>
        </li>
    );
};

export default CartItem;
