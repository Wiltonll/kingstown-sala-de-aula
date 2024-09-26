import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Sidenav from './components/Sidenav'; // Importe o componente de barra lateral aqui
import CriarTurma from './components/CriarTurma'; // Importe a página de criação de turma aqui
import Form2 from './components/Form2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CriarTurma />} />
        <Route path="/sidenav" element={<Sidenav />} />
      </Routes>
    </Router>
  );
}

export default App;