import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import styles from './styles/CriarAlunos.module.css';

const CriarAlunos = () => {
    return (
        <Box className={styles.container}>
            <Typography className={styles.title} variant="h4" component="h1" gutterBottom>
                Criar Alunos
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    className={styles.formField}
                    label="Nome do Aluno"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className={styles.formField}
                    label="Email do Aluno"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className={styles.formField}
                    label="Idade do Aluno"
                    variant="outlined"
                    fullWidth
                />
                <Button className={styles.createButton} variant="contained" color="primary">
                    Criar Aluno
                </Button>
            </Box>
        </Box>
    );
};

export default CriarAlunos;
