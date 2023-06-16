import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { BsTrash } from 'react-icons/bs';

function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div 
        className="tarea-texto"
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className="tarea-contenedeo-iconos"
        onClick={() => eliminarTarea(id)}>
        <BsTrash className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;