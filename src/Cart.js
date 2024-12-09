import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import hooks to interact with the Redux store
import { clearCart } from './redux/cartSlice'; // Import the action to clear the cart
import "./Cart.css"; // Import the styles for the Cart component
import CartItem from './CartItem'; // Import the CartItem component to render individual items

const Cart = () => {
    // Use useSelector to get the cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.items);

    // Use useDispatch to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Function to handle clearing the cart
    const handleClearCart = () => {
        dispatch(clearCart()); // Dispatch the clearCart action to empty the cart
    };

    return (
        <div className="cart">
            <h2 className="cart-title">Your Cart</h2>

            {/* Check if the cart is empty or has items */}
            {cartItems.length === 0 ? (
                // If the cart is empty, display this message
                <p className="empty-cart">Your cart is empty. Start shopping now!</p>
            ) : (
                // If the cart has items, map through them and render each CartItem component
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        // Pass each item to the CartItem component
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            )}

            {/* Display the clear cart button only if there are items in the cart */}
            {cartItems.length > 0 && (
                <button
                    onClick={handleClearCart} // Handle the clear cart action when clicked
                    className="clear-cart-button">
                    Clear Cart
                </button>
            )}
        </div>
    );
};

export default Cart;
