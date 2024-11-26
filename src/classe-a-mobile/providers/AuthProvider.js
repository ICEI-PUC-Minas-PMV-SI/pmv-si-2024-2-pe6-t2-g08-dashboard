import { useState, useEffect, useContext, createContext, React } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest, logoutRequest, getUserInfo } from '../utils/services';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const getValue = async (key) => {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  };

  const setValue = async (key, value) => {
    setUserInfo((prevState) => ({ ...prevState, [key]: value }));
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  };

  const [userInfo, setUserInfo] = useState({
    userId: null,
    userToken: null,
    clientId: null,
    userData: null,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasToken = userInfo.userToken !== null && userInfo.userToken !== undefined;
    setIsAuthenticated(hasToken);
    if (!hasToken) {
      setValue('userId', null);
    }
  }, [userInfo.userToken]);

  useEffect(async () => {
    const userId = await getValue('userId');
    const userToken = await getValue('userToken');
    const clientId = await getValue('clientId');
    const userData = await getValue('userData');

    setUserInfo({userToken, userId, clientId, userData})

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const login = async (email, password) => {
    const response = await loginRequest(email, password);
    if (response && response.userId && response.accessToken) {
      setValue('userId', response.userId);
      setValue('userToken', response.accessToken);
      const userData = await getUserInfo(response.userId);
      setValue('userData', userData);
    }
  };

  const logout = async () => {
    const response = await logoutRequest();
    if (response) {
      setValue('userToken', null);
    }
  };

  return {
    userId: userInfo.userId,
    userToken: userInfo.userToken,
    userData: userInfo.userData,
    clientId: userInfo.clientId,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
};
