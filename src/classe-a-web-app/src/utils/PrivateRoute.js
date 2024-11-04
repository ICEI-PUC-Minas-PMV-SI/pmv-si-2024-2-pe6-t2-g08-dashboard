import React from 'react';
import { Navigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from '../components/AppNavbar';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { useAuth } from '../providers/Auth';

const PrivateRoute = ({ element: Component }) => {
  const { isAuthenticated } = useAuth();
  console.log('user:',isAuthenticated);
  // If the user is authenticated, render the component; otherwise, redirect to login
  return isAuthenticated ? (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <AppNavbar />
      {/* Main content */}
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)` : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
          {Component}
        </Stack>
      </Box>
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
