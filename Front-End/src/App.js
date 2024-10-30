import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MenuDrawer from './components/MenuDrawer'; 
import ProfessorDashboard from './components/ProfessorDashboard/ProfessorDashboard';
import InicioTurmas from './components/InicioTurmas/InicioTurmas'; 
import Login from './components/Login/Login';
import CriarAlunos from './components/ProfessorDashboard/CriarAlunos'; 
import CriarSalas from './components/ProfessorDashboard/CriarSalas'; 
import Configuracoes from './components/ProfessorDashboard/Configuracoes'; 
import AlunosList from './components/ProfessorDashboard/AlunosList'; 
import TurmasList from './components/ProfessorDashboard/TurmasList'; 
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { MyProvider } from './context'; 
import PrivateRoute from '../src/auth/PrivateRoute';
import { AuthProvider } from './auth/AuthContext';


function App() {
  return (
    <AuthProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<Login />} />
          
          {/* Rotas protegidas por tipo de usuário */}
          <Route
            path="/admin-dashboard"
            element={<PrivateRoute><ProfessorDashboard /></PrivateRoute>}
          />
          <Route
            path="/user-dashboard"
            element={<PrivateRoute><InicioTurmas /></PrivateRoute>}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
