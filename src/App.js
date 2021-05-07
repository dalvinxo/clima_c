import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from './components/Error';

function App() {
  const [buscador, setBuscador] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, setConsultar] = useState(false);
  const [error, setError] = useState(false);

  const { ciudad, pais } = buscador;

  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if (consultar) {
      const consultarApi = async () => {
        const appId = "057bd36e794696891d04930a4e5c05af";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);
        setConsultar(false);

        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      };
      consultarApi();
    }
  }, [consultar]);

  let componentes;
  
  if(error){
    componentes = <Error mensaje="No hay resultado"/>
  }else{
    componentes = <Clima resultado={resultado} />
  }


  return (
    <Fragment>
      <Header titulo="React Clima" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                buscador={buscador}
                setBuscador={setBuscador}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componentes}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
