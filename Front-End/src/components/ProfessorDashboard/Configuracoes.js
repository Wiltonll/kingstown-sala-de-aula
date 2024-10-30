import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import styles from './styles/Configuracoes.module.css';

const Configuracoes = () => {
  const [horarioFuncionamento, setHorarioFuncionamento] = useState('');
  const [contato, setContato] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Configurações Atualizadas:', { horarioFuncionamento, contato });
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.title} variant="h4" gutterBottom>
        Configurações
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Horário de Funcionamento"
          variant="outlined"
          fullWidth
          className={styles.formField}
          value={horarioFuncionamento}
          onChange={(e) => setHorarioFuncionamento(e.target.value)}
          required
        />
        <TextField
          label="Contato"
          variant="outlined"
          fullWidth
          className={styles.formField}
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          required
        />
        <Button className={styles.submitButton} variant="contained" color="primary" type="submit">
          Atualizar Configurações
        </Button>
      </form>
    </Box>
  );
};

export default Configuracoes;
