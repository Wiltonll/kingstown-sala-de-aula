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
import styles from './styles/ProfessorDashboard.module.css';

const ProfessorDashboard = () => {
  const theme = useTheme();

  const totalAlunos = 50;
  const totalSalas = 10;

  const data = [
    { name: 'Jan', alunos: 30 },
    { name: 'Fev', alunos: 40 },
    { name: 'Mar', alunos: 50 },
    { name: 'Abr', alunos: 70 },
    { name: 'Mai', alunos: 90 },
    { name: 'Jun', alunos: 100 },
  ];

  return (
    <Box className={styles.container}>
      <Typography className={styles.title} variant="h4">
        Dashboard do Professor
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card className={styles.card}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <PeopleIcon className={styles.cardIcon} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={styles.cardTitle}>
                    Total de Alunos
                  </Typography>
                  <Typography variant="h4" className={styles.cardTitle}>
                    {totalAlunos}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card className={styles.card}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <ClassIcon className={styles.cardIcon} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={styles.cardTitle}>
                    Total de Salas
                  </Typography>
                  <Typography variant="h4" className={styles.cardTitle}>
                    {totalSalas}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12}>
          <Card className={styles.card} sx={{ p: 2 }}>
            <CardContent className={styles.chartCard}>
              <Typography variant="h6" className={styles.chartTitle}>
                Evolução de Alunos
              </Typography>
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
