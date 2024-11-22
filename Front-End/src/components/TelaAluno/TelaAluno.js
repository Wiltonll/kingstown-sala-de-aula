import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuDrawerA from './MenuDrawerA';
import InicioTurmas from '../InicioTurmas/InicioTurmas'; 
import Configuracoes from '../ProfessorDashboard/Configuracoes'; 
import Configuracoesdaconta from '../ProfessorDashboard/Configuracoesdaconta';
import ConfigTela from '../ProfessorDashboard/Configuracoesdaconta';
import AlunosList from '../ProfessorDashboard/AlunosList'; 
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { MyProvider } from '../../context'; 

function TelaAluno() {
    return (
      <MyProvider> 
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MenuDrawerA />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
            <Routes>
              <Route path="/" element={<InicioTurmas />} />
              <Route path="/configuracoes" element={<Configuracoes />} />
              <Route path="/configuracoes" element={<Configuracoesdaconta />} />
              <Route path="/configuracoesdaconta" element={<ConfigTela />} />
              <Route path="/alunos" element={<AlunosList />} />
            </Routes>
          </Box>
        </Box>
    </MyProvider>
    );
  }
  
  export default TelaAluno;