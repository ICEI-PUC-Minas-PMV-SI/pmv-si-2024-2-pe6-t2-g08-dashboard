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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessIcon from '@mui/icons-material/Business';

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, link: '/' },
  { text: 'Analytics', icon: <AnalyticsRoundedIcon /> ,link:'/analytics'},
  { text: 'Clientes', icon: <BusinessIcon />, link: '/clients' },
  { text: 'Campanhas', icon: <AssignmentRoundedIcon />, link: '/campaigns' },
  { text: 'Usuários', icon: <PeopleRoundedIcon />, link: '/users' },
  { text: 'Calendário', icon: <CalendarMonthIcon />, link: '/calendar' },
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
