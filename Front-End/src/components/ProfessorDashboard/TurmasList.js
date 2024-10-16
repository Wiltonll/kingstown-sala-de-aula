// src/pages/InicioTurmas.js
import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar, Button } from '@mui/material';

const aulas = [
  { id: 1, title: 'Inglês Avançado', description: 'Aperfeiçoamento em gramática e conversação' },
  { id: 2, title: 'Espanhol Básico', description: 'Introdução à língua e vocabulário' },
  { id: 3, title: 'Francês Intermediário', description: 'Prática de leitura e escrita' },
  { id: 4, title: 'Alemão para Iniciantes', description: 'Fundamentos da língua e cultura' },
];

const InicioTurmas = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '16px' }}> {/* Alinhamento centralizado */}
      <Typography variant="h4" sx={{ color: '#5922A0', textAlign: 'center', marginBottom: 2 }}>
        Minhas Turmas
      </Typography>
      <Grid container spacing={2} sx={{ marginLeft: '-16px' }}> {/* Margem negativa */}
        {aulas.map((aula) => (
          <Grid item key={aula.id} xs={12} sm={6} md={4}>
            <Card 
              sx={{ 
                width: '100%', 
                height: '200px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                backgroundColor: '#FFD105', 
                color: '#5922A0', 
                borderRadius: 2, 
                boxShadow: 3, 
                marginBottom: '16px' 
              }}
            >
              <CardContent>
                <Avatar sx={{ backgroundColor: '#5922A0', mb: 2 }}>
                  <Typography variant="h6">{aula.title.charAt(0)}</Typography>
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {aula.title}
                </Typography>
                <Typography variant="body2">{aula.description}</Typography>
              </CardContent>
              <Button size="small" variant="contained" sx={{ backgroundColor: '#5922A0', color: '#fff', margin: '8px' }}>
                Ver Detalhes
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InicioTurmas;
