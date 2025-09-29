import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple iPhone 14', price: 799 },
    { id: 2, name: 'Samsung Galaxy S23', price: 699 },
    { id: 3, name: 'Google Pixel 7', price: 599 },
  ]);

  const addProduct = (product) => {
    const nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct = { id: nextId, name: product.name, price: Number(product.price) };
    setProducts(prev => [...prev, newProduct]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Product List Manager</h1>
        <p className="subtitle">Display products and add new products using the form</p>
      </header>

      <main>
        <ProductForm onAddProduct={addProduct} />
        <ProductList products={products} />
      </main>

      <footer>
        <small>Simple demo — built with React (JS)</small>
      </footer>
    </div>
  );
}