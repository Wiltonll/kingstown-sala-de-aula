// src/components/CriarTurma.js
import React from 'react';
import { Box } from '@mui/material';
import MenuDrawer from './MenuDrawer'; // Importar o MenuDrawer corretamente

export default function CriarTurma() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Colocar o MenuDrawer aqui */}
      <Box sx={{ position: 'fixed', left: 16, top: 16, zIndex: 1000 }}>
        <MenuDrawer buttonColor="#5922A0" /> {/* Passando a cor roxa para o MenuDrawer */}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          backgroundColor: '#FFD105', // Cor de fundo amarelo
        }}
      >
        {/* Aqui você pode adicionar mais conteúdo conforme necessário */}
      </Box>
    </Box>
  );
}
