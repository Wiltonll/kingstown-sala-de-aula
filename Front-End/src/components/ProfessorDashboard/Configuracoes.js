import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Configuracoes = () => {
  const [horarioFuncionamento, setHorarioFuncionamento] = useState('');
  const [contato, setContato] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados para o backend ou atualizar o estado
    console.log('Configurações Atualizadas:', { horarioFuncionamento, contato });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Configurações
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Horário de Funcionamento"
          variant="outlined"
          fullWidth
          margin="normal"
          value={horarioFuncionamento}
          onChange={(e) => setHorarioFuncionamento(e.target.value)}
          required
        />
        <TextField
          label="Contato"
          variant="outlined"
          fullWidth
          margin="normal"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Atualizar Configurações
        </Button>
      </form>
    </Box>
  );
};

export default Configuracoes;
