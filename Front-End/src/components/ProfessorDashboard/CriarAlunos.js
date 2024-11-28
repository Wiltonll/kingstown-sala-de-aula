import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
const token = localStorage.getItem('token');

const CriarAlunos = () => {
  const [nomeAluno, setNomeAluno] = useState('');
  const [emailAluno, setEmailAluno] = useState('');
  const [senhaAluno, setSenhaAluno] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          nome: nomeAluno,
          email: emailAluno,
          senha: senhaAluno,
          confirmarsenha: confirmarSenha,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Aluno criado com sucesso');
        setNomeAluno('');
        setEmailAluno('');
        setSenhaAluno('');
        setConfirmarSenha('');
      } else {
        alert(data.msg || 'Erro ao criar aluno');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao criar aluno');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#FFFFF', 
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          backgroundColor: '#FFFF', 
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#5922A0', // Roxo escuro
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Criar Aluno
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome do Aluno(a)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
            required
            InputProps={{
              sx: {
                padding: '12px', // Adiciona espaçamento interno ao campo
              },
            }}
            sx={{
              // Define a cor do rótulo
              '& .MuiInputLabel-root': {
                color: '#5922A0',
              },
              // Define a cor do rótulo quando focado
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#5922A0',
              },
              // Configura o contorno do campo
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#5922A0', // Borda inicial
                },
                '&:hover fieldset': {
                  borderColor: '#7E57C2', // Borda ao passar o mouse
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#5922A0', // Borda quando focado
                },
              },
            }}
          />


          <TextField
            label="Email do Aluno"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={emailAluno}
            onChange={(e) => setEmailAluno(e.target.value)}
            required
            InputProps={{
              sx: {
                padding: '12px', // Adiciona espaçamento interno ao campo
              },
            }}
            sx={{
              // Define a cor do rótulo
              '& .MuiInputLabel-root': {
                color: '#5922A0',
              },
              // Define a cor do rótulo quando focado
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#5922A0',
              },
              // Configura o contorno do campo
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#5922A0', // Borda inicial
                },
                '&:hover fieldset': {
                  borderColor: '#7E57C2', // Borda ao passar o mouse
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#5922A0', // Borda quando focado
                },
              },
            }}
          />
          <TextField
            label="Senha"
            variant="outlined"
            fullWidth
            margin="normal"
            type='password'
            value={senhaAluno}
            onChange={(e) => setSenhaAluno(e.target.value)}
            required
            InputProps={{
              sx: {
                padding: '12px', // Adiciona espaçamento interno ao campo
              },
            }}
            sx={{
              // Define a cor do rótulo
              '& .MuiInputLabel-root': {
                color: '#5922A0',
              },
              // Define a cor do rótulo quando focado
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#5922A0',
              },
              // Configura o contorno do campo
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#5922A0', // Borda inicial
                },
                '&:hover fieldset': {
                  borderColor: '#7E57C2', // Borda ao passar o mouse
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#5922A0', // Borda quando focado
                },
              },
            }}
          />
          <TextField
            label="Confirmar senha"
            variant="outlined"
            fullWidth
            margin="normal"
            type='password'
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
            InputProps={{
              sx: {
                padding: '12px', // Adiciona espaçamento interno ao campo
              },
            }}
            sx={{
              // Define a cor do rótulo
              '& .MuiInputLabel-root': {
                color: '#5922A0',
              },
              // Define a cor do rótulo quando focado
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#5922A0',
              },
              // Configura o contorno do campo
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#5922A0', // Borda inicial
                },
                '&:hover fieldset': {
                  borderColor: '#7E57C2', // Borda ao passar o mouse
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#5922A0', // Borda quando focado
                },
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              marginTop: 2,
              paddingY: 1.5,
              backgroundColor: '#5922A0',
              color: '#FFD105',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#7E57C2',
              },
            }}
          >
            Criar Aluno
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CriarAlunos;
