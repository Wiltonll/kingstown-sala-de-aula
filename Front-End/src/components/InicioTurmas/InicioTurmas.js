// src/components/InicioTurmas/index.js
import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import MenuDrawer from '../MenuDrawer';
import TurmasList from '../ProfessorDashboard/TurmasList';
import AlunosList from '../ProfessorDashboard/AlunosList';
import Configuracoes from '../ProfessorDashboard/Configuracoes';

export default function InicioTurmas() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* MenuDrawer fixo no lado esquerdo */}
      <MenuDrawer buttonColor="#5922A0" />

      {/* Conteúdo principal ao lado do MenuDrawer */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }} // Adiciona um espaço para o Drawer
      >
        <Toolbar />
        {/* Configuração das rotas */}
        <Routes>
          <Route path="/turmas" element={<TurmasList />} />
          <Route path="/alunos" element={<AlunosList />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </Box>
    </Box>
  );
}
