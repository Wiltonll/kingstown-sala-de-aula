import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Sidenav from './components/Sidenav'; // Importe o componente de barra lateral aqui
import CriarTurmaPage from './components/CriarTurma'; // Importe a página de criação de turma aqui
import Form from '../src/components/Form';
import Form2 from './components/Form2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form2 />} />
        <Route path="/sidenav" element={<Sidenav />} />
      </Routes>
    </Router>
  );
}

export default App;