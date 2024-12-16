import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useAuth } from '../providers/AuthProvider'; // Import the AuthContext
import { useTheme } from '../providers/ThemeProvider';

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth(); // Get the login function from the context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { defaultTheme } = useTheme();

  const handleLogin = () => {
    login(username, password); // Attempt to log the user in
  };
  const imageSource = defaultTheme === 'dark' ? require('../assets/logo-classe-a-dark.png') : require('../assets/logo-classe-a-light.png');

  return (
    <View style={styles.container}>
      <Image style={{ width: 180, height: 55, objectFit: 'contain', marginLeft:'auto', marginRight:'auto', marginBottom:50}} source={imageSource} />
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button onPress={handleLogin} mode="contained">
        Entrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default LoginScreen;
