import './App.css';
import Home from './Componentes/Home';
import Modelo from './Componentes/Modelo';
import Error404 from './Componentes/Error404';
import Nav from './Nav';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reyes/:rey" element={<Modelo />} />
        <Route path="/reyes/leogivildo" element={<Navigate to="/reyes/leovigildo" />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
