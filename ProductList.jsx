import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';

const products = [
  { id: 1, name: 'RoadWare Car Perfume', price: 399 },
  { id: 2, name: 'RoadWare Seat Cover', price: 1299 },
  { id: 3, name: 'RoadWare Dashboard Polish', price: 499 },
];

export default function ProductList() {
  const dispatch = useDispatch();
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      padding: '20px'
    }}>
      {products.map(p => (
        <div key={p.id} style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '15px',
          textAlign: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <h3>{p.name}</h3>
          <p>💰 ₹{p.price}</p>
          <button
            onClick={() => dispatch(addToCart(p))}
            style={{
              background: '#007bff',
              color: '#fff',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add to Cart 🛒
          </button>
        </div>
      ))}
    </div>
  );
}
