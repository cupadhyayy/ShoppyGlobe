
import './App.css';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';

const ProductList = React.lazy(() => import('./ProductList'));
const ProductDetail = React.lazy(() => import('./ProductDetail'));
const Cart = React.lazy(() => import('./Cart'));
const NotFound = React.lazy(() => import('./NotFound'));
const Checkout = React.lazy(() => import('./Checkout'));

function App() {
  return (
    // Lazy load with suspense
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </Suspense>
  );
}

export default App;
