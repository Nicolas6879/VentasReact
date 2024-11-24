import React from 'react';

function ProductItem({ product }) {
  console.log(product); // Verifica los datos del producto
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item">
      <div className="block2">
        <div className="block2-pic hov-img0" style={{ backgroundColor: '#f0f0f0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>{product.imagen}</span>
        </div>
        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
              {product.nombre}
            </a>
            <span className="stext-105 cl3">${product.precio}</span>
          </div>
          <div className="block2-txt-child2 flex-r p-t-3">
            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
              <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
              <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;