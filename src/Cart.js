import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './redux/cartSlice';
import "./Cart.css";
import CartItem from './CartItem';
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();


    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart">
            <h2 className="cart-title">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty. Start shopping now!</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <CartItem item={item}/>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <button
                    onClick={handleClearCart}
                    className="clear-cart-button">
                    Clear Cart
                </button>
            )}
        </div>

    );
};

export default Cart;
