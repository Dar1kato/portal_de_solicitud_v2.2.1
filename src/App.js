/**
 * Universidad Iberoamericana de Puebla
 * Ing. en Sistemas Computacionales
 * 
 * Portal de Solicitud de Insumos - Bosquejo de buscador y "carrito"
 */

//* [Declaración de librerias]
import React, { useMemo, useState } from "react";
import './App.css';
import { Toaster, toast } from "sonner";


function App() {
  //* FIREBASE API

  //* [Almacen de Datos para ser usados en la página]
  //? NOTA: para fines de prueba se utiliza un array con datos. En la práctica sera necesario crear esta variable con datos recogidos de una base de datos externa
  //TODO queda pendiente implementar el query a la base de datos principal donde estan guardados los datos de los productos
  const datos = {
    producto1: { nombre: 'Laptop', categoria: 'Ingeniería en Sistemas' },
    producto2: { nombre: 'Multímetro', categoria: 'Electrónica' },
    producto3: { nombre: 'Calculadora Científica', categoria: 'Química' },
    producto4: { nombre: 'Impresora 3D', categoria: 'Mecatrónica' },
    producto5: { nombre: 'Protoboard', categoria: 'Electrónica' },
    producto6: { nombre: 'Simulador de Circuitos', categoria: 'Ingeniería en Sistemas' },
    producto7: { nombre: 'Pipetas', categoria: 'Química' },
    producto8: { nombre: 'Sensor Ultrasónico', categoria: 'Mecatrónica' },
    producto9: { nombre: 'Disco Duro Externo', categoria: 'Ingeniería en Sistemas' },
    producto10: { nombre: 'Osciloscopio', categoria: 'Electrónica' },
    producto11: { nombre: 'Kit de Soldadura', categoria: 'Electrónica' },
    producto12: { nombre: 'Cuaderno de Laboratorio', categoria: 'Química' },
    producto13: { nombre: 'Microcontrolador', categoria: 'Mecatrónica' },
    producto14: { nombre: 'Gafas de Protección', categoria: 'Química' },
    producto15: { nombre: 'Raspberry Pi', categoria: 'Ingeniería en Sistemas' },
    producto16: { nombre: 'Regulador de Voltaje', categoria: 'Electrónica' },
    producto17: { nombre: 'Kit de Robótica', categoria: 'Mecatrónica' },
    producto18: { nombre: 'Software de Modelado 3D', categoria: 'Mecatrónica' },
    producto19: { nombre: 'Programa de Simulación Química', categoria: 'Química' },
    producto20: { nombre: 'Memoria USB', categoria: 'Ingeniería en Sistemas' },
    producto21: { nombre: 'Servidor en la nube', categoria: 'Ingeniería en Sistemas' },
    producto22: { nombre: 'Tarjeta de red', categoria: 'Ingeniería en Sistemas' },
    producto23: { nombre: 'Router', categoria: 'Ingeniería en Sistemas' },
    producto24: { nombre: 'Kit de Arduino', categoria: 'Ingeniería en Sistemas' },
    producto25: { nombre: 'Cable de fibra óptica', categoria: 'Ingeniería enSistemas' },
    producto26: { nombre: 'Potenciómetro', categoria: 'Electrónica' },
    producto27: { nombre: 'Transistor', categoria: 'Electrónica' },
    producto28: { nombre: 'Diodo', categoria: 'Electrónica' },
    producto29: { nombre: 'Resistencia', categoria: 'Electrónica' },
    producto30: { nombre: 'Fuente de alimentación', categoria: 'Electrónica' },
    producto31: { nombre: 'Matraz Erlenmeyer', categoria: 'Química' },
    producto32: { nombre: 'Bureta', categoria: 'Química' },
    producto33: { nombre: 'Balanza analítica', categoria: 'Química' },
    producto34: { nombre: 'Mechero Bunsen', categoria:'Química' },
    producto35: { nombre: 'Kit de reactivos', categoria: 'Química' },
    producto36: { nombre: 'Motor DC', categoria:'Mecatrónica' },
    producto37: { nombre: 'Servo motor', categoria:'Mecatrónica' },
    producto38: { nombre: 'Encoder', categoria:'Mecatrónica' },
    producto39: { nombre: 'Sensor de temperatura', categoria:'Mecatrónica' },
    producto40: { nombre: 'Controlador lógico programable (PLC)', categoria:'Mecatrónica' }
  };
  
  const nombresData = Object.values(datos).map(prod => prod.nombre);
  const categoriasData = Object.values(datos).map(prod => prod.categoria);
  

  //* 1. Declaraciones de Estados

  const [Items, setItems] = useState(Object.values(datos)) // 1.1. Estado de los Items
  const [query, setQuery] = useState("") // 1.2. Estados del query para el buscador
  const [bag, setBag] = useState([]) // 1.3. Estado de la bolsa donde se guardan los productos
  const [carritoWidth, setCarritoWidth] = useState('300')
  const [categoria, setCategoria] = useState("");
  const [selectedValue, setSelectedValue] = useState('');

  

  //* 2. Lógicas
  // 2.1. Lógica de filtraje de datos del query
  const filtro = useMemo(() => {
    return Items.filter((item) => {
      return (
        item.nombre.toLowerCase().includes(query.toLowerCase()) && (item.categoria === selectedValue || selectedValue === "")
      );
    }, [Items, query]);
  });

  //* 3. Funciones
  // 3.1. Función para agregar productos al pedido
  function agregarPedido(e, item) {
    e.preventDefault(); // 3.1.1. Evita que se agregue el estado por defecto
    toast.success(`${item.nombre} agregado al pedido.`, {duration: 2000});
    return setBag(prev => [...prev, item.nombre]); // 3.1.2. Utilizar la función SetBag para modificar el estado de Bag con los elementos previos y el nuevo elemento
  }

  // 3.2. Función para abrir el carrito
  function abrirCarrito() {
    setCarritoWidth('300px');
  }


  // 3.3. Función para cerrar el carrito
  function cerrarCarrito() {
    setCarritoWidth('0');
  }


  // 3.4. Función para eliminar objetos del carrito
  function eliminarDeCarrito(index) {
    setBag(bag.filter((_, i) => i !== index));
  }


  // 3.5. Función para proseguir con el pedido
  function continuarPedido() {
    alert("El Dev aún no implementa esta función :(");
  }
  

  //* 4. Contenedores
  // 4.1. Contenedor de los productos a solicitar
  function Bolsa() {
    return (
      <div className="carrito" style={{width: carritoWidth}}>
        <button className="cerrarCarrito" onClick={cerrarCarrito}>Volver</button> {/* Boton que cierra el carrito + su funcionalidad */}
        <h1>Pedido:</h1>
        <div className="contenidoCarriot">
          {bag.map((item, index) => ( // Map de los items por linea, con su boton correspondiente. El Index sirve para distinguir los elementos del carrito, para que la funcion "eliminarDeCarrito()" funcione correctamente
            <ul key="index"className="productoEnCarrito"> 
              <li>{item}<button className="eliminarDeCarrito" onClick={() => eliminarDeCarrito(index)}>-</button>
              </li>
            </ul>
          ))}
        </div>
          <button className="continuarPedidoBoton" onClick={() => continuarPedido()}>Continuar con el Pedido</button> {/* Boton con la función para continuar el pedido */}
          {/* TODO: La función, Lógica y página para continuar con el pedido esta pendiente de crearse. Por el momento la función "continuarPedido()" solo alza una alerta donde se explica lo mismo. El conocimiento en React del Dev Daniel no son suficients para seguir con este paso... por ahora */}
      </div>
    );
  }


  // 4.2. Contenedor de la lista general de productos
  function ListDisplay() {
    return (
      <>
      <div className="display">
        {filtro.map((item, index) => ( // Map de los items por lineas, con su boton correspondiente
          <div className="displayItem" key={index}>
            {/* Se declara el uso de la función agregarPedido() al activar el botón */}
            {item.nombre} - {item.categoria}<button className="addButton" onClick={(e) => agregarPedido(e, item)}>+</button> 
          </div>
        ))}
        {filtro.length === 0 && <p>No se encontraron productos</p>}
      </div>
      </>
    );
  }


  // 4.3. Contenedor del Header
  function Cabecera() {
    return (
      <header>
        <div className="titulo">
        <img src="/iberoLogo.png"/>
        <h1>Portal de Solicitud de Insumos</h1>
        </div>
        <button className="abrirCarrito" onClick={abrirCarrito}><img className="logoCarrito" src="bag.png"></img></button>{/* Botón para abrir el carrito */}
      </header>
    )
  }

  function Dropdown() {
    const options = [
      {value: '', label: '...'},
      {value: 'Ingeniería en Sistemas', label: "Ingeniería en Sistemas"},
      {value: 'Electrónica', label: "Electrónica"},
      {value: 'Química', label: "Química"},
      {value: 'Mecatrónica', label: "Mecatrónica"},
    ];

    return (
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
        ))}
      </select>
      );
     }

  //* 5. Cuepro principal
  return ( 
  <>
    <Toaster position="bottom-right"/>
    {/* 5.1. Crear la Cabecera */}
    <Cabecera />
    
    {/* 5.2. Crear el buscador  */}
    <div className="buscador">
      <form className="buscar_texto" type="search" >

        {/* 5.1. Lógica de búsqueda automática */}
        Buscar:{" "} <input type="text" onChange={(e) => setQuery(e.target.value)}/> 

      </form>
    </div>
    <br />

    <Bolsa />

    <Dropdown />
    

    {/* 5.3. Crear el display de la lista de todos los productos */}
    <ListDisplay />

    {/* 5.4. Crear el footer donde se lista el copyright y el contacto principal del departamenteo */}
    <footer>
      <i>Contacto: servicio@iberopuebla.mx</i>
      <i>@ Universidad Iberoamericana de Puebla</i>
    </footer>
  </>
  );
}


//* Exportar la App para index.js
export default App;
