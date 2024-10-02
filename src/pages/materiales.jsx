import React, { useMemo, useState } from "react";
import datos from '../datos.json';
import { toast } from "sonner"; // Importaamos solo el toast porque el Toaster ya esta en App
import ListDisplay from "../componentes/display";
import Dropdown from "../componentes/dropdown";
import Pagination from "../componentes/paginations";

function Materials({ bag, setBag }) {
  const [Items, setItems] = useState(Object.values(datos));
  const [query, setQuery] = useState("");
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
    toast.success(`${item.nombre} agregado al pedido.`, { duration: 2000 });
    setBag(prev => [...prev, item.nombre]);
  }

  return (
    <div>
      {/* Aqui abajito esta el buscador y lo del filtrado */}
      <div className="buscador">
        <form className="buscar_texto" type="search">
          <input placeholder="Buscar..." type="text" onChange={(e) => setQuery(e.target.value)} />
        </form>
        <br />
        <Dropdown selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      </div>

      <br />

      {/* Aqui estan los materiales*/}
      <ListDisplay currentPost={currentPost} agregarPedido={agregarPedido} filtro={filtro} />

      {/* Aqui esta la paginación */}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} postPerPage={postPerPage} lastPostIndex={lastPostIndex} filtro={filtro} />
    </div>
  );
}

export default Materials;
