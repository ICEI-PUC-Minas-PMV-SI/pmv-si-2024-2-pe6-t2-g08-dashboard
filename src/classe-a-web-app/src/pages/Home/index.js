import React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageViewsBarChart from '../../components/PageViewsBarChart';
import SessionsChart from '../../components/SessionsChart';
import StatCard from '../../components/StatCard';

const data = [
  {
    title: 'Clientes',
    value: '30',
    interval: 'últimos 12 meses',
    trend: 'up',
    data: [10, 15, 12, 17, 20, 22, 19, 23, 25, 27, 30, 30,10, 15, 12, 17, 20, 22, 19, 23, 25, 27, 30, 30,10, 15, 12, 17, 20, 30],
  },
  {
    title: 'Faturamento',
    value: '15K',
    interval:  'últimos 12 meses',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
  {
    title: 'Impressões Gerais',
    value: '200k',
    interval: 'últimos 30 dias',
    trend: 'down',
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
];

const Home = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        {/*
         <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
        */}
      </Grid>
    </Box>
  );
};
export default Home;
