import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomizedDataGrid from '../../components/CustomizedDataGrid';
import { getAllCampaigns, getAllCreatives } from '../../utils/services';
import ManageUser from './ManageUser';
import { useClients } from '../../providers/Clients';

const Campaigns = (props) => {
  const columns = [
    { field: 'title', headerName: 'Título', flex: 1.5, minWidth: 200 },
    {
      field: 'budget',
      headerName: 'Orçamento',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'description',
      headerName: 'Descrição',
      headerAlign: 'right',
      align: 'right',
      flex: 2,
      minWidth: 80,
    },
  ];
  const navigate = useNavigate();
  const { selectedClient } = useClients();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openManage, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const [creatives, setCreatives] = useState(null);
  const [loadingCreatives, setLoadingCreatives] = useState(true);

  const onSelectionChange = (value) => {
    setSelectedValue(value[0]);
  };

  const fetchData = async () => {
    const data = await getAllCampaigns(selectedClient);
    console.log(data);
    setLoading(false);
    setData(data);
    setSelectedValue(data[0].id);
  };

  useEffect(() => {
    if (selectedClient) {
      fetchData();
    }
  }, [selectedClient]);

  useEffect(() => {
    const fetchCreatives = async () => {
      const data = await getAllCreatives(selectedValue);
      console.log(data);
      setLoadingCreatives(false);
      setCreatives(data);
    };
    if (selectedValue) {
      setLoadingCreatives(true);
      fetchCreatives();
    }
  }, [selectedValue]);

  const handleClose = () => {
    setOpen(false);
    fetchData();
  };

  const onCreativeClick = (data) => {
    navigate('/creatives', { data });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid container spacing={2}>
        <Grid size={9}>
          <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
            Campanhas
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Criar Campanha
          </Button>
        </Grid>
      </Grid>

      <ManageUser open={openManage} handleClose={handleClose} />
      <Grid container spacing={2} columns={12}>
        {loading ? (
          <CircularProgress />
        ) : (
          <CustomizedDataGrid columns={columns} rows={data} onSelectChange={onSelectionChange} selected={selectedValue} pageSize={5} />
        )}
      </Grid>
      {selectedValue && (
        <Grid>
          <Typography gutterBottom variant="h5" component="div">
            Criativos
          </Typography>
          {loadingCreatives ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={2}>
              {creatives.map((item) => (
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia sx={{ height: 140 }} image={item.mediaUrl} />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.content.substring(0, 100) + '...'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      to="/creatives"
                      state={item}
                      style={{
                        textTransform: 'uppercase',
                        fontWeight: 500,
                      }}
                    >
                      Detalhes
                    </Link>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};
export default Campaigns;
