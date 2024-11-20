import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { getCarritos } from '../api/carritoApi';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCarritos().then(response => {
      setProducts(response.data);
    });
  }, []); // Asegúrate de que el array de dependencias esté vacío si solo quieres que se ejecute una vez

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

export default ProductList;