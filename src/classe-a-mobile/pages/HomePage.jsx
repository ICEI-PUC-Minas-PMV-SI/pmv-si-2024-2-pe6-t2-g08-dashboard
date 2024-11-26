import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../providers/AuthProvider'; // Import the AuthContext

const HomePage = () => {
  const { user, logout } = useAuth(); // Get user info and logout function from context

  return (
    <View style={styles.container}>
      <Text>Welcome, {user}!</Text>
      <Button onPress={()=>{logout()}}
      title='Logout'
      color="#f194ff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
