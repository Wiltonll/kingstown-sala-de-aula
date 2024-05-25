import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function CriarTurmaPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = data.get('nome');
    const codigo = data.get('codigo');
    console.log(`Nome: ${nome}, Código: ${codigo}`);
    // Lógica para salvar a turma
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        mt: 20, // Ajuste a margem superior para descer mais o formulário
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 4,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Criar Turma
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          label="Nome da Turma"
          name="nome"
          autoComplete="nome"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="codigo"
          label="Código da Turma"
          type="text"
          id="codigo"
          autoComplete="codigo"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, backgroundColor: '#FFD105', color: '#5922A0' }}
        >
          Criar
        </Button>
      </form>
    </Box>
  );
}
