import React, { useEffect, useState } from 'react';
import { getCarritos } from '../api/carritoApi';
import ProductItem from '../components/ProductItem';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCarritos().then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Descripcion de productos</h3>
        </div>
        <div className="row isotope-grid">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;