import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icons/logo-01.png';

function Header({ onSearchClick }) {
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
                <li className="active-menu">
                  <Link to="/">Home</Link>
                  <ul className="sub-menu">
                    <li><Link to="/">inicio</Link></li>
                    <li><Link to="/home-02">inicio 2</Link></li>
                    <li><Link to="/home-03">inicio 3</Link></li>
                  </ul>
                </li>
                <li><Link to="/product">Tienda</Link></li>
                <li className="label1" data-label1="hot"><Link to="/cart">Carrito</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">Nosotros</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
              </ul>
            </div>
            <div className="wrap-icon-header flex-w flex-r-m">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search" onClick={onSearchClick}>
                <i className="zmdi zmdi-search"></i>
              </div>
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                <i className="zmdi zmdi-shopping-cart"></i>
              </div>
              <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                <i className="zmdi zmdi-favorite-outline"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;