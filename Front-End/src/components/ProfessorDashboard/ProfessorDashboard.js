import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProfessorDashboard = () => {
  const theme = useTheme();

  const totalAlunos = 50;
  const totalSalas = 10;

  // Dados para o gráfico
  const data = [
    { name: 'Jan', alunos: 30 },
    { name: 'Fev', alunos: 40 },
    { name: 'Mar', alunos: 50 },
    { name: 'Abr', alunos: 70 },
    { name: 'Mai', alunos: 90 },
    { name: 'Jun', alunos: 100 },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, color: '#5922A0' }}>
        Dashboard do Professor
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ backgroundColor: '#FFD105' }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <PeopleIcon sx={{ fontSize: 40, color: '#5922A0' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" sx={{ color: '#5922A0' }}>Total de Alunos</Typography>
                  <Typography variant="h4" sx={{ color: '#5922A0' }}>{totalAlunos}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ backgroundColor: '#FFD105' }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <ClassIcon sx={{ fontSize: 40, color: '#5922A0' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" sx={{ color: '#5922A0' }}>Total de Salas</Typography>
                  <Typography variant="h4" sx={{ color: '#5922A0' }}>{totalSalas}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Novo Gráfico */}
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#FFD105', p: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#5922A0' }}>Evolução de Alunos</Typography>
              <LineChart width="100%" height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="alunos" stroke="#5922A0" />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessorDashboard;
