import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from '../../components/CustomizedDataGrid';
import { useClients } from '../../providers/Clients';
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

  const { clients } = useClients();
  const [openManage, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const onSelectionChange = (value) => {
    setSelectedValue(value[0]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid container spacing={2}>
        <Grid size={9}>
          <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
            Clientes
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Adicionar Cliente
          </Button>
        </Grid>
      </Grid>

      <ManageUser open={openManage} handleClose={handleClose} />
      <Grid container spacing={2} columns={12}>
        <CustomizedDataGrid columns={columns} rows={clients} onSelectChange={onSelectionChange} selected={selectedValue} />
      </Grid>
    </Box>
  );
};
export default Clients;
