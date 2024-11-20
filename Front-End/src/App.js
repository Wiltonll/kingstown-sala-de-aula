import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './components/Login/Login';
import TelaProfessor from './components/TelaProfessor/TelaProfessor'
import TelaAluno from './components/TelaAluno/TelaAluno'
import PrivateRoute from '../src/auth/PrivateRoute';
import { AuthProvider } from './auth/AuthContext';
import InicioTurmas from './components/InicioTurmas/InicioTurmas';
import ProfessorDashboard from './components/ProfessorDashboard/ProfessorDashboard';
import MenuDrawer from './components/TelaProfessor/MenuDrawer';
import Mural from './components/Mural/Mural';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mural />} />
        {/* Outras rotas se necessário */}
      </Routes>
    </Router>
  );
}

export default App;