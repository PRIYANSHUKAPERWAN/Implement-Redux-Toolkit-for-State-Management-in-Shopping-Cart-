import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';

export default function Cart() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!items.length)
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>🛍️ Your cart is empty</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Shopping Cart</h2>
      {items.map(item => (
        <div key={item.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '10px'
        }}>
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <input
            type=\"number\"
            value={item.quantity}
            min=\"1\"
            onChange={e =>
              dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
            }
            style={{ width: '60px', textAlign: 'center' }}
          />
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{
              background: 'red',
              color: '#fff',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            ❌ Remove
          </button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
