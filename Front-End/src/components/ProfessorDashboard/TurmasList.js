import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar, Button } from '@mui/material';
import styles from './styles/TurmasList.module.css';

const aulas = [
  { id: 1, title: 'Inglês Avançado', description: 'Aperfeiçoamento em gramática e conversação' },
  { id: 2, title: 'Espanhol Básico', description: 'Introdução à língua e vocabulário' },
  { id: 3, title: 'Francês Intermediário', description: 'Prática de leitura e escrita' },
  { id: 4, title: 'Alemão para Iniciantes', description: 'Fundamentos da língua e cultura' },
];

const InicioTurmas = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Minhas Turmas
      </Typography>
      <Grid container spacing={2} className={styles.gridContainer}>
        {aulas.map((aula) => (
          <Grid item key={aula.id} xs={12} sm={6} md={4}>
            <Card className={styles.card}>
              <CardContent>
                <Avatar className={styles.avatar}>
                  <Typography variant="h6">{aula.title.charAt(0)}</Typography>
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {aula.title}
                </Typography>
                <Typography variant="body2">{aula.description}</Typography>
              </CardContent>
              <Button size="small" variant="contained" className={styles.button}>
                Ver Detalhes
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InicioTurmas;
