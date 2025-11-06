import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>My Shop</h1>
      <h2>Products</h2>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
