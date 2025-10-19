// ============================
// React + Redux Toolkit Cart App
// ============================
// Run commands:
// npx create-react-app redux-cart
// cd redux-cart
// npm install @reduxjs/toolkit react-redux
// Replace src files with below code structure.

// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// src/features/products/ProductList.jsx
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '20px' }}>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart 🛒</button>
        </div>
      ))}
    </div>
  );
}

// src/features/cart/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';

export default function Cart() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!items.length) return <p style={{ textAlign: 'center' }}>🛒 Cart is empty</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛍️ Your Cart</h2>
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #ddd' }}>
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            style={{ width: '50px', textAlign: 'center' }}
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}>❌ Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

// src/App.js
import React from 'react';
import ProductList from './features/products/ProductList';
import Cart from './features/cart/Cart';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🚗 RoadWare Product Store</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
