import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                  width="100" // Set a suitable width for the image
                  height="100" // Set a suitable height for the image
                />
                <div className="cart-item-details">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              </div>
              <Button onClick={() => onRemoveFromCart(item)}>Remove</Button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
  );
};

export default Cart;