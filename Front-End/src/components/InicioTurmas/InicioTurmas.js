import React from 'react';
import { Box } from '@mui/material';
import logo from '../../img/logo_roxo(2)_png.png'; 
import styles from './InicioTurmas.module.css';  

const InicioTurmas = () => {
  return (
    <Box className={styles.container}>  
      <img
        src={logo}
        alt="Logo da Escola"
        className={styles.logo}  
      />

    </Box>
  );
};

export default InicioTurmas;
