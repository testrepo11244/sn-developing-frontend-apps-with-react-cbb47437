import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const handleGetStartedClick = () => setShowProducts(true);

  return (
    <div className="App">
      {!showProducts ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Your source for beautiful houseplants</p>
          <button onClick={handleGetStartedClick}>Get Started</button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;