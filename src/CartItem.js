import React from 'react';
import "./Cart.css";
import { Link } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity } from './redux/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };
    // Increase the quantity
    const handleIncrease = () => {
        dispatch(increaseQuantity(item.id));
    };
    // Decrease the quantity
    const handleDecrease = () => {
        dispatch(decreaseQuantity(item.id));
    };
    return (
        <li key={item.id} className="cart-item">
            <div className="item-details">
                <h4 className="item-title">{item.title}</h4>
                <p className="item-price">
                    Price: <strong>${item.price.toFixed(2)}</strong>
                </p>
                <div className="item-quantity">
                    <button
                        onClick={() => handleDecrease(item.id)}
                        className="quantity-button"
                        disabled={item.quantity <= 1}
                    >
                        -
                    </button>
                    <span className="quantity-text">{item.quantity}</span>
                    <button
                        onClick={() => handleIncrease(item.id)}
                        className="quantity-button"
                    >
                        +
                    </button>
                </div>
            </div>
            <button onClick={() => handleRemove(item.id)} className="remove-button">
                Remove
            </button>
            <Link to="/checkout" state={{ product: item }} className="checkout-button">
                Proceed to Checkout
            </Link>
        </li>



    );
};

export default CartItem;
