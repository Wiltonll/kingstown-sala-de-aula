import React from 'react';
import { Box } from '@mui/material';
import logo from '../../img/logo_roxo(2)_png.png'; 

const InicioTurmas = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        padding: '16px',
        marginTop: '64px',
        minHeight: 'calc(100vh - 64px)', 
        position: 'relative',  
      }}
    >
      <img
        src={logo}
        alt="Logo da Escola"
        style={{
          width: '900px', 
          opacity: 0.3, 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
        }}
      />
      
    </Box>
  );
};

export default InicioTurmas;
