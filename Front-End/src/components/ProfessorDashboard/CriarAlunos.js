import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const CriarAlunos = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Criar Alunos
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    label="Nome do Aluno"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email do Aluno"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Idade do Aluno"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary">
                    Criar Aluno
                </Button>
            </Box>
        </Box>
    );
};

export default CriarAlunos;
