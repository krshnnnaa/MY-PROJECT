import React, { useState } from 'react';

export default function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const clear = () => { setName(''); setPrice(''); };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) { alert('Enter product name'); return; }
    const parsed = Number(price);
    if (isNaN(parsed) || parsed <= 0) { alert('Enter a valid price'); return; }

    onAddProduct({ name: name.trim(), price: parsed });
    clear();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="product-name">Name</label>
        <input id="product-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. MacBook Pro" />
      </div>

      <div className="form-row">
        <label htmlFor="product-price">Price</label>
        <input id="product-price" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 1299" step="0.01" min="0" />
      </div>

      <div className="form-actions">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
}
import React from 'react';

export default function ProductList({ products }) {
  if (!products || products.length === 0) return <p>No products to display.</p>;

  return (
    <div className="product-list">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{Number(p.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}