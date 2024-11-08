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
  const getCookieValue = (name) => {
    const regex = new RegExp(`(^| )${name}=([^;]+)`);
    const match = document.cookie.match(regex);
    if (match) {
      return match[2];
    }
  };

  const [user, setUser] = useState(() => {
    return getCookieValue('user');
  });
  const [isAuthenticated, setIsAuthenticated] = useState(user !== null);

  useEffect(() => {
    document.cookie = `user=${user}`;
    setIsAuthenticated(user !== null && user !== undefined);
  }, [user]);

  const login = async (email, password) => {
    const response = await loginRequest(email, password);
    console.log('response:', response);
    if (response && response.userId) {
      setUser(response.userId);
    }
    //return response;
  };

  const logout = async () => {
    const response = await logoutRequest();
    if (response) {
      setUser(null);
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
