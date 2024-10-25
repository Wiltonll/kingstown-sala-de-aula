import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Button } from '@mui/material';

const AlunosList = () => {
  // Mock de dados de alunos
  const alunos = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Carlos Santos' },
  ];

  const handleEdit = (id) => {
    // Lógica para editar aluno
    console.log('Editar Aluno com ID:', id);
  };

  const handleDelete = (id) => {
    // Lógica para excluir aluno
    console.log('Excluir Aluno com ID:', id);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Alunos
      </Typography>
      <List>
        {alunos.map((aluno) => (
          <ListItem key={aluno.id} secondaryAction={
            <>
              <Button onClick={() => handleEdit(aluno.id)}>Editar</Button>
              <Button onClick={() => handleDelete(aluno.id)}>Excluir</Button>
            </>
          }>
            <ListItemText primary={aluno.nome} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AlunosList;
