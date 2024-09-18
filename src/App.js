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
// Librería para notificaciones en pantalla
import { Toaster, toast } from "sonner"; 


function App() {
  //* Almacenaje de Datos para ser usados en la página
  //TODO Implementar la solicitud de datos a Firebase en forma de un objeto con el formato de la constante "datos" en la linea 22
  //! Por alguna razón no he podido conectar con Firebase, por temas de "modulos"(?) de la libreria Firestore, queda pendiente solucionar ese problema

  // Objeto principal de almacenaje de Datos. Almacena nombre, categoría y enlace a imagen de cada producto
  /*const datos = {
    producto1: { nombre: 'Estación de Calor', categoria: 'Electrónica', imagenURL: "https://tronfix.com/3959-large_default/estacion-de-calor-quick-861dw.jpg" },
    producto2: { nombre: 'Multímetro', categoria: 'Electrónica', imagenURL: "https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/200344c8a/multimetro-digital-auto-rango-con-detector-de-voltaje.jpg"},
    producto3: { nombre: 'Calculadora Científica', categoria: 'Química', imagenURL: "https://www.adosa.com.mx/media/catalog/product/cache/4db89bde2062a3745aaded91f69a9032/0/8/087590_1.jpg" },
    producto4: { nombre: 'Impresora 3D', categoria: 'Mecatrónica', imagenURL: "https://m.media-amazon.com/images/I/61L4aoIqYOL._AC_UF1000,1000_QL80_.jpg" },
    producto5: { nombre: 'Protoboard', categoria: 'Electrónica', imagenURL: "https://aelectronics.com.mx/893/protoboard-blanca-de-830-puntos.jpg" },
    producto6: { nombre: 'Monitor', categoria: 'Ingeniería en Sistemas', imagenURL:"https://download.lenovo.com/km/media/images/PD500388/thinkvision_p24h_20200219032455975.jpg" },
    producto7: { nombre: 'Pipetas', categoria: 'Química', imagenURL: "https://provinow.com/wp-content/uploads/2022/11/PIPETA-SEROLOGICA-POLIESTIRENO-10ML-NARANJA-ESTERIL-SPL_.jpg" },
    producto8: { nombre: 'Sensor Ultrasónico', categoria: 'Mecatrónica', imagenURL:"https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/1945948ab/sensor-ultrasonico.jpg" },
    producto9: { nombre: 'Disco Duro Externo', categoria: 'Ingeniería en Sistemas' },
    producto10: { nombre: 'Osciloscopio', categoria: 'Electrónica', imagenURL: "https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/214806594/osciloscopio-de-100-mhz.jpg" },
    producto11: { nombre: 'Kit de Soldadura', categoria: 'Electrónica' },
    producto12: { nombre: 'Cuaderno de Laboratorio', categoria: 'Química' },
    producto13: { nombre: 'Microcontrolador', categoria: 'Mecatrónica' },
    producto14: { nombre: 'Gafas de Protección', categoria: 'Química' },
    producto15: { nombre: 'Raspberry Pi', categoria: 'Ingeniería en Sistemas', imagenURL: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/764/MFG_RASPBERRY-PI-3-MODEL-B.jpg" },
    producto16: { nombre: 'Regulador de Voltaje', categoria: 'Electrónica' },
    producto17: { nombre: 'Kit de Robótica', categoria: 'Mecatrónica' },
    producto18: { nombre: 'Software de Modelado 3D', categoria: 'Mecatrónica' },
    producto19: { nombre: 'Programa de Simulación Química', categoria: 'Química' },
    producto20: { nombre: 'Memoria USB', categoria: 'Ingeniería en Sistemas', imagenURL: "https://stgulabmexicoprod.blob.core.windows.net/correosclic/0006019_memoria-usb-64-gb.jpeg" },
    producto21: { nombre: 'Servidor en la nube', categoria: 'Ingeniería en Sistemas' },
    producto22: { nombre: 'Tarjeta de red', categoria: 'Ingeniería en Sistemas', imagenURL: "https://media.digitalife.com.mx/products/21347/626b26886906b.webp" },
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
    producto33: { nombre: 'Balanza analítica', categoria: 'Química', imagenURL: "https://www.balpesac.com/wp-content/uploads/2016/09/balanzas-analiticas-bt.png" },
    producto34: { nombre: 'Mechero Bunsen', categoria:'Química' },
    producto35: { nombre: 'Kit de reactivos', categoria: 'Química' },
    producto36: { nombre: 'Motor DC', categoria:'Mecatrónica', imagenURL: "https://robtech.com.mx/wp-content/uploads/2022/07/HR0244.jpg" },
    producto37: { nombre: 'Servo motor', categoria:'Mecatrónica', imagenURL: "https://www.aranacorp.com/wp-content/uploads/towerpro-servo-sg90.jpg" },
    producto38: { nombre: 'Encoder', categoria:'Mecatrónica', imagenURL: "https://dominion.com.mx/tienda/974-large_default/e40s6-1024-6-l-5-encoder-rotativo-autonics.jpg" },
    producto39: { nombre: 'Sensor de temperatura', categoria:'Mecatrónica' },
    producto40: { nombre: 'Controlador lógico programable (PLC)', categoria:'Mecatrónica'}
  }; */


  //* 1. Declaraciones de Estados
  const [Items, setItems] = useState(Object.values(datos)) // 1.1. Estado de los Items
  const [query, setQuery] = useState("") // 1.2. Estados del query para el buscador
  const [bag, setBag] = useState([]) // 1.3. Estado de la bolsa donde se guardan los productos
  const [carritoWidth, setCarritoWidth] = useState('300') // 1.4. Estado del tamaño del carrito. En caso de que se opte por un carrito permanente en la página, este State puede eliminarse
  const [selectedValue, setSelectedValue] = useState(''); // 1.5. Estado de la categoría selecionada en el filtro
  
  // 1.6. Estados y constantes para la paginación
  const [currentPage, setCurrentPage] = useState(1) // 1.6.1. Estado para la página actual
  const [postPerPage, setPostPerPAge] = useState(16) // 1.6.2. Estado para los productos mostrados por página

  const lastPostIndex = currentPage * postPerPage; // 1.6.3. Constante para el index del úlitmo post de la página 
  const firstPostIndex = lastPostIndex - postPerPage; // 1.6.4. Constante para el index del primer post de la página
  
  //* 2. Lógicas
  // 2.1. Lógica de filtraje de datos del query
  const filtro = useMemo(() => {
    return Items.filter((item) => {
      return (
        item.nombre.toLowerCase().includes(query.toLowerCase()) &&
        (selectedValue === "" || item.categoria === selectedValue)
      );
    }, [Items, query, selectedValue]); // Incluye selectedValue en las dependencias
  }, [Items, query, selectedValue]);
  
  const currentPost = filtro.slice(firstPostIndex, lastPostIndex) // 1.6.5. Constante

  //* 3. Funciones
  // 3.1. Función para agregar productos al pedido
  function agregarPedido(e, item) {
    e.preventDefault(); // 3.1.1. Evita que se agregue el estado por defecto
    toast.success(`${item.nombre} agregado al pedido.`, {duration: 2000}); // 3.1.2. Se notifica al usuario que el producto está en el carrito
    return setBag(prev => [...prev, item.nombre]); // 3.1.3. Utilizar la función SetBag para modificar el estado de Bag con los elementos previos y el nuevo elemento
  }

  // 3.2. Función para abrir el carrito
  function abrirCarrito() {
    setCarritoWidth('300px'); // Cambia el tamaño del carrito
  }


  // 3.3. Función para cerrar el carrito
  function cerrarCarrito() {
    setCarritoWidth('0'); // Cambia el tamaño del carrito
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
  // 4.1. Contenedor de los productos a solicitar, alias "Carrito"
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
        {currentPost.map((item, index) => ( // Map de los items por lineas, con su boton correspondiente
          <div className="displayItem" key={index}>
            <b>{item.nombre}</b><br /> {/* Se muestra el nombre del producto */}

            <small>{item.categoria}</small> {/* Se muestra la categoría del producto */}

            <img src={item.imagenURL} /> {/* Se muestra la imagen del producto */}

            <button className="addButton" onClick={(e) => agregarPedido(e, item)}>+</button>  {/* Se declara el uso de la función agregarPedido() al activar el botón */}
          </div>
        ))}
        {filtro.length === 0 && <p className="noMatch">No se encontraron productos</p>} {/* Se informa al usuario en caso de no encontrar ningun producto que coincida con lo buscado */}
      </div>
      </>
    );
  }


  // 4.3. Contenedor del Header
  function Cabecera() {
    return (
      <header>
        <div className="titulo">
        <img src="/iberoPueblaImg.png"/>
        <h1>Portal de Solicitud de Insumos</h1>
        </div>
        <button className="abrirCarrito" onClick={abrirCarrito}><img className="logoCarrito" src="bag.png"></img></button> {/* Botón para abrir el carrito */}
      </header>
    )
  }


  // 4.4. Menú desplegable para el Filtro por Categoria
  function Dropdown() {
    // 4.4.1. Se Declaran las categorías, para ser mostradas dentro del menú
    //? NOTA: Por el momento las categorías están declaradas "a mano" dentro de la función. 
    //? Para el correcto funcionamiento de la aplicación, y para preveer cualquier cambio futuro en la base de datos, estas opciones deben ser obtenidas desde la variable principal de datos obtenidos de Firebase
    //TODO Obtener los datos de la variable desde la cosntante con los datos obtenidos de Firebase
    const options = [
      {value: '', label: '...'},
      {value: 'Ingeniería en Sistemas', label: "Ingeniería en Sistemas"},
      {value: 'Electrónica', label: "Electrónica"},
      {value: 'Química', label: "Química"},
      {value: 'Mecatrónica', label: "Mecatrónica"},
    ];

    return (
      <>
      <b>Filtrar por categoria: </b>
      
      {/* Menu Desplegable */}
      <select
        className="menuFiltrado"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)} 
      > {/* Se cambia la categoría seleccionada al hacer clic en cualquiera de las opciones disponibles */}

      
      {options.map((option) => ( // 4.4.2. Se hace un mapeado de las opciones disponibles, para despues mostrarlas en el menu desplegable
        <option key={option.value} value={option.value}> 
          {option.label}
        </option>
        ))}
      </select>
      </>
      );
     }

  function Pagination() {
    let pages = [];
    const totalPost = Object.keys(filtro).length;

    console.log("modulo");
    console.log(lastPostIndex);

    for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++ ) {
      pages.push(i);
    }

    return (
      <div className="paginacion">
        <button onClick={() => setCurrentPage(postPerPage === lastPostIndex ? currentPage : currentPage - 1)}>Anterior</button>
        {pages.map((page, index) => {
          return (
            <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        )
        })}
        <button onClick={() => setCurrentPage(currentPage === pages[pages.length - 1] ? currentPage: currentPage + 1)}>Siguiente</button>
      </div>
    )
  }


    
  //* 5. Cuepro principal
  return ( 
  <>
    {/* 5.0.1 Se declara el uso de la notificación de Toaster */}
    <Toaster position="bottom-right"/>

    {/* 5.1. Crear la Cabecera */}
    <Cabecera />
    
    {/* 5.2. Crear el buscador  */}
    <div className="buscador">
      <form className="buscar_texto" type="search" >

        {/* 5.2.1. Lógica de búsqueda automática */}
        <input placeholder="Buscar..." type="text" onChange={(e) => setQuery(e.target.value)}/> 
        {/* El query se va actualizando al mismo tiempo que el usuario teclea, lo que permite que se haga el filtraje en vivo */}

      </form>
      <br />

      {/* 5.3. Crear el menú desplegable */}
      <Dropdown />
    </div>

    <br />
    {/* 5.4. Crear el carrito, este empieza escondido */}
    <Bolsa />

    {/* 5.5. Crear el display de la lista de todos los productos */}
    <ListDisplay />


    <Pagination />

    {/* 5.6. Crear el footer donde se lista el copyright y el contacto principal del departamenteo */}
    <footer>
    </footer>
  </>
  );
}


//* Exportar la App para index.js
export default App;
