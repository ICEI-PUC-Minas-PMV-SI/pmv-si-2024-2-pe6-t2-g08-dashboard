import React from 'react';
import { Image } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import AnimatedSplash from 'react-native-animated-splash-screen';
import LoginScreen from './pages/LoginScreen';
import HomePage from './pages/HomePage';
import AnalyticsPage from './pages/AnalyticsPage';
import CalendarPage from './pages/CalendarPage';
import CustomDrawer from './components/CustomDrawer';
import { useAuth } from './providers/AuthProvider';
import { useTheme } from './providers/ThemeProvider';

const AppNavigation = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { paperTheme, defaultTheme } = useTheme();

  function LogoTitle() {
    const imageSource = defaultTheme === 'dark' ? require('./assets/logo-classe-a-dark.png') : require('./assets/logo-classe-a-light.png');
    return <Image style={{ width: 70, height: 21, objectFit: 'contain' }} source={imageSource} />;
  }

  const TabStack = createBottomTabNavigator({
    initialRouteName: 'Home',
    screenOptions: ({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Home: 'home',
          Calendar: 'calendar-month',
          AnaLytics: 'area-chart',
          Campaigns: 'campaign',
        };

        return <MaterialIcons name={icons[route.name]} color={color} size={size} />;
      },
      headerShown: false,
    }),
    screens: {
      Home: HomePage,
      Calendar: CalendarPage,
      AnaLytics: AnalyticsPage,
      Campaigns: HomePage,
    },
  });

  const RootStack = createDrawerNavigator({
    initialRouteName: 'Main',
    screens: {
      Main: TabStack,
      Profile: HomePage,
    },
    screenOptions: {
      // headerShown: false,
      headerTitle: (props) => <LogoTitle {...props} />,
      drawerPosition: 'right',
      //drawerIcon: () => <Icon source="dots-vertical" size={25} />,
    },
    drawerContent: (props) => <CustomDrawer {...props} />,
  });

  const UnLoggedStack = createNativeStackNavigator({
    initialRouteName: 'Login',
    screens: {
      Login: LoginScreen,
    },
    screenOptions: {
      headerShown: false,
    },
  });

  const Navigation = createStaticNavigation(RootStack);
  const UnloggedNavigation = createStaticNavigation(UnLoggedStack);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={!isLoading}
      logoImage={require('./assets/logo-classe-a-company.png')}
      backgroundColor={'#000615'}
      logoHeight={150}
      logoWidth={150}
    >
      {' '}
      {isAuthenticated ? <Navigation theme={paperTheme} /> : <UnloggedNavigation theme={paperTheme} />}
    </AnimatedSplash>
  );
};

export default AppNavigation;
