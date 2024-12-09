import { useState, useEffect, useContext, createContext, React } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { MD2DarkTheme, MD2LightTheme, Provider as PaperProvider } from 'react-native-paper';
import merge from 'deepmerge';

const ThemeContext = createContext();
const CombinedDefaultTheme = merge(MD2LightTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(MD2DarkTheme, NavigationDarkTheme);

const CalendarLightTheme = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#00adf5',
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  selectedDotColor: '#ffffff',
  arrowColor: 'orange',
  disabledArrowColor: '#d9e1e8',
  monthTextColor: 'blue',
  indicatorColor: 'blue',
};
const CalendarDarkTheme = {
  backgroundColor: '#121212', // Dark background
  calendarBackground: '#1e1e1e', // Slightly lighter dark background for the calendar
  textSectionTitleColor: '#a0b0c0', // Lighter grayish text for section titles
  textSectionTitleDisabledColor: '#7a8b99', // Muted color for disabled section titles
  selectedDayBackgroundColor: '#6200ee', // Dark purple accent for selected day
  selectedDayTextColor: '#ffffff', // White text for selected day
  todayTextColor: '#bb86fc', // Light purple for today's date
  dayTextColor: '#e0e0e0', // Light gray text for day names
  textDisabledColor: '#7a7a7a', // Muted gray for disabled text
  dotColor: '#bb86fc', // Light purple for dots
  selectedDotColor: '#ffffff', // White for selected dots
  arrowColor: '#ff9800', // Orange arrow color
  disabledArrowColor: '#7a8b99', // Muted gray for disabled arrows
  monthTextColor: '#1e88e5', // Blue for the month text
  indicatorColor: '#1e88e5', // Blue for the indicator
};

const ChartsDarkTheme = {
  backgroundColor: '#000000', // Dark blue-gray background
  backgroundGradientFrom: '#131d22', // Medium dark blue-gray gradient start
  backgroundGradientTo: '#263238', // Light slate blue-gray gradient end
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const ChartsLightTheme = {
  backgroundColor: '#b0bec5', // Very light gray-blue background
  backgroundGradientFrom: '#cfd8dc', // Light gray-blue gradient start
  backgroundGradientTo: '#e1e8ee', // Almost white gray-blue gradient end
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

export const ThemeProvider = ({ children }) => {
  const theme = useProvideTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <PaperProvider theme={theme.paperTheme}>
        <NavigationThemeProvider theme={theme.paperTheme}>{children}</NavigationThemeProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

const useProvideTheme = () => {
  const getValue = async (key) => {
    return await AsyncStorage.getItem(key);
  };

  const setValue = async (value) => {
    setDefaultTheme(value);
    return await AsyncStorage.setItem('defaultTheme', value);
  };

  const createTheme = () => {
    const theme =
      defaultTheme === 'light'
        ? { ...CombinedDefaultTheme, calendarTheme: CalendarLightTheme, chartsTheme: ChartsLightTheme }
        : { ...CombinedDarkTheme, calendarTheme: CalendarDarkTheme, chartsTheme: ChartsDarkTheme };
    return {
      ...theme,

      animation: {
        scale: 1.0,
      },
    };
  };

  const [defaultTheme, setDefaultTheme] = useState('dark');
  const [paperTheme, setPapperTheme] = useState(createTheme());

  const toogleTheme = () => {
    setValue(defaultTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const fetchTheme = async () => {
      const value = await getValue('defaultTheme');
      console.log(value);
      setDefaultTheme(value);
    };
    fetchTheme();
  }, []);

  useEffect(() => {
    setPapperTheme(createTheme());
  }, [defaultTheme]);

  return {
    defaultTheme,
    paperTheme,
    toogleTheme,
  };
};
