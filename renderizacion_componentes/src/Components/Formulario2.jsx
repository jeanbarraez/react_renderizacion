import { useState } from "react";
import { BaseColaboradores } from "../assets/js/BaseColaboradores";
import React from 'react'

const Formulario2 = ( {
    datosFiltrados,
    setDatosFiltrados,
    
    
  }) => {
 
    const [entradaNombre, setEntradaNombre] = useState("");
    const [entradaCorreo, setEntradaCorreo] = useState("");
    const [entradaEdad, setEntradaEdad] = useState("");
    const [entradaCargo, setEntradaCargo] = useState("");
    const [entradaTelefono, setEntradaTelefono] = useState("");
  //  const [datosFiltrados, setDatosFiltrado] = useState(BaseColaboradores);
 
 

    
  //  const [error, setError] = useState(false);
  
    const enviarFormulario = (e) => {
      e.preventDefault();
      console.log('prueba')
      const nuevocolaborador ={
        id: datosFiltrados.length + 1,
        nombre: entradaNombre,
        correo: entradaCorreo,
        edad: entradaEdad,
        cargo: entradaCargo,
        entradaTelefono :entradaTelefono
      }
     /* setDatosFiltrados(
        ...datosFiltrados,
        {
          id: datosFiltrados.length + 1,
          nombre: entradaNombre,
          correo: entradaCorreo,
          edad: entradaEdad,
          cargo: entradaCargo,
          entradaTelefono :entradaTelefono
        },
      );*/
      console.log(nuevocolaborador)
     // const prueba = setDatosFiltrado
   //console.log(prueba)
    };
  
  return (
    <form className="formu" onSubmit={enviarFormulario}  >
    <div className=" for-group mb-3">
      <input  
        className="form-control"
        placeholder="Nombre"
        id="entradaNombre"
        value={entradaNombre}
        onChange={(e) => setEntradaNombre(e.target.value)}
      />
    </div>

    <div className=" for-group mb-3">
      <input
        className="form-control"
        onChange={(e) => setEntradaCorreo(e.target.value)}
        type="email"
        placeholder="Ingrese el correo"
        id="entradaCorreo"
        value={entradaCorreo}
      />
    </div>
    <div className=" for-group mb-3">
      <input
        className="form-control"
        onChange={(e) => setEntradaEdad(e.target.value)}
        type="number"
        min="0"
        id="entradaEdad"
        placeholder="Ingrese la Edad"
        value={entradaEdad}
      />
    </div>

    <div className=" for-group mb-3">
      <input
        className="form-control mb-3"
        onChange={(e) => setEntradaCargo(e.target.value)}
        type="text"
        id="entradaCargo"
        placeholder="Ingrese el Cargo"
        value={entradaCargo}
      />
    </div>
    <div className=" for-group mb-3">
      <input
        className="form-control mb-3"
        onChange={(e) => setEntradaTelefono(e.target.value)}
        type="number"
        id="entradaTelefono"
        placeholder="Ingrese su telefono"
        value={entradaTelefono}
      />
    </div>
    <button className="btn  btn-success mt-3" type="submit">
      Registrarse
    </button>
  </form>
);
  
}

export default Formulario2