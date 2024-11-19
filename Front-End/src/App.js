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




function App() {
  return (
    <TelaAluno/>
    // <AuthProvider> 
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/login" replace />} />

    //       <Route path="/login" element={<Login />} />
          
    //       {/* Rotas protegidas por tipo de usuário */}
    //       <Route
    //         path="/home-admin"
    //         element={<PrivateRoute><TelaProfessor /></PrivateRoute>}
    //       />
    //       <Route
    //         path="/home-user"
    //         element={<PrivateRoute><TelaAluno /></PrivateRoute>}
    //       />
    //     </Routes>
    //   </Router>
    // </AuthProvider>
  );
}

export default App;
