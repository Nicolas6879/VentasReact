import React from 'react';
import Slider from '../components/Slider'; // Ruta correcta
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div>
      <Slider />
      <ProductList />
    </div>
  );
}

export default Home;