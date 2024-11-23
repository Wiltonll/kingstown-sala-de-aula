import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import styles from './styles/ConfigTela.module.css'; // Importar o arquivo CSS (estilos)
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



const theme = createTheme({
    palette: {
      primary: {
        main: '#ffea00', // Cor amarela
        contrastText: '#8e24aa',
      },
    },
});

const ConfigTela = () => {
    const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Configurações da Conta
      </Typography>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Card className={styles.card}>
            <CardContent>
              <Grid container direction="column" spacing={2}>

                <Grid item>
                  <Typography variant="h6" className={styles.cardTitle}>
                    Alterar Senha
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={styles.button}
                    onClick={() => navigate('/alterar-senha')}
                  >
                    Alterar Senha
                  </Button>
                </Grid>

                <Grid item>
                  <Typography variant="h6" className={styles.cardTitle}>
                    Logout
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={styles.button}
                  >
                    Fazer Logout
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
};

export default ConfigTela;
