import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const handleCartClick = () => {
    // Lógica para el clic en el icono del carrito
    console.log('Cart icon clicked');
  };

  return (
    <Router>
      <Header onCartClick={handleCartClick} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    
      <Footer />
    </Router>
  );
}

export default App;