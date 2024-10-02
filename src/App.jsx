import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Toaster } from "sonner";
import Bolsa from "./componentes/bolsa";
import Cabecera from "./componentes/cabecera";
import Materials from './pages/materiales'; 
import Doubts from './pages/dudas'; 

function App() {
  const [bag, setBag] = useState([]);
  const [carritoWidth, setCarritoWidth] = useState('300');

  function abrirCarrito() {
    setCarritoWidth('300px');
  }

  function cerrarCarrito() {
    setCarritoWidth('0');
  }

  function eliminarDeCarrito(index) {
    setBag(bag.filter((_, i) => i !== index));
  }

  function continuarPedido() {
    alert("El Dev aún no implementa esta función :(");
  }

  return (
    <Router>
      <Toaster position="bottom-right" />
      <Cabecera abrirCarrito={abrirCarrito} />

      <Bolsa bag={bag} cerrarCarrito={cerrarCarrito} carritoWidth={carritoWidth} eliminarDeCarrito={eliminarDeCarrito} continuarPedido={continuarPedido} />
      <Routes>
  
        <Route path="/" element={<div>Bienvenido al portal de insumos</div>} />
        
        <Route path="/materials" element={<Materials bag={bag} setBag={setBag} />} />
        <Route path="/doubts" element={<Doubts bag={bag} setBag={setBag} />} />
      </Routes>
    </Router>
  );
}

export default App;
