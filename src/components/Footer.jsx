import React from 'react';

function Footer() {
  return (
    <footer className="bg3 p-t-75 p-b-32">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Categorias</h4>
            <ul>
              <li className="p-b-10"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Femenino</a></li>
              <li className="p-b-10"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Maculino</a></li>
              <li className="p-b-10"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Zapatos</a></li>
              <li className="p-b-10"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Accesorios</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Ayuda</h4>
            <ul>
              <li className="p-b-10"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Seguir Orden</a></li>
              <li className="p-b-10"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Devoluciones</a></li>
              <li className="p-b-10"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">Envios</a></li>
              <li className="p-b-10"><a href="#" className="stext-107 cl7 hov-cl1 trans-04">FAQs</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Ponte en contacto</h4>
            <p className="stext-107 cl7 size-201">
              Preguntas? Haganos saber en la cra 27 calle 9 Universidad Industrial de Santander, Edificio Ingenieria de Sistemas
            </p>
            <div className="p-t-27">
              <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16"><i className="fa fa-facebook"></i></a>
              <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16"><i className="fa fa-instagram"></i></a>
              <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16"><i className="fa fa-pinterest-p"></i></a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>
            <form>
              <div className="wrap-input1 w-full p-b-4">
                <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com" />
                <div className="focus-input1 trans-04"></div>
              </div>
              <div className="p-t-18">
                <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">Suscribirme</button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-t-40">
          <div className="flex-c-m flex-w p-b-18">
            <a href="https://www.paypal.com/co/home" className="m-all-1"><img src="images/icons/icon-pay-01.png" alt="ICON-PAY" /></a>
            <a href="https://www.visa.com.co/" className="m-all-1"><img src="images/icons/icon-pay-02.png" alt="ICON-PAY" /></a>
            <a href="https://www.mastercard.com.co/es-co.html" className="m-all-1"><img src="images/icons/icon-pay-03.png" alt="ICON-PAY" /></a>
            <a href="https://www.americanexpress.com/es-co/network/" className="m-all-1"><img src="images/icons/icon-pay-04.png" alt="ICON-PAY" /></a>
            <a href="https://uis.edu.co/es/" className="m-all-1"><img src="images/icons/icon-pay-06.png" alt="ICON-PAY" /></a>
          </div>
          <p className="stext-107 cl6 txt-center">
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;