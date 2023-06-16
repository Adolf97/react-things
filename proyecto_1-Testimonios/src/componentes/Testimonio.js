import React from "react";
import '../hojas-de-estilos/Testimonio.css'

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <div className="contenedor-imagen-testimonio">
        <img 
          className="imagen-testimonio" 
          src={require(`../imagenes/testimonio-${props.imagen}.webp`)}
          alt={`Foto de ${props.imagen}`} />
      </div>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;