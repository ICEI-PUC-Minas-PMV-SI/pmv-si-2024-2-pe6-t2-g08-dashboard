import * as React from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, link: '/' },
  //{ text: 'Analytics', icon: <AnalyticsRoundedIcon /> ,link:'/'},
  { text: 'Clientes', icon: <PeopleRoundedIcon />, link: '/clients' },
  { text: 'Campanhas', icon: <AssignmentRoundedIcon />, link: '/campaigns' },
  { text: 'Usuários', icon: <AssignmentRoundedIcon />, link: '/users' },
  { text: 'Planos', icon: <AssignmentRoundedIcon />, link: '/plans' },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Link href={item.link} underline="none" color="inherit">
              <ListItemButton selected={index === 0}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
