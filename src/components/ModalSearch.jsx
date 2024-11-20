import React, { useState } from 'react';

function ModalSearch({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Lógica para realizar la búsqueda
    alert(`Buscando: ${searchTerm}`);
  };

  return (
    <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
      <div className="container-search-header">
        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search" onClick={onClose}>
          <img src="images/icons/icon-close2.png" alt="CLOSE" />
        </button>
        <form className="wrap-search-header flex-w p-l-15" onSubmit={handleSearchSubmit}>
          <button className="flex-c-m trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>
          <input className="plh3" type="text" name="search" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
        </form>
      </div>
    </div>
  );
}

export default ModalSearch;