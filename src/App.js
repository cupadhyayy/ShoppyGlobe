// Importing required CSS and components
import './App.css'; 
import Header from './Header'; 
import { Routes, Route } from "react-router-dom"; 
import React, { Suspense } from 'react';

// Lazy loading components for optimization (only load when needed)
const ProductList = React.lazy(() => import('./ProductList'));
const ProductDetail = React.lazy(() => import('./ProductDetail'));
const Cart = React.lazy(() => import('./Cart'));
const NotFound = React.lazy(() => import('./NotFound'));
const Checkout = React.lazy(() => import('./Checkout'));

function App() {
  return (
    // Suspense is used to show a fallback while the lazy-loaded components are being fetched
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        {/* Render the header of the application */}
        <Header />
        
        {/* Define routes for the application */}
        <Routes>
          {/* Route for the homepage with product list */}
          <Route path="/" element={<ProductList />} />
          
          {/* Route for viewing a specific product details */}
          <Route path="/product/:id" element={<ProductDetail />} />
          
          {/* Route for viewing the cart */}
          <Route path="/cart" element={<Cart />} />
          
          {/* Route for the checkout page */}
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Fallback route for non-existent pages (404 Not Found) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

// Exporting the App component to be used elsewhere in the application
export default App;
