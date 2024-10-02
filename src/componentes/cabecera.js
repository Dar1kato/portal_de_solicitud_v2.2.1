import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


function Cabecera({ abrirCarrito }) {
  return (
    <header className = "navbar">
      <div className="titulo">
        <img src="/iberoPueblaImg.png" alt="Ibero Puebla" />
        <div>
          <a class="buttonNav" href="../index.html">Home</a>
        </div>
        <div>
          <a class="buttonNav" href="src\materiales.js">Materials</a>
        </div>
        <div>
          <a class="buttonNav" href="../index.html">Doubts</a>
        </div>
      </div>
      <div>

        <button className="logos" onClick={abrirCarrito}>
          <img className="logoCarrito" src="bag.png" alt="Carrito" />
        </button>

        <button className='logos'>
          <img className="logout" src="logout.png" alt ="Salir" />
        </button>

        <button className='logos'>
          <img className="user" src="user.png" alt ="Usuario" />
        </button>

      </div>
    </header>
  );
}

export default Cabecera;
