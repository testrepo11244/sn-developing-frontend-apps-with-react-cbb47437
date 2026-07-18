import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/cartSlice';
import './CartItem.css';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrease = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item) dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    } else if (item && item.quantity === 1) {
      dispatch(removeItem(id));
    }
  };

  const handleDelete = (id) => dispatch(removeItem(id));

  return (
    <div className="cart-page">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/products">Plants</a>
        <a href="/cart" className="active">Cart ({cartItems.length})</a>
      </nav>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} className="item-thumbnail" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Unit price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <div className="cart-actions">
              <button className="checkout-btn" onClick={() => alert('Coming Soon')}>Checkout</button>
              <a href="/products" className="continue-shopping">Continue Shopping</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;