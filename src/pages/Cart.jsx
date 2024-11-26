import React, { useEffect, useState } from 'react';
import { getItemsByCarritoId } from '../api/itemApi';

function Cart() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItemsByCarritoId(1).then(response => {
      setItems(response.data);
    }).catch(error => {
      console.error('Error fetching items:', error);
      setError('Error fetching items');
    });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (items.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <h1>Carrito</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.producto.nombre} - {item.unidades} x ${item.producto.precio}
          </li>
        ))}
      </ul>
      <div>
        Total: ${items.reduce((total, item) => total + item.producto.precio * item.unidades, 0)}
      </div>
    </div>
  );
}

export default Cart;