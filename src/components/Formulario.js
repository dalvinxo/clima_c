import React, { Fragment } from "react";

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: ""
    });

    const {ciudad, pais} = busqueda;

    const handleChange = e =>{
        

    }




  return (
    <form>
      <div className="input-field col 12">
        <input type="text" name="ciudad" id="ciudad" />
        <label htmlFor="ciudad">Ciudad </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais">
          <option value="">--Seleccione País--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País </label>
      </div>
    </form>
  );
};

export default Formulario;