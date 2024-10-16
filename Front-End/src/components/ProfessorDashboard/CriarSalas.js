import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

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
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Criar Sala
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome da Sala"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nomeSala}
          onChange={(e) => setNomeSala(e.target.value)}
          required
        />
        <TextField
          label="Capacidade"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={capacidade}
          onChange={(e) => setCapacidade(e.target.value)}
          required
        />
        <TextField
          label="Dias/Horários"
          variant="outlined"
          fullWidth
          margin="normal"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Criar Sala
        </Button>
      </form>
    </Box>
  );
};

export default CriarSalas;
