import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

const CriarAlunos = () => {
  const [nomeAluno, setNomeAluno] = useState('');
  const [emailAluno, setEmailAluno] = useState('');
  const [senhaAluno, setSenhaAluno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Aluno Criado com sucesso:', { nomeAluno, emailAluno, senhaAluno });
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
            type="number"
            value={emailAluno}
            onChange={(e) => setEmailAluno(e.target.value)}
            required
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
            label="Senha para o email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={senhaAluno}
            onChange={(e) => setSenhaAluno(e.target.value)}
            required
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
