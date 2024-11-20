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
    <div className="wrap-header-cart js-panel-cart">
      <div className="s-full js-hide-cart"></div>
      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">Tu carrito</span>
          <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
            <i className="zmdi zmdi-close"></i>
          </div>
        </div>
        <div className="header-cart-content flex-w js-pscroll">
          <ul className="header-cart-wrapitem w-full">
            {carritos.map(carrito => (
              <li key={carrito.id} className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src={`images/${carrito.image}`} alt="IMG" />
                </div>
                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    {carrito.name}
                  </a>
                  <span className="header-cart-item-info">
                    {carrito.quantity} x ${carrito.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <div className="header-cart-total w-full p-tb-40">
              Total: ${carritos.reduce((total, carrito) => total + carrito.price * carrito.quantity, 0)}
            </div>
            <div className="header-cart-buttons flex-w w-full">
              <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                Ver carrito
              </a>
              <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                Al pago
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;