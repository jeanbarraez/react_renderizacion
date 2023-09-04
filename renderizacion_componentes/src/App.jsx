import { useState } from "react";
import "./App.css";
import Buscador from "./Components/Buscador";
import Formulario from "./Components/Formulario";
import Listado from "./Components/Listado";
import { BaseColaboradores } from "./assets/js/BaseColaboradores";
import Alert from "./Components/Alert";

function App() {
  const [data, setData] = useState(BaseColaboradores); //data de BasesColaboradores
  const [datosFiltrados, setDatosFiltrado] = useState(data); //data filtrada
  //console.log(data);

  const [alert, setAlert] = useState({
    error: "",
    mensaje: "",
    color: "",
  });
  return (
    <>
      <div className="responsivo">
        <h1>LISTA DE COLABORADORES</h1>
        <div className="container">
          <div className="filtro">
            <Buscador data={data} datosFiltrados={setDatosFiltrado} />
            {/* cambio de estado */}
          </div>

          <div className="formularios">
            <div className="listado">
              <Listado
                data={data}
                setData={setData}
                datosFiltrados={datosFiltrados}
                setDatosFiltrado={setDatosFiltrado}
              />
            </div>
            <section>
              <div className="inputs">
                <div className="sub-titulo">
                  <h3>Agregando colaborador</h3>
                </div>
                <div>
                  <Formulario
                    setAlert={setAlert}
                    data={data}
                    setData={setData}
                    datosFiltrados={datosFiltrados}
                    setDatosFiltrado={setDatosFiltrado}
                  />

                  {alert.mensaje && (
                    <Alert color={alert.color} className="alerta">
                      {alert.mensaje}
                    </Alert>
                  )}
                </div>
              </div>
            </section>
          </div>
          <Alert alert={alert} />
        </div>
      </div>
    </>
  );
}

export default App;
