import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './components/Login/Login';
import TelaProfessor from './components/TelaProfessor/TelaProfessor'
import TelaAluno from './components/TelaAluno/TelaAluno'
import PrivateRoute from '../src/auth/PrivateRoute';
import { AuthProvider } from './auth/AuthContext';




function App() {
  return (
     <AuthProvider> 
       <Router>
         <Routes>
           <Route path="/" element={<Navigate to="/login" replace />} />

           <Route path="/login" element={<Login />} />
          
          <Route
            path="/home-admin/*"
            element={
              <PrivateRoute role="admin">
                <TelaProfessor />
              </PrivateRoute>
            }
          />
           <Route
            path="/home-user/*"
            element={
              <PrivateRoute role="user">
                <TelaAluno/>
              </PrivateRoute>
            }
           />
         </Routes>
       </Router>
     </AuthProvider>
  );
}

export default App;