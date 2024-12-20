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
  const updateUser = (value) =>{
    if(value !== null){
      document.cookie = `user=${value};expires=Session`;
    }else{
      document.cookie = `user=;expires=Session`;
    }
    setUser(value);
  }
  
  const [user, setUser] = useState(() => {
    return getCookieValue('user');
  });
  const [isAuthenticated, setIsAuthenticated] = useState(user !== null && user !== undefined);

  useEffect(() => {
    setIsAuthenticated(user !== null && user !== undefined);
  }, [user]);

  const login = async (email, password) => {
    const response = await loginRequest(email, password);
    if (response && response.userId) {
      updateUser(response.userId);
    }
    //return response;
  };

  const logout = async () => {
    const response = await logoutRequest();
    if (response) {
      updateUser(null);
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
