// src/components/CriarTurma.js
import React from 'react';
import { Box, Typography } from '@mui/material';
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
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', marginBottom: 2, color: '#5922A0' }} // Estilo do título na parte superior
        >
          Kingstown - Sala de Aula
        </Typography>
        {/* Aqui você pode adicionar mais conteúdo conforme necessário */}
      </Box>
    </Box>
  );
}
