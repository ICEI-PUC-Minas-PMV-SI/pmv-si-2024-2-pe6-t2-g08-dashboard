import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';
import { useClients } from '../providers/Clients';

export default function Header() {
  const { clients, selectClient, selectedClient } = useClients();

  const handleChange = (event) => {
    console.log(event.target.value);
    selectClient(event.target.value);
  };

  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'flex-end',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <></>
      <Stack direction="row" sx={{ gap: 1 }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant="outlined">
        <InputLabel id="select-client-label">Cliente</InputLabel>
          <Select labelId="select-client-label" id="select-client" value={selectedClient} label="Cliente" onChange={(e) => handleChange(e)}>
           {
            clients.map((item) => <MenuItem key={item.id} value={item.id}>{item.companyName}</MenuItem>)
           }
          </Select>
          </FormControl>
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
