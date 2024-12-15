import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography } from '@mui/material';

const Analytics = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid spacing={2}>
        <Stack direction="column" sx={{margin:2}}>
          <Typography gutterBottom variant="h5" component="div">
            Contas Alcançadas
          </Typography>
          <LineChart
            xAxis={[
              {
                scaleType: 'time',
                data: [new Date(2024, 0, 1), new Date(2024, 1, 1), new Date(2024, 2, 1), new Date(2024, 3, 1), new Date(2024, 4, 1), new Date(2024, 5, 1)],
                valueFormatter: (value) => value.toLocaleString('default', { month: 'short' }),
              },
            ]}
            series={[
              {
                data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
                area: true,
              },
            ]}
            width={600}
            height={300}
            grid={{ vertical: true, horizontal: true }}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          />
          <Typography gutterBottom variant="body1" component="div">
            Esse é o número de contas alcançadas
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="column"  sx={{margin:2}}>
          <Typography gutterBottom variant="h5" component="div">
            Impressões do último mês
          </Typography>
          <BarChart
            xAxis={[
              {
                scaleType: 'band',
                data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
              },
            ]}
            series={[
              {
                data: [15, 16, 9, 12, 14, 10],
              },
            ]}
            width={600}
            height={300}
            grid={{ vertical: true, horizontal: true }}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          />
          <Typography gutterBottom variant="body1" component="div">
            As impressões são um compilado de quantas vezes as postagens foram vistas
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="column"  sx={{margin:2}}>
          <Typography gutterBottom variant="h5" component="div">
            Gênero Contas Alcançadas
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
            <Stack direction="column">
              <Gauge
                width={250}
                height={250}
                value={64}
                cornerRadius="50%"
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 40,
                    transform: 'translate(0px, 0px)',
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#1E90FF',
                  },
                }}
              />
              <Typography variant="body1" component="div" textAlign={'center'}>
                Homens
              </Typography>
            </Stack>
            <Stack direction="column">
              <Gauge
                width={250}
                height={250}
                value={39}
                cornerRadius="50%"
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 40,
                    transform: 'translate(0px, 0px)',
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#FF69B4',
                  },
                }}
              />
              <Typography variant="body1" component="div" textAlign={'center'}>
                Mulheres
              </Typography>
            </Stack>
          </Stack>
          <Typography gutterBottom variant="body1" component="div">
            Faixa Etária Contas Alcançadas
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="column"  sx={{margin:2}}>
          <Typography gutterBottom variant="h5" component="div">
            Faixa Etária Contas Alcançadas
          </Typography>
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    label: "18-24",
                    value: 18,
                    color: "#2196F3",
                  },
                  {
                    id: 1,
                    label: "25-34",
                    value: 40,
                    color: "#FF9800",
                  },
                  {
                    id: 2,
                    label: "35-44",
                    value: 27.3,
                    color: "#4CAF50",
                  },
                  {
                    id: 3,
                    label: "45-54",
                    value: 14.6,
                    color: "#9C27B0",
                  },
                ],
              },
            ]}
            width={600}
            height={300}
          />
        </Stack>
      </Grid>
    </Box>
  );
};
export default Analytics;
