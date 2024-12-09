import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from '../../components/CustomizedDataGrid';
import { getAllClients } from '../../utils/services';
import ManageUser from './ManageUser';

const Clients = () => {
  const columns = [
    { field: 'companyName', headerName: 'Cliente', flex: 1.5, minWidth: 200 },
    {
      field: 'contactInfo',
      headerName: 'Email de contato',
      flex: 1.5,
      minWidth: 100,
    },
    {
      field: 'contractUrl',
      headerName: 'Contrato',
      headerAlign: 'right',
      align: 'right',
      flex: 0.5,
      minWidth: 80,
    },
    {
      field: 'planId',
      headerName: 'Plano',
      headerAlign: 'right',
      align: 'right',
      flex: 0.5,
      minWidth: 80,
    },
  ];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openManage, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllClients();
      console.log(data);
      setLoading(false);
      setData(data);
    };
    fetchData();
  }, []);

  const handleClose =async ()=>{
    setOpen(false);
    const data = await getAllClients();
      console.log(data);
      setLoading(false);
      setData(data);
  }

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid container spacing={2}>
        <Grid size={10}>
          <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
            Usuários
          </Typography>
        </Grid>
        <Grid size={2}>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Criar Usuário
          </Button>
        </Grid>
      </Grid>

      <ManageUser
        open={openManage}
        handleClose={handleClose}
      />
      <Grid container spacing={2} columns={12}>
        {loading ? <CircularProgress /> : <CustomizedDataGrid columns={columns} rows={data} />}
      </Grid>
    </Box>
  );
};
export default Clients;
