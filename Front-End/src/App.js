// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuDrawer from './components/MenuDrawer'; 
import InicioTurmas from './components/InicioTurmas/InicioTurmas'; 
import CriarAlunos from './components/ProfessorDashboard/CriarAlunos'; 
import CriarSalas from './components/ProfessorDashboard/CriarSalas'; 
import Configuracoes from './components/ProfessorDashboard/Configuracoes'; 
import AlunosList from './components/ProfessorDashboard/AlunosList'; 
import TurmasList from './components/ProfessorDashboard/TurmasList'; 
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MenuDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<InicioTurmas />} />
            <Route path="/criar-alunos" element={<CriarAlunos />} />
            <Route path="/criar-salas" element={<CriarSalas />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/alunos" element={<AlunosList />} />
            <Route path="/turmas" element={<TurmasList />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
