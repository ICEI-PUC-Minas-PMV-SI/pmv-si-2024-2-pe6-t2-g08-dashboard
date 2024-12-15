import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { CustomProvider } from 'rsuite';
import { ptBR } from 'rsuite/locales';
import AppTheme from './theme/AppTheme';
import { AuthProvider } from './providers/Auth';
import { ClientsProvider } from './providers/Clients';
import PrivateRoute from './utils/PrivateRoute';
import { Home, Clients, Login, Signup, Campaigns, Users, Error404, Calendar, Creative, Analytics } from './pages/index';

function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <CustomProvider locale={ptBR}>
        <AuthProvider>
          <ClientsProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Private Routes */}
                <Route path="/" element={<PrivateRoute element={<Home />} />} />
                <Route path="/clients" element={<PrivateRoute element={<Clients />} />} />
                <Route path="/campaigns" element={<PrivateRoute element={<Campaigns />} />} />
                <Route path="/users" element={<PrivateRoute element={<Users />} />} />
                <Route path="/calendar" element={<PrivateRoute element={<Calendar />} />} />
                <Route path="/creatives" element={<PrivateRoute element={<Creative />} />} />
                <Route path="/analytics" element={<PrivateRoute element={<Analytics />} />} />

                {/* Catch-all for 404 */}
                <Route path="*" element={<Error404 />} />
              </Routes>
            </BrowserRouter>
          </ClientsProvider>
        </AuthProvider>
      </CustomProvider>
    </AppTheme>
  );
}

export default App;
