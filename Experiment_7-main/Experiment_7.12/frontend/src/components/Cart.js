import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            {item.name} (${item.price}){' '}
            <input
              type="number"
              value={item.quantity}
              min="1"
              style={{ width: '40px', marginRight: '10px' }}
              onChange={e =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
