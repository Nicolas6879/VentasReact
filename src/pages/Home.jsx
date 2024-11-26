import React from 'react';
import Slider from '../components/Slider'; // Ruta correcta
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';


function Home() {
  return (
    <div>
      <Slider />
      <ProductList />
      <Cart />
    </div>
  );
}

export default Home;