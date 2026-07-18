import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductList.css';

const categories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15.99, thumbnail: "https://example.com/snake-plant.jpg" },
      { id: 2, name: "Spider Plant", price: 12.99, thumbnail: "https://example.com/spiderplant.jpg" },
      { id: 3, name: "Peace Lily", price: 18.50, thumbnail: "https://example.com/peacelily.jpg" },
      { id: 4, name: "Aloe Vera", price: 14.00, thumbnail: "https://example.com/aloevera.jpg" },
      { id: 5, name: "Bamboo Palm", price: 22.00, thumbnail: "https://example.com/bamboopalm.jpg" },
      { id: 6, name: "Boston Fern", price: 19.99, thumbnail: "https://example.com/bostonfern.jpg" }
    ]
  },
  {
    name: "Flowering Plants",
    plants: [
      { id: 7, name: "African Violet", price: 10.50, thumbnail: "https://example.com/africanviolet.jpg" },
      { id: 8, name: "Orchid", price: 25.00, thumbnail: "https://example.com/orchid.jpg" },
      { id: 9, name: "Anthurium", price: 20.00, thumbnail: "https://example.com/anthurium.jpg" },
      { id: 10, name: "Bromeliad", price: 17.75, thumbnail: "https://example.com/bromeliad.jpg" },
      { id: 11, name: "Christmas Cactus", price: 13.99, thumbnail: "https://example.com/christmascactus.jpg" },
      { id: 12, name: "Kalanchoe", price: 9.99, thumbnail: "https://example.com/kalanchoe.jpg" }
    ]
  },
  {
    name: "Succulents & Cacti",
    plants: [
      { id: 13, name: "Echeveria", price: 8.50, thumbnail: "https://example.com/echeveria.jpg" },
      { id: 14, name: "Jade Plant", price: 11.00, thumbnail: "https://example.com/jadeplant.jpg" },
      { id: 15, name: "Haworthia", price: 7.99, thumbnail: "https://example.com/haworthia.jpg" },
      { id: 16, name: "Golden Barrel Cactus", price: 16.00, thumbnail: "https://example.com/goldenbarrel.jpg" },
      { id: 17, name: "Aloe Vera", price: 14.00, thumbnail: "https://example.com/aloevera2.jpg" },
      { id: 18, name: "Sedum", price: 6.50, thumbnail: "https://example.com/sedum.jpg" }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="product-list-container">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/products" className="active">Plants</a>
        <a href="/cart">Cart ({cartItems.length})</a>
      </nav>
      <h1>Our Plants</h1>
      {categories.map(category => (
        <section key={category.name} className="category">
          <h2>{category.name}</h2>
          <div className="plants-grid">
            {category.plants.map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.thumbnail} alt={plant.name} className="plant-thumbnail" />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price.toFixed(2)}</p>
                <button
                  onClick={() => dispatch(addToCart({...plant, quantity: 1}))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;