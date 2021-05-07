import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({buscador, setBuscador, setConsultar}) => {

  const [error, setError] = useState(false);

  const { ciudad, pais } = buscador;

  const handleChange = (e) => {
    setBuscador({
      ...buscador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ciudad.trim() === '' || pais.trim() === '') {
      setError(true);
      return;   
    }

    setError(false);

    ///consultar
    setConsultar(true);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <div className="red darken-4">
          <Error mensaje="Todos los campos estan vacios" />
        </div>
      ) : null}

      <div className="input-field col 12">
        <input
          type="text"
          value={ciudad}
          onChange={handleChange}
          name="ciudad"
          id="ciudad"
        />
        <label htmlFor="ciudad">Ciudad </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Formulario;
