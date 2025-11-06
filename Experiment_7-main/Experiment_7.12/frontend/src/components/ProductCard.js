import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', margin: '10px', width: '150px', textAlign: 'center' }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
