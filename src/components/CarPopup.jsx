import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItemsByCarritoId } from '../api/itemApi';
import '../assets/css/CartPopup.css'; // Importa el archivo CSS para los estilos del popup

function CarPopup() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getItemsByCarritoId(1).then(response => {
      setItems(response.data);
    }).catch(error => {
      console.error('Error fetching items:', error);
      setError('Error fetching items');
    });
  }, []);

  const handleViewCart = (event) => {
    event.stopPropagation(); // Evita que otros eventos interfieran
    navigate('/cart');
  };

  if (error) {
    return <div className="cart-popup">{error}</div>;
  }

  if (items.length === 0) {
    return <div className="cart-popup">Cargando...</div>;
  }

  return (
    <div className="cart-popup">
      <h4 className="cart-popup-title">Tu carrito</h4>
      <ul className="cart-popup-list">
        {items.map(item => (
          <li key={item.id} className="cart-popup-item">
            <img src={`/images/${item.producto.imagen}`} alt={item.producto.nombre} className="cart-popup-item-image" />
            <div className="cart-popup-item-details">
              <span className="cart-popup-item-name">{item.producto.nombre}</span>
              <span className="cart-popup-item-quantity">{item.unidades} x ${item.producto.precio}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-popup-total">
        Total: ${items.reduce((total, item) => total + item.producto.precio * item.unidades, 0)}
      </div>
      <button onClick={handleViewCart}>Ver Carrito</button>
    </div>
  );
}

export default CarPopup;