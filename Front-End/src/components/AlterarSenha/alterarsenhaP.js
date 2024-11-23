import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import styles from './styles/AlterarSenha.module.css'; // CSS para estilização

const AlterarSenha = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = async () => {
    if (novaSenha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    
    const professorId = localStorage.getItem('professor_id'); // Recuperar ID do professor
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:3000/troca-senha/${professorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ senhaAtual, novaSenha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Senha alterada com sucesso')
        // Resetar os campos do formulário
      setSenhaAtual('');
      setNovaSenha('');
      setConfirmarSenha('');
      } 
    } catch (error) {
      console.error('Erro ao tentar alterar a senha:', error);
      alert('Erro ao tentar alterar a senha:', error)
    }
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
          onClick={handleSubmit}
          className={styles.button}
        >
          Alterar Senha
        </Button>
      </form>
    </Box>
  );
};

export default AlterarSenha;
