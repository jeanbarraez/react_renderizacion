import React from "react";
import "bootstrap";
const Buscador = ({ data, datosFiltrados }) => {
  //toLowerCase para no tener problema con lo que escriba el usuario ,mayusculas o minusculas
  const inputBuscar = (e) => {
    const filtrarDatos = e.target.value.toLowerCase();

    const ResultadoFiltrado = data.filter(
      (personal) =>
        personal.nombre.toLowerCase().includes(filtrarDatos) ||
        //includes:busca las palabras que intruduce el usuario y devuelve un true o false
        //si esta la palabra , la trae, sino , no la trae
        
        personal.correo.toLowerCase().includes(filtrarDatos) ||
        personal.edad.toLowerCase().includes(filtrarDatos) ||
        personal.cargo.toLowerCase().includes(filtrarDatos) ||
        personal.telefono.toLowerCase().includes(filtrarDatos)
    );
    datosFiltrados(ResultadoFiltrado);
  };

  return (
    <div className="busca">
      <input
        className="for-control mb-3"
        type="text"
        id="encontar"
        placeholder="Busca un Colaborador"
        name="buscar"
        onChange={inputBuscar}
      />
    </div>
  );
 
};

export default Buscador;
