import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuDrawerA from './MenuDrawerA';
import InicioTurmas from '../InicioTurmas/InicioTurmas'; 
import ConfigTela from '../ProfessorDashboard/ConfiguracoesAluno';
import AlterarSenha from '../AlterarSenha/alterarsenha';
import Mural from '../NovoMural/Mural'
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
              <Route path="inicio-turmas" element={<InicioTurmas />} />
              <Route path="inicio-turmas/mural/:turma_id" element={<Mural/>}/>
              <Route path="configuracoes" element={<ConfigTela />} />
              <Route path="configuracoes/alterar-senha" element={<AlterarSenha />} />
            </Routes>
          </Box>
        </Box>
    </MyProvider>
    );
  }
  
  export default TelaAluno;