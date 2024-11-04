import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import { AuthProvider } from './providers/Auth';
import PrivateRoute from './utils/PrivateRoute';
import { Home, Clients, Login, Signup, ForgotPassword, Plans, Campaigns, Users, Error404 } from './pages/index';

function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Private Routes */}
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/clients" element={<PrivateRoute element={<Clients />} />} />
            <Route path="/plans" element={<PrivateRoute element={<Plans />} />} />
            <Route path="/campaigns" element={<PrivateRoute element={<Campaigns />} />} />
            <Route path="/users" element={<PrivateRoute element={<Users />} />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </AuthProvider>
    </AppTheme>
  );
}

export default App;
