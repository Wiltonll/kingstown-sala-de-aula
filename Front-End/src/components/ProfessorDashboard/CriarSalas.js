import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import styles from './styles/CriarSalas.module.css';

const CriarSalas = () => {
  const [nomeSala, setNomeSala] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [horario, setHorario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados para o backend ou atualizar o estado
    console.log('Sala Criada:', { nomeSala, capacidade, horario });
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.title} variant="h4" gutterBottom>
        Criar Sala
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          className={styles.formField}
          label="Nome da Sala"
          variant="outlined"
          fullWidth
          value={nomeSala}
          onChange={(e) => setNomeSala(e.target.value)}
          required
        />
        <TextField
          className={styles.formField}
          label="Capacidade"
          variant="outlined"
          fullWidth
          type="number"
          value={capacidade}
          onChange={(e) => setCapacidade(e.target.value)}
          required
        />
        <TextField
          className={styles.formField}
          label="Dias/Horários"
          variant="outlined"
          fullWidth
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />
        <Button className={styles.createButton} variant="contained" color="primary" type="submit">
          Criar Sala
        </Button>
      </form>
    </Box>
  );
};

export default CriarSalas;
