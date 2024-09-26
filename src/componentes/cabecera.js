import React from 'react';

function Cabecera({ abrirCarrito }) {
  return (
    <header>
      <div className="titulo">
        <img src="/iberoPueblaImg.png" alt="Ibero Puebla" />
        <h1>Portal de Solicitud de Insumos</h1>
      </div>
      <button className="abrirCarrito" onClick={abrirCarrito}>
        <img className="logoCarrito" src="bag.png" alt="Carrito" />
      </button>
    </header>
  );
}

export default Cabecera;
