import React, { useEffect, useState } from 'react';
import { getCarritos } from '../api/carritoApi';

function Cart() {
  const [carritos, setCarritos] = useState([]);

  useEffect(() => {
    getCarritos().then(response => {
      setCarritos(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Carrito</h1>
      <ul>
        {carritos.map(carrito => (
          <li key={carrito.id}>
            {carrito.name} - {carrito.quantity} x ${carrito.price}
          </li>
        ))}
      </ul>
      <div>
        Total: ${carritos.reduce((total, carrito) => total + carrito.price * carrito.quantity, 0)}
      </div>
    </div>
  );
}

export default Cart;