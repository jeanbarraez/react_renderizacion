

import { useState } from "react";

const Formulario = ({
  data,
  setData,

  setDatosFiltrado,
  setAlert,
}) => {
  const [datosPersonal, setDatosPersonal] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  //capturar inputs
  const handleEntradas = (e) => {
    const entradasDatos = {
      entradaNombre: "nombre",
      entradaCorreo: "correo",
      entradaEdad: "edad",
      entradaCargo: "cargo",
      entradaTelefono: "telefono",
    };

    const Propiedades = entradasDatos[e.target.id]; //es todo el objeto, capturando todos los inputs
    if (Propiedades) {
      setDatosPersonal({ ...datosPersonal, [Propiedades]: e.target.value }); //value="valor"capturando inputs, cambiando de estado(escuchador)
    }
    // console.log(Propiedades.nombre)
  };
  //validar datos
  const validacionPropiedades = (e) => {
    e.preventDefault(); //para no recargar la pagina.
    //metodo trhim ,para eliminar espacios en blancos

    const { nombre, correo, edad, cargo, telefono } = datosPersonal;//destructuring 

    const validarCampos =
      !nombre.trim() || !correo.trim() || !edad || !cargo.trim() || !telefono;

    if (validarCampos) {
      setAlert({//se pasa por objeto
        error: true,
        mensaje: "Todos los Campos son Obligatorios",
        color: "danger",
      });

      return;
    }
    setAlert({
      error: false,
      mensaje: "Colaborador fue agregado exitosamente",
      color: "warning style",
    });

    //para incrementar el id e insertar nuevas personas, setear.
    //ojo :se trabaja con un arreglo nuevo para no modificar el original al insertar nuvevos elelemetos a la data(principio de inmutabilidad)
    //nuevo arreglo(datosPersonal)
    const NuevoColaborador = {
      ...datosPersonal,
      id: data.length + 1,
      //nombre:Propiedades.nombre
    };

    setData([...data, NuevoColaborador]); //se ocupa un array porque el sera parte del array original
    setDatosFiltrado([...data, NuevoColaborador]); //sino seteo esto ,no lo encuentra al buscarlo por filtro de busqueda
    // console.log(NuevoColaborador)
    setDatosPersonal({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  //setData([...data, id+1, nombre,correo,edad,cargo,telefono]);

  return (
    <form className="formu" onSubmit={validacionPropiedades}>
      <div className=" for-group mb-3">
        <input
          onChange={handleEntradas}
          className="form-control"
          placeholder="Nombre"
          id="entradaNombre"
          value={datosPersonal.nombre}
        />
      </div>

      <div className=" for-group mb-3">
        <input
          className="form-control"
          onChange={handleEntradas}
          type="email"
          placeholder="Ingrese el correo"
          id="entradaCorreo"
          value={datosPersonal.correo}
        />
      </div>
      <div className=" for-group mb-3">
        <input
          className="form-control"
          onChange={handleEntradas}
          type="number"
          min="0"
          id="entradaEdad"
          placeholder="Ingrese la Edad"
          value={datosPersonal.edad}
        />
      </div>

      <div className=" for-group mb-3">
        <input
          className="form-control mb-3"
          onChange={handleEntradas}
          type="text"
          id="entradaCargo"
          placeholder="Ingrese el Cargo"
          value={datosPersonal.cargo}
        />
      </div>
      <div className=" for-group mb-3">
        <input
          className="form-control mb-3"
          onChange={handleEntradas}
          type="number"
          id="entradaTelefono"
          placeholder="Ingrese su telefono"
          value={datosPersonal.telefono}
        />
      </div>
      <button className="btn  btn-success mt-3" type="submit">
        Registrarse
      </button>
    </form>
  );
};

export default Formulario;
