import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import styles from './styles/AlterarSenha.module.css'; // CSS para estilização

const AlterarSenha = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = () => {
    if (novaSenha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    alert('Senha alterada com sucesso!');
    // Lógica para envio ao backend ou API
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Alterar Senha
      </Typography>
      <form className={styles.form}>
        <TextField
          label="Senha Atual"
          type="password"
          fullWidth
          value={senhaAtual}
          onChange={(e) => setSenhaAtual(e.target.value)}
          className={styles.input}
        />
        <TextField
          label="Nova Senha"
          type="password"
          fullWidth
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          className={styles.input}
        />
        <TextField
          label="Confirmar Nova Senha"
          type="password"
          fullWidth
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          className={styles.input}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type='submit'
          className={styles.button}
        >
          Alterar Senha
        </Button>
      </form>
    </Box>
  );
};

export default AlterarSenha;
