import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';
import ProfessorDashboard from '../ProfessorDashboard/ProfessorDashboard';
import InicioTurmas from '../InicioTurmas/InicioTurmas';
import CriarAlunos from '../ProfessorDashboard/CriarAlunos';
import CriarSalas from '../ProfessorDashboard/CriarSalas';
import ConfigTela from '../ProfessorDashboard/ConfiguracoesProfessor';
import AlterarSenha from '../AlterarSenha/alterarsenhaP'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { MyProvider } from '../../context';

function TelaProfessor() {
  return (
    <MyProvider>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MenuDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
            <Routes>
              <Route path="inicio-turmas" element={<InicioTurmas />} />
              <Route path="professor-dashboard" element={<ProfessorDashboard />} />
              <Route path="criar-alunos" element={<CriarAlunos />} />
              <Route path="criar-salas" element={<CriarSalas />} />
              <Route path="configuracoes" element={<ConfigTela />} />
              <Route path="configuracoes/alterar-senha" element={<AlterarSenha />} />
            </Routes>
          </Box>
        </Box>
    </MyProvider>
  );
}

export default TelaProfessor;
