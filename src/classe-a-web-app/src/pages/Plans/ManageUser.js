import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, MenuItem, Select, InputLabel, FormControl, Button, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createUser } from '../../utils/services'

function ForgotPassword({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    senha: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async(e) => {
    //event.preventDefault();
    console.log('Dados do Formulário:', formData);
    const id = "Lx2gPf5q5fhDoBtAf5j2KCem"+(Math.random());
    await createUser({...formData, id:id});
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        sx: { backgroundImage: 'none' },
      }}
    >
      <DialogTitle>Criar novo usuário</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
        <Box>
          {/* Campo Nome */}
          <TextField label="Nome" variant="outlined" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />

          {/* Campo Email */}
          <TextField label="Email" variant="outlined" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />

          {/* Campo Senha */}
          <TextField label="Senha" variant="outlined" name="senha" type="password" value={formData.senha} onChange={handleChange} fullWidth margin="normal" />

          {/* Campo Regra (Select) */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Regra</InputLabel>
            <Select name="role" value={formData.role} onChange={handleChange} label="Regra">
              <MenuItem value="administrador">Administrador</MenuItem>
              <MenuItem value="cliente">Cliente</MenuItem>
              <MenuItem value="funcionario">Funcionário</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSave}>
          Criar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
