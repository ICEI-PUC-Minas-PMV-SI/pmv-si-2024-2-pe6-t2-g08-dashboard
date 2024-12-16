import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../providers/AuthProvider';
import { useTheme } from '../providers/ThemeProvider';

const CustomDrawer = (props) => {
  const { userData, logout } = useAuth();
  const { toogleTheme, defaultTheme } = useTheme();
  
  const onLogout = () =>{
    logout();
  }

  return (
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="account-circle" color={color} size={50} />}
            label={() => <Title style={styles.title}>{userData? userData.name : ""}</Title>}
          />
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="account-outline" color={color} size={size} />}
            label="Perfil"
            onPress={() => {}}
          />
          <DrawerItem icon={({ color, size }) => <MaterialCommunityIcons name="tune" color={color} size={size} />} label="Configurações" onPress={() => {}} />
        </Drawer.Section>
        <Drawer.Section title="Preferências">
          <TouchableRipple
            onPress={() => {
              toogleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Tema Escuro</Text>
              <View pointerEvents="none">
                <Switch value={defaultTheme === 'dark'} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
        <View style={styles.bottomSection}>
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="logout-variant" color={color} size={size} />}
            label="Sair"
            style={{alignItems:'center', width: '100%'}}
            onPress={() => {onLogout()}}
          />
        </View>
      </View>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginTop:20
  },
  title: {
    marginTop: 0,
    fontWeight: 'bold',
  },
  bottomSection: {
    alignItems: 'center',
    marginTop:'auto',
    marginBottom:20
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
