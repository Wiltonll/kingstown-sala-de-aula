import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Button } from '@mui/material';
import styles from './styles/AlunosList.module.css';

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
    <Box className={styles.container}>
      <Typography className={styles.title} variant="h4">
        Lista de Alunos
      </Typography>
      <List>
        {alunos.map((aluno) => (
          <ListItem key={aluno.id} className={styles.listItem} secondaryAction={
            <>
              <Button className={styles.button} onClick={() => handleEdit(aluno.id)}>Editar</Button>
              <Button className={styles.button} onClick={() => handleDelete(aluno.id)}>Excluir</Button>
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
