/**
 * Universidad Iberoamericana de Puebla
 * Ing. en Sistemas Computacionales
 * 
 * Portal de Solicitud de Insumos - Bosquejo de buscador y "carrito"
 */

//* [Declaración de librerias]
import React, { useMemo, useState } from "react";
import './App.css';
import datos from './datos.json'
import { Toaster, toast } from "sonner"; 
import Bolsa from "./componentes/bolsa";
import Cabecera from "./componentes/cabecera";
import ListDisplay from "./componentes/display";
import Dropdown from "./componentes/dropdown";
import Pagination from "./componentes/paginations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Materials from './pages/materiales';

function App() {
  const [Items, setItems] = useState(Object.values(datos));
  const [query, setQuery] = useState("");
  const [bag, setBag] = useState([]);
  const [carritoWidth, setCarritoWidth] = useState('300');
  const [selectedValue, setSelectedValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPAge] = useState(16);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const filtro = useMemo(() => {
    return Items.filter((item) => {
      return (
        item.nombre.toLowerCase().includes(query.toLowerCase()) &&
        (selectedValue === "" || item.categoria === selectedValue)
      );
    }, [Items, query, selectedValue]);
  }, [Items, query, selectedValue]);

  const currentPost = filtro.slice(firstPostIndex, lastPostIndex);

  function agregarPedido(e, item) {
    e.preventDefault();
    toast.success(`${item.nombre} agregado al pedido.`, {duration: 2000});
    setBag(prev => [...prev, item.nombre]);
  }

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
    <>
      <Toaster position="bottom-right"/>
      <Cabecera abrirCarrito={abrirCarrito} />
      <div className="buscador">
        <form className="buscar_texto" type="search">
          <input placeholder="Buscar..." type="text" onChange={(e) => setQuery(e.target.value)} />
        </form>
        <br />
        <Dropdown selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      </div>
      <br />
      <Bolsa bag={bag} cerrarCarrito={cerrarCarrito} carritoWidth={carritoWidth} eliminarDeCarrito={eliminarDeCarrito} continuarPedido={continuarPedido} />
      <ListDisplay currentPost={currentPost} agregarPedido={agregarPedido} filtro={filtro} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} postPerPage={postPerPage} lastPostIndex={lastPostIndex} filtro={filtro} />
      <footer></footer>
    </>
  );
}

export default App;
