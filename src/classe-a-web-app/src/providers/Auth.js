import { useState, useEffect, useContext, createContext, React } from 'react';
import { loginRequest, logoutRequest } from '../utils/services';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem('user');
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return user !== null;
  });

  useEffect(() => {
    localStorage.setItem('user', user);
    setIsAuthenticated(user !== null);
  }, [user]);

  const login = async (email, password) => {
    const response = await loginRequest(email, password);
      if (response.userId) {
      setUser(response.userId);
    }
    //return response;
  };

  const logout = async() => {
    const response = await logoutRequest();
    setUser(null);
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};