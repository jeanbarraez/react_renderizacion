import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaTrash } from "react-icons/fa";

const Listado = ({ data, setdata, datosFiltrados, setDatosFiltrado }) => {
  // borramos data por datosFiltrados para que filtre toda la tabla
  //se necesita solo la filtrada
 

  const ListadoInicial = datosFiltrados.map((item) => (
 //const ListadoInicial = setDatosFiltrado.map((item) => ( 
    //las key solo lo ocupamos en datos dinamicos y es unico
    <tr key={item.id}>

      <td>{item.id}</td>
      <td>{item.nombre}</td>
      <td>{item.correo}</td>
      <td>{item.edad}</td>
      <td>{item.cargo}</td>
      <td>{item.telefono}</td>
      <td>
        <FaTrash onClick={()=>eliminarPersona(item.id)} />
      </td>
    </tr>
  ));

  const eliminarPersona = (id) => {
    const listaFiltrada = datosFiltrados.filter(
      (colaborador) => colaborador.id !== id
      //se retorna lo distinto al id que se desea eliminar
    );
    setDatosFiltrado(listaFiltrada);
    data(listaFiltrada)
    setdata(listaFiltrada)
    
  };

  return (
    <div className="table-responsive col-12 col-8 mb-2 text-center">
      <Table variant="dark" className="tabla table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{ListadoInicial}</tbody>
        {/* aca pintamos la logica de los datos dinamicos, pasando la funcion */}
      </Table>
    </div>
  );
};

export default Listado;
