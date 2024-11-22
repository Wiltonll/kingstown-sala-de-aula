import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

const CriarSalas = ({ setTurmas }) => {
  const [nomeSala, setNomeSala] = useState('');
  const [descricao, setDescricao] = useState('');
  const token = localStorage.getItem('token');
  const professor_id = localStorage.getItem('professor_id')
  
  

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!token || !professor_id) {
      alert("Token ou professor_id não encontrados. Realize o login novamente.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/turma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          nome: nomeSala,
          descricao: descricao,
          professor_id: Number(professor_id)
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Turma criada com sucesso');
        setTurmas((prevTurmas) => [...prevTurmas, data]);
      } else {
        alert(data.msg || 'Erro ao criar Turma');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Deu erro', error);
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
            label="Descrição"
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
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
            Criar Sala
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CriarSalas;
