import './App.css';
import freecodecamplogo from './imagenes/freeCodeCampLogo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img 
          className="freecodecamp-logo"
          src={freecodecamplogo}
          alt="freeCodeCamp Logo" />
      </div>
      <div 
        className="tareas-lista-principal">
          <h1>Mis tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
