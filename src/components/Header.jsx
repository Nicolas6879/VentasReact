import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icons/logo-01.png';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'; // Importa los estilos de los iconos
import CartPopup from './CarPopup'; // Ajusta la ruta según la ubicación correcta
import '../assets/css/Header.css'; // Importa el archivo CSS para los estilos del header
function Header({ onSearchClick, onCartClick }) {
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);
  const timerRef = useRef(null);

  const handleCartMouseEnter = () => {
    clearTimeout(timerRef.current);
    setIsCartPopupVisible(true);
  };

  const handleCartMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsCartPopupVisible(false);
    }, 2000); // 2 segundos
  };

  return (
    <header>
      <div className="container-menu-desktop">
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Envio Gratis!!! por compras superiores a $250.000 o ubicarse en Bucaramanga
            </div>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">Ayuda & FAQs</a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">Mi cuenta</a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">ES</a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">COP</a>
            </div>
          </div>
        </div>
        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            <a href="#" className="logo">
              <img src={logo} alt="IMG-LOGO" />
            </a>
            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu"><Link to="/">Home</Link></li>
                <li className="label1" data-label1="hot"><Link to="/product">Tienda</Link></li>
                <li><Link to="/cart">Carrito</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
              </ul>
            </div>
            <div className="wrap-icon-header flex-w flex-r-m">
              <div 
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" 
                data-notify="2" 
                onMouseEnter={handleCartMouseEnter} 
                onMouseLeave={handleCartMouseLeave}
              >
                <i className="zmdi zmdi-shopping-cart"></i>
                {isCartPopupVisible && (
                  <div onMouseEnter={handleCartMouseEnter} onMouseLeave={handleCartMouseLeave}>
                    <CartPopup />
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;